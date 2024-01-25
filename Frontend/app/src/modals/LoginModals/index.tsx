import Login from '@modals/Login';
import BasicModal from '@modals/BasicModal';
import React, { useState } from 'react';
import SignUp from '@modals/Signup';
import ForgetPassword from '@modals/ForgetPassword';
import EmailSent from '@modals/EmailSent';
import NewPassword from '@modals/NewPassword';

type ModalState = 0 | 1 | 2 | 3 | 4 | 5;

interface ILogin {
    setState(state: number): void;
    setPopup(popup: boolean): void;
}

interface ISignup {
    setPopup(popup: boolean): void;
}

interface IForgotPassword {
    setState(state: number): void;
    setEmail: Function;
}

interface IEmailSent {
    setState(state: number): void;
    email: string;
    setCode: Function;
}

interface INewPassword {
    email: string;
    code: string;
    setPopup(popup: boolean): void;
}

type LoginData = {
    0?: undefined;
    1: ILogin;
    2: ISignup;
    3: IForgotPassword;
    4: IEmailSent;
    5: INewPassword;
};
interface ILoginModal<LoginData> {
    data?: LoginData;
    state: ModalState;
    popup: boolean;
    setState(state: ModalState): void;
    setPopup(popup: boolean): void;
}

const LoginModals = <S extends ModalState>({ state, popup, setState, setPopup }: ILoginModal<LoginData[S]>) => {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    return (
        <BasicModal show={popup} hide={setPopup} className="my-16">
            {(() => {
                switch (state) {
                    case 1: {
                        return <Login setState={setState} setPopup={setPopup} />;
                    }
                    case 2: {
                        return <SignUp setPopup={setPopup} setHandleState={setState} />;
                    }
                    case 3: {
                        return <ForgetPassword setState={setState} setEmail={setEmail} />;
                    }
                    case 4: {
                        return <EmailSent setState={setState} email={email} setCode={setCode} />;
                    }
                    case 5: {
                        return <NewPassword setPopup={setPopup} email={email} code={code} />;
                    }
                    default:
                        break;
                }
            })()}
        </BasicModal>
    );
};

export default LoginModals;
