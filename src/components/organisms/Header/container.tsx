import { IUserInfo } from "~/types"
import Header from "./Header"

interface IContainerProps {
    isLoggedIn: boolean,
    accessToken?: string,
    setLoginPopup: (isLoginPopupOpened: boolean) => void
}

const Container = ({
    isLoggedIn, 
    accessToken, 
    setLoginPopup
}: IContainerProps) => {

    const openLoginPopup = () => setLoginPopup(true)

    return <>
        <h1>isLoggedIn: {isLoggedIn.toString() }</h1>
        <h1>accessToken: {accessToken}</h1>
        <Header
            isLoggedIn={isLoggedIn}
            openLoginPopup={openLoginPopup}
        />
    </>
}

export default Container