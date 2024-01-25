import { useState } from 'react';
import Login from '@modals/Login';
import SignUp from '@modals/Signup';
import ForgetPassword from '@modals/ForgetPassword';
import EmailSent from '@modals/EmailSent';
import NewPassword from '@modals/NewPassword';
import VerifyEmail from '@modals/VerifyEmail';
import InviteCode from './inviteCode';
interface ILoginModa {
    state: number;
    setState(state: number): void;
}
const LoginFlow = ({ state, setState }: ILoginModa) => {
    const [email, setEmail] = useState('');
    const [data, setData] = useState<{ email: string }>({ email: '' });
    const [code, setCode] = useState('');

    return (
        <div className="mx-auto w-full px-8 lg:w-full lg:px-0">
            {(() => {
                switch (state) {
                    case 1: {
                        return <Login setState={setState} landing setData={setData} data={data} />;
                    }
                    case 2: {
                        return <SignUp setHandleState={setState} landing />;
                    }
                    case 3: {
                        return <ForgetPassword setState={setState} setEmail={setEmail} data={data} landing />;
                    }
                    case 4: {
                        return <EmailSent setState={setState} email={email} setCode={setCode} landing />;
                    }
                    case 5: {
                        return <NewPassword email={email} code={code} setState={setState} landing />;
                    }
                    case 6: {
                        return <VerifyEmail landing />;
                    }
                    case 7: {
                        return <InviteCode />;
                    }
                    default:
                        break;
                }
            })()}
        </div>
    );
};

export default LoginFlow;
