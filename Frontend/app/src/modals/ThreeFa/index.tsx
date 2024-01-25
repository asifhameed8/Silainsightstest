import { Button } from '@components/Button';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import speakeasy from 'speakeasy';
import QRCode from 'qrcode';
import { toast } from 'react-toastify';
import { userSelector } from 'src/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { SETTINGS_MUTATION } from 'src/graphql/settings';
import { useMutation } from '@apollo/client';
import { setSettings } from 'src/store/reducers/auth.reducer';
import useTranslation from 'next-translate/useTranslation';

const base32 = require('thirty-two');

interface Iprops {
    setState(state: number): void;
}
const ThreeFa = ({ setState }: Iprops) => {
    const { t } = useTranslation('common');
    const user = useSelector(userSelector);
    const { settings } = user;
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1);
    const [secret, setSecret] = useState('');
    const dispatch = useDispatch();
    const [qrCodeUrl, setQrCodeUrl] = useState<string | undefined>('');

    const settingModal = () => {
        setState(1);
    };

    const [changeSettingsMu, { loading }] = useMutation(SETTINGS_MUTATION, {
        onCompleted: () => {
            dispatch(
                setSettings({
                    threeFa: true
                })
            );
            setStep(2);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    });

    const verifyBtn = async () => {
        // setActiveAuthLoading(true);
        // await sleep(3000);
        // setActiveAuthLoading(false);

        // setStep(2); // move to next temp;

        // if (!Buffer.isBuffer(secret)) {
        //     secret = encoding === 'base32' ? new Buffer(base32.decode(secret)) : new Buffer(secret, encoding);
        //   }
        const secretBuffer = base32.decode(secret);
        const isVerified = speakeasy.totp.verify({
            secret: secretBuffer,
            encoding: 'base32',
            token: otp
        });

        isVerified
            ? changeSettingsMu({ variables: { data: { ...settings, threeFa: true, base32_secret: secret } } })
            : toast.error('Please type correct code');
    };

    const generateSecret = () => {
        const { base32, otpauth_url } = speakeasy.generateSecret({
            name: `MintStargram ${user.userName}`,
            length: 16
        });
        setSecret(base32);

        // @ts-ignore
        QRCode.toDataURL(otpauth_url, (err, image_data) => {
            setQrCodeUrl(image_data);
        });
    };

    useEffect(() => {
        if (!user.settings.threeFa) {
            generateSecret();
        }
    }, []);

    return (
        <div className={`superman-3fa-container w-full rounded-md border border-borderColor sm:w-[32rem]`}>
            <div className="overflow-hidden rounded-md border border-lightBorder dark:border-borderColor  sm:!w-[32rem]">
                <div className="flex gap-2 border-b border-lightBorder bg-lightBg px-2 py-6 dark:border-borderColor dark:bg-gray17">
                    <div className="flex cursor-pointer items-center gap-3" onClick={settingModal}>
                        <i className="icon-Setting text-xs text-secondary"></i>
                        <h2 className=" cursor-pointer font-display text-sm font-semibold  text-secondary dark:hover:text-white">
                            {t('Setting.Settings')}
                        </h2>
                    </div>
                    <div className="flex items-center gap-3">
                        <i className="icon-rightarrow text-xs text-secondary"></i>
                        <h2 className=" font-display text-sm font-semibold dark:text-chinesesilver">{t('Setting.AuthenticatorApp')}</h2>
                    </div>
                </div>
                <div className="superman-content-main">
                    {/* {step < 3 && (
                        <div className="multi-steps">
                            <span className={`${step == 1 ? 'active' : ''} ${step > 1 ? 'active completed' : ''} `}>
                                <b>1</b>
                            </span>
                            <span className={`${step == 2 ? 'active' : ''} ${step > 2 ? 'active completed' : ''} `}>
                                <b>2</b>
                            </span>
                            <span className={`${step == 3 ? 'active' : ''} ${step > 3 ? 'completed' : ''} `}>
                                <b>3</b>
                            </span>
                        </div>
                    )} */}
                    {/* Step 1 */}
                    {step == 1 && (
                        <div className="flex-column step-1 flex">
                            <div className="info flex-column mb-3 flex">
                                <h3 className="mb-3">{t('Setting.ConfigureAuthy')} </h3>
                                <ul>
                                    <li>{t('Setting.InstallGoogle')}</li>
                                    <li>{t('Setting.InAuthenticator')}</li>
                                    <li>{t('Setting.BarCode')}</li>
                                </ul>
                            </div>
                            <div className="info flex-column mb-3 flex">
                                <h3>{t('Setting.ScanCode')}</h3>
                                <div className="flex justify-center">
                                    <div className="qr-code-image">
                                        <div className="img">{qrCodeUrl && <img src={qrCodeUrl} alt="qr" />}</div>
                                        <span>{t('Setting.ScanMe')}</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="info flex-column mb-3 flex">
                                <h3>Or enter code into your app</h3>
                                <p>SecrectKey: asdfjkahwiufadksjfhakljhrkjlasdhflkjahfkjlasdhfa (Base32 encode)</p>
                            </div> */}
                            <div className="info flex-column mb-6 flex">
                                <h3>{t('Setting.VerifyCode')}</h3>
                                <p>{t('Setting.AuthenticationCode')}</p>
                                {/*  <input type="nubmer" /> */}
                                <div className="otp-code">
                                    <OtpInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={6}
                                        renderSeparator={<span>-</span>}
                                        renderInput={(props) => <input {...props} />}
                                    />
                                </div>
                            </div>

                            <div className="info flex-column mb-3 flex">
                                <div className="flex justify-end gap-3">
                                    <Button variant="outline" onClick={settingModal}>
                                        {t('Setting.Close')}
                                    </Button>
                                    <Button disabled={loading} isLoading={loading} onClick={verifyBtn}>
                                        {t('Setting.Activate')}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                    {step == 2 && (
                        <div className="flex-column step-3 flex">
                            <h3> {t('Setting.ThreeFactor')}</h3>
                            <div className="check-animation">
                                <div className="check-animation-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-success" viewBox="0 0 24 24">
                                        <g stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                            <circle className="success-circle-outline" cx="12" cy="12" r="11.5" />
                                            <circle className="success-circle-fill" cx="12" cy="12" r="11.5" />
                                            <polyline className="success-tick" points="17,8.5 9.5,15.5 7,13" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThreeFa;
