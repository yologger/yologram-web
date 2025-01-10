import JoinPage from "./JoinPage"
import {IJoinPayload, IJoinResult} from "~/types";
import {useState} from "react";
import {useHistory} from "react-router-dom";

interface IContainerProps {
    onJoin: (data: IJoinPayload) => Promise<IJoinResult>;
}

const Container = ({ onJoin }: IContainerProps) => {

    const [isAlertShown, setIsAlertShown] = useState(false)
    const [alertErrorMessage, setAlertErrorMessage] = useState("")
    const history = useHistory();

    const join = async (payload: IJoinPayload) => {
        const result = await onJoin(payload)
        if (result.errorCode) {
            // 회원가입 실패
            setAlertErrorMessage(result.errorMessage)
            setIsAlertShown(true)
        } else {
            // 회원가입 성공
            history.replace("/")
        }
    }

    const onCancel = () => {
        history.goBack()
    }

    const onConfirmAlert = () => {
        setAlertErrorMessage("")
        setIsAlertShown(false)
    }

    return <JoinPage
        join={join}
        isAlertShown={isAlertShown}
        alertErrorMessage={alertErrorMessage}
        onConfirmAlert={onConfirmAlert}
        onCancel={onCancel}
    />
}

export default Container