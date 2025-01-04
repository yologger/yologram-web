import LoginPopup from "./LoginPopup"

interface IContainerPros {
    // onClose: () => void
    isShownLoginPopup: boolean
    setLoginPopup: (isLoginPopupOpened: boolean) => void
}

const Container = ({ isShownLoginPopup, setLoginPopup }: IContainerPros) => {

    const onLogin = () => setLoginPopup(false)
    const onClose = () => setLoginPopup(false)

    return <>
        <LoginPopup isLoginPopupOpened={isShownLoginPopup} onClose={onClose} onLogin={onLogin}/>
    </>
}

export default Container