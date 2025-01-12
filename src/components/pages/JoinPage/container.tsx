import JoinPage from "./JoinPage"
import {IJoinPayload, IJoinResult} from "~/types";
import {ILoginPayload, ILoginResult} from "~/types/auth";
import {ChangeEvent, useState} from "react";
import {useHistory} from "react-router-dom";

interface IContainerProps {
    onJoin: (data: IJoinPayload) => Promise<IJoinResult>;
    onLogin: (data: ILoginPayload) => Promise<ILoginResult>    
}

const Container = ({ onJoin, onLogin }: IContainerProps) => {

    const [email, setEmail] = useState("yologger1@gmail.com")
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => { 
      e.preventDefault()
      setEmail(e.target.value)
      setEmailErrorMessage("")
    }
    const isEmailValid = (email: string) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)

    const [name, setName] = useState("yologger1")
    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => { 
      e.preventDefault()
      setName(e.target.value)
      setNameErrorMessage("")
    }
    const isNameValid = (name: string) => name.length >= 4 && name.length <= 20

    const [nickname, setNickname] = useState("yologger1")
    const [nicknameErrorMessage, setNicknameErrorMessage] = useState("")
    const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => { 
        e.preventDefault()
        setNickname(e.target.value)
        setNicknameErrorMessage("")
    }
    const isNicknameValid = (name: string) => name.length >= 4 && name.length <= 20

    const [password, setPassword] = useState("Yologger1234!@")
    const [passwordErrorMessage, setPasswordErrorMessage] = useState("")
    const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => { 
        e.preventDefault()
        setPassword(e.target.value) 
        setPasswordErrorMessage("")
    }
    const isPasswordValid = (password: string) => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/.test(password);

    const [isAlertShown, setIsAlertShown] = useState(false)
    const [alertErrorMessage, setAlertErrorMessage] = useState("")
    const history = useHistory();

    const join = async (payload: IJoinPayload) => {
        if(!isEmailValid(email)) {
            setEmailErrorMessage(" ⃠ 이메일 형식이 유효하지 않아요")
            return 
        }
        if(!isNameValid(name)) {
            setNameErrorMessage(" ⃠ 4~20자로 입력해주세요")
            return 
        }
        if(!isNicknameValid(nickname)) {
            setNicknameErrorMessage(" ⃠ 4~20자로 입력해주세요")
            return 
        }
        if(!isPasswordValid(password)) {
            setPasswordErrorMessage(" ⃠ 하여 8~20자로 입력해주세요 (알파벳 대소문자, 숫자, 특수문자 포함)")
            return 
        }
        
        const result = await onJoin(payload)
        if (result.errorCode) {
            // 회원가입 실패
            if (result.errorCode === 'DUPLICATE_USER') {
                setEmailErrorMessage(" ⃠ 이미 회원가입된 이메일이에요")
            }            
        } else {
            // 회원가입 성공
            await onLogin({email, password})

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
        email={email}
        emailErrorMessage={emailErrorMessage}
        onEmailChange={onEmailChange}
        name={name}
        nameErrorMessage={nameErrorMessage}
        onNameChange={onNameChange}
        nickname={nickname}
        nicknameErrorMessage={nicknameErrorMessage}
        onNicknameChange={onNicknameChange}
        password={password}
        passwordErrorMessage={passwordErrorMessage}
        onPasswordChange={onPasswordChange}
        join={join}
        isAlertShown={isAlertShown}
        alertErrorMessage={alertErrorMessage}
        onConfirmAlert={onConfirmAlert}
        onCancel={onCancel}
    />
}

export default Container