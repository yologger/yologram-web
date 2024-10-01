import { useState } from "react"
import TestPage from "./TestPage"

const Container = () => {

    const [isShownAlert, setIsShownAlert] = useState(false)
    const openAlert = () => { setIsShownAlert(true) }
    const onAlertConfirm = () => setIsShownAlert(false)
    const onAlertCancel = () => setIsShownAlert(false)

    return <TestPage 
        isShownAlert={isShownAlert}
        openAlert={openAlert}
        onAlertConfirm={onAlertConfirm}
        onAlertCancel={onAlertCancel}
    />
}

export default Container