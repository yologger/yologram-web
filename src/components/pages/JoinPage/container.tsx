import JoinPage from "./JoinPage"
import {IJoinData, IJoinResult} from "~/types";
import {useState} from "react";
import {useHistory} from "react-router-dom";

interface IContainerProps {
    onJoin: (data: IJoinData) => Promise<IJoinResult>;
}

const Container = ({ onJoin }: IContainerProps) => {

    const [isAlertShown, setIsAlertShown] = useState(false)
    const [alertErrorMessage, setAlertErrorMessage] = useState("")
    const history = useHistory();

    const join = async (data: IJoinData) => {
        const result = await onJoin(data)
        if (result.errorCode) {
            // 회원가입 실패
            setAlertErrorMessage(result.errorMessage)
            setIsAlertShown(true)
        } else {
            // 회원가입 성공
            // console.log(result)
            // console.log(result.data.uid)
            // console.log(result.data.uid)
            history.replace("/")
        }
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
    />
}

export default Container