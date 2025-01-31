import { ChangeEvent } from 'react';
import FilledButton from '~/components/atom/button/FilledButton';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FormInput from '~/components/atom/input/FormInput';
import PageTitle from '~/components/atom/text/PageTitle';
import styled from '~/styles';

interface IProps {
  email: string;
  emailErrorMessage: string;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  nameErrorMessage: string;
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  nickname: string;
  nicknameErrorMessage: string;
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  passwordErrorMessage: string;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onJoin: () => void;
  onCancel: () => void;
}

const JoinPage = ({
  email,
  emailErrorMessage,
  onEmailChange,
  name,
  nameErrorMessage,
  onNameChange,
  nickname,
  nicknameErrorMessage,
  onNicknameChange,
  password,
  passwordErrorMessage,
  onPasswordChange,
  onJoin,
  onCancel
}: IProps) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onJoin();
  };

  const handleCancel = () => {
    //e.preventDefault();
    onCancel();
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <PageTitle title="회원가입" />
        <FormInput
          label="이ç메일"
          flexDirection="row"
          type="text"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={onEmailChange}
          error={emailErrorMessage}
        />
        <FormInput
          label="이름"
          flexDirection="row"
          type="text"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={onNameChange}
          error={nameErrorMessage}
        />
        <FormInput
          label="닉네임"
          flexDirection="row"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickname}
          onChange={onNicknameChange}
          error={nicknameErrorMessage}
        />
        <FormInput
          label="비밀번호"
          flexDirection="row"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onPasswordChange}
          error={passwordErrorMessage}
        />
        <Buttons>
          <OutlinedButton type="submit" onClick={handleCancel}>
            취소
          </OutlinedButton>
          <FilledButton type="submit">회원가입</FilledButton>
        </Buttons>
      </Form>
    </Wrapper>
  );
};

export default JoinPage;

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`;

const Form = styled.form`
  width: ${({ theme }) => theme.bodyWidth};
`;

export const Buttons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  &:last-child {
    border-bottom: 0;
  }
`;
