import { IUserInfo } from "~/types"
import Header from "./Header"
import { useState } from "react"
import { ILogoutAction } from "~/store/auth/types"

interface IContainerProps {
    isLoggedIn: boolean,
    accessToken?: string,
    setLoginPopup: (isLoginPopupOpened: boolean) => void
    onLogout: () => Promise<ILogoutAction>
}

const Container = ({
    isLoggedIn, 
    accessToken, 
    setLoginPopup,
    onLogout
}: IContainerProps) => {

    const openLoginPopup = () => setLoginPopup(true)

    const [isLogoutAlertShown, setIsLogoutAlertShown] = useState(false)

    const openLogoutAlert = () => setIsLogoutAlertShown(true)

    const onLogoutConfirm = () => {
        onLogout()
        setIsLogoutAlertShown(false)
    }

    const onLogoutCancel = () => setIsLogoutAlertShown(false)

    return <>
        <h1>isLoggedIn: {isLoggedIn.toString() }</h1>
        <h1>accessToken: {accessToken}</h1>
        <Header
            isLoggedIn={isLoggedIn}
            openLoginPopup={openLoginPopup}
            isLogoutAlertShown={isLogoutAlertShown}
            onLogoutConfirm={onLogoutConfirm}
            onLogoutCancel={onLogoutCancel}
            openLogoutAlert={openLogoutAlert}
        />
    </>
}

export default Container