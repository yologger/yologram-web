import LoginPopup from "./LoginPopup"

interface IContainerPros {
    // onClose: () => void
    isShownLoginPopup: boolean
    setLoginPopup: (isLoginPopupOpened: boolean) => void
}

const Container = ({ isShownLoginPopup, setLoginPopup }: IContainerPros) => {

    const onClose = () => setLoginPopup(false)

    return <>
        <LoginPopup isLoginPopupOpened={isShownLoginPopup} onClose={onClose} />
    </>
}

export default Container