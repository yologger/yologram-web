import styled, { theme } from '~/styles';
import { Link } from 'react-router-dom';
import Modal from '~/components/template/Modal';
import Fade from '~/components/template/Fade';
import Alert from '~/components/template/Alert';

interface IProps {
  openLoginPopup: () => void;
  showLogoutAlert: boolean;
  openLogoutAlert: () => void;
  onLogout: () => void;
  closeLogoutAlert: () => void;
}

const Header = ({
  openLoginPopup,
  showLogoutAlert,
  openLogoutAlert,
  onLogout,
  closeLogoutAlert
}: IProps) => {
  const isLoggedIn = false;

  return (
    <>
      <HeaderTop>
        <h1>ENV: {process.env.REACT_APP_ENV}</h1>
        <h1>API_URL: {process.env.REACT_APP_API}</h1>
        <HeaderTopWrapper></HeaderTopWrapper>
      </HeaderTop>
      <HeaderBottom>
        <HeaderBottomWrapper>
          <Menus>
            <MenuLink to="/">Home</MenuLink>
            <MenuLink to="/board/new">Write</MenuLink>
          </Menus>
          {isLoggedIn ? (
            <Menus>
              <MenuButton onClick={openLogoutAlert}>Logout</MenuButton>
              <MenuLink to="/account">Account</MenuLink>
            </Menus>
          ) : (
            <Menus>
              <MenuButton onClick={openLoginPopup}>Login</MenuButton>
              <MenuLink to="/join">Join</MenuLink>
            </Menus>
          )}
        </HeaderBottomWrapper>
      </HeaderBottom>
      <Modal>
        <Fade in={showLogoutAlert} timeout={150}>
          <Alert
            title="로그아웃"
            description={<p>로그아웃 하시겠어요?</p>}
            isShownCancelButton={true}
            confirmButtonMessage="확인"
            cancelButtonMessage="취소"
            onConfirm={onLogout}
            onCancel={closeLogoutAlert}
          />
        </Fade>
      </Modal>
    </>
  );
};

const HeaderTop = styled.div`
  display: flex;
  justify-content: center;
  background: ${(p) => p.theme.color.white};
  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${(props) => props.theme.color.shadow};
`;

const HeaderTopWrapper = styled.div`
  width: ${(p) => p.theme.bodyWidth};
  display: flex;
  justify-content: space-between;
`;

const HeaderBottom = styled.div`
  display: flex;
  justify-content: center;
  background: ${(p) => p.theme.color.white};
  height: 50px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.color.shadow};
  position: sticky;
  top: 0;
`;

const HeaderBottomWrapper = styled.div`
  display: flex;
  height: 40px;
  width: ${(p) => p.theme.bodyWidth};
  justify-content: space-between;
`;

const Menus = styled.div`
  display: flex;
  flex-shrink: 0;
`;

const MenuLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.color.yologgerGrey900};
  height: 50px;
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
`;

const MenuButton = styled.button`
  height: 50px;
  font-size: 14px;
  font-weight: 700;
  color: ${theme.color.yologgerGrey900};
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
`;

export default Header;
