import styled, { theme } from '~/styles';

import OutlinedButton from '~/components/atoms/button/OutlinedButton';
import FilledButton from '~/components/atoms/button/FilledButton';

import Popup from '~/components/molecules/Popup';
import PageTitle from '~/components/atoms/text/PageTitle';
import FormInput from '~/components/atoms/input/FormInput';

interface IProps {
  onClose: () => void;
  isLoginPopupOpened: boolean;
}

const LoginPopup = ({ onClose, isLoginPopupOpened }: IProps) => {
  return (
    <Popup showPopup={isLoginPopupOpened}>
      <PopupWrapper>
        <PageTitle title="로그인" />
        <FormInput label="이메일" type="email" value="이메일을 입력하세요" onChange={null} />
        <FormInput label="비밀번호" type="password" value="비밀번호를 입력하세요" onChange={null} />
        <Buttons>
          <OutlinedButton type="button" onClick={onClose}>
            취소
          </OutlinedButton>
          <FilledButton type="button">로그인</FilledButton>
        </Buttons>
      </PopupWrapper>
    </Popup>
  );
};

const PopupWrapper = styled.div`
  width: 600px;
  background: ${({ theme }) => theme.color.white};
  padding: 2rem;
`;

export const Buttons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export default LoginPopup;
