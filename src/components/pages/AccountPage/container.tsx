import { IUserInfo } from "~/types/userInfo"
import AccountPage from "./AccountPage"
import { ChangeEvent, useState } from "react"

interface IContainerProps {
    userInfo?: IUserInfo,
}

const Container = ({
    userInfo,
}: IContainerProps) => {

    const [email, setEmail] = useState(userInfo.email)
    const [name, setName] = useState(userInfo.name)
    const [nickname, setNickname] = useState(userInfo.nickname)

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => { 
      e.preventDefault()
    }

    const onNameChange = (e: ChangeEvent<HTMLInputElement>) => { 
        e.preventDefault()
        setName(e.target.value)
    }

    const onNicknameChange = (e: ChangeEvent<HTMLInputElement>) => { 
        e.preventDefault()
        setNickname(e.target.value)
    }    

    return <AccountPage 
        email={email}
        onEmailChange={onEmailChange}
        name={name}
        onNameChange={onNameChange}
        nickname={nickname}
        onNicknameChange={onNicknameChange}
    />
}

export default Container