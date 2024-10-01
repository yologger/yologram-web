import { useState } from "react"
import TestPage from "./TestPage"

interface IContainerProps {
    success: (msg: string) => void;
}

const Container = ({ success }: IContainerProps) => {

    const [isShownAlert, setIsShownAlert] = useState(false)
    const openAlert = () => { setIsShownAlert(true) }
    const onAlertConfirm = () => setIsShownAlert(false)
    const onAlertCancel = () => setIsShownAlert(false)

    const openToast = () => { 
        const toastMsg = 'This is toast'
        success(toastMsg) 
    }

    const [isShownDialog, setIsShownDialog] = useState(false)
    const openDialog = () => setIsShownDialog(true)
    const closeDialog = () => setIsShownDialog(false)

    const [isShownPopup, setisShownPopup] = useState(false)
    const openPopup = () => { setisShownPopup(true) }
    const closePopup = () => { setisShownPopup(false) }

    return <TestPage 
        isShownAlert={isShownAlert}
        openAlert={openAlert}
        onAlertConfirm={onAlertConfirm}
        onAlertCancel={onAlertCancel}
        openToast={openToast}
        isShownDialog={isShownDialog}
        openDialog={openDialog}
        closeDialog={closeDialog}
        isShownPopup={isShownPopup}
        openPopup={openPopup}
        closePopup={closePopup}
    />
}

export default Container