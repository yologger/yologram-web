import { Link } from "react-router-dom"
import * as S from './Header.style';
import Modal from "~/components/templates/Modal";
import Fade from "~/components/templates/Fade";
import Alert from "~/components/templates/Alert";

interface IHeaderProps {
    isLoggedIn: boolean
    openLoginPopup: () => void
    openLogoutAlert: () => void
    isLogoutAlertShown: boolean
    onLogoutConfirm: () => void
    onLogoutCancel: () => void
}

const Header = ({
    isLoggedIn,
    openLoginPopup,
    openLogoutAlert,
    isLogoutAlertShown,
    onLogoutConfirm,
    onLogoutCancel
}: IHeaderProps) => {

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
        <Modal>
          <Fade in={isLogoutAlertShown} timeout={150}>
            <Alert title="로그아웃" description={<p>로그아웃 하시겠어요?</p>} isShownClose={true} isShownCancelButton={true} confirmButtonMsg='네' cancelButtonMessage='아니요' onConfirm={onLogoutConfirm} onCancel={onLogoutCancel} />
          </Fade>
        </Modal>
    </>
}

export default Header