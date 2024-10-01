import { Link } from "react-router-dom"
import * as S from './Header.style';

interface IHeaderProps {
    isLoggedIn: boolean
    openLoginPopup: () => void
}

const Header = ({
    isLoggedIn,
    openLoginPopup
}: IHeaderProps) => {
    
    const openLogoutAlert = () => {}

    return <>
        <S.HeaderTop>
            <S.HeaderTopContent>
                <h1>ENV: {process.env.REACT_APP_ENV}</h1>
                <h1>API_URL: {process.env.REACT_APP_API}</h1>
            </S.HeaderTopContent>
        </S.HeaderTop>
        <S.HeaderBottom>
            <S.HeaderBottomContent>
                <S.HeaderMenuGroup>
                    <S.HeaderMenuLink to="/">Home</S.HeaderMenuLink>
                    <S.HeaderMenuLink to="/board/new">Write</S.HeaderMenuLink>
                </S.HeaderMenuGroup>
                {isLoggedIn ? (
                    <S.HeaderMenuGroup>
                        <S.HeaderMenuButton onClick={openLogoutAlert}>Logout</S.HeaderMenuButton>
                        <S.HeaderMenuLink to="/account">Account</S.HeaderMenuLink>
                    </S.HeaderMenuGroup>
                ) : (
                    <S.HeaderMenuGroup>
                        <S.HeaderMenuButton onClick={openLoginPopup}>Login</S.HeaderMenuButton>
                        <S.HeaderMenuLink to="/join">Join</S.HeaderMenuLink>
                    </S.HeaderMenuGroup>
                )}
            </S.HeaderBottomContent>
        </S.HeaderBottom>
    </>
}

export default Header