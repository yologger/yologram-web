
import Header from "./Header"
import { useState } from "react"
import { ILogoutAction } from "~/store/auth/types"
import { IUserInfo } from "~/types/userInfo"

interface IContainerProps {
    accessToken?: string,
    userInfo?: IUserInfo,
    setLoginPopup: (isLoginPopupOpened: boolean) => void
    onLogout: () => Promise<ILogoutAction>
}

const Container = ({
    accessToken, 
    userInfo,
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
        <h1>accessToken: {accessToken ?? ''}</h1>
        <h1>uid: {userInfo?.uid ?? 0}</h1>
        <h1>email: {userInfo?.email ?? ''}</h1>
        <h1>nickname: {userInfo?.nickname ?? ''}</h1>
        <h1>name: {userInfo?.name ?? ''}</h1>
        <Header
            accessToken={accessToken}
            openLoginPopup={openLoginPopup}
            isLogoutAlertShown={isLogoutAlertShown}
            onLogoutConfirm={onLogoutConfirm}
            onLogoutCancel={onLogoutCancel}
            openLogoutAlert={openLogoutAlert}
        />
    </>
}

export default Container