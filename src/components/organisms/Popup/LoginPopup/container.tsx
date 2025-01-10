import LoginPopup from "./LoginPopup"
import {ILoginPayload, ILoginResult} from "~/types/auth";
import {useHistory} from "react-router-dom";

interface IContainerPros {
    // onClose: () => void
    isShownLoginPopup: boolean
    setLoginPopup: (isLoginPopupOpened: boolean) => void
    onLogin: (data: ILoginPayload) => Promise<ILoginResult>
    fail: (msg: string) => void;
}

const Container = ({
    onLogin,
    isShownLoginPopup,
    setLoginPopup,
    fail
}: IContainerPros) => {
    const history = useHistory();
    const onClose = () => setLoginPopup(false)

    const login = async (payload: ILoginPayload) => {
        const result = await onLogin(payload)
        if (result.errorCode) {
            // 로그인 실패
            fail("로그인 실패")


        } else {
            // 로그인 성공

            // isLoggedIn = true
            //

            setLoginPopup(false)
            history.replace("/")
        }
    }

    return <>
        <LoginPopup
            isLoginPopupOpened={isShownLoginPopup}
            onClose={onClose}
            login={login}
        />
    </>
}

export default Container