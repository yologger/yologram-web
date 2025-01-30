import styled from 'styled-components';
import { theme } from '~/styles';
import { ChangeEvent } from 'react';
import BoardList from '~/components/organisms/Board/BoardList';
import PageTitle from '~/components/atom/text/PageTitle';
import SectionTitle from '~/components/atom/text/SectionTitle';
import FormInput from '~/components/atom/input/FormInput';
import FilledButton from '~/components/atom/button/FilledButton';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountPage = () => {
  const onChangePassword = () => { };

  return (
    <>
      <Wrapper>
        <Page>
          <PageTitle title="계정" />
          <Section>
            <SectionTitle title="프로필" />
            <Inputs>
              <FormInput
                label="이메일"
                flexDirection="column"
                type="email"
                placeholder="이메일을 입력해주세요"
                value={'yologger1013@gmail.com'}
                onChange={null}
                error={null}
              />
              <FormInput
                label="이름"
                flexDirection="column"
                type="text"
                placeholder="이름을 입력해주세요"
                value={null}
                onChange={null}
                error={null}
              />
              <FormInput
                label="닉네임"
                flexDirection="column"
                type="text"
                placeholder="닉네임을 입력해주세요"
                value={null}
                onChange={null}
                error={null}
              />
            </Inputs>
            <Buttons>
              <FilledButton backgroundColor="red" onClick={null}>
                비밀번호 변경
              </FilledButton>
              <FilledButton onClick={null}>저장</FilledButton>
            </Buttons>
          </Section>
          <Section>
            <SectionTitle title="게시글 관리" />
            <BoardList />
          </Section>
        </Page>
      </Wrapper>
    </>
  );
};

export const EmailInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>이메일</Label>
      <Input
        type="email"
        placeholder="이메일을 입력해주세요"
        value={value}
        onChange={onChange}
        error={false}
        onBlur={null}
        ref={null}
      />
    </div>
  );
};

export const NameInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>이름</Label>
      <Input
        type="text"
        placeholder="이름을 입력해주세요"
        value={value}
        onChange={onChange}
        error={true}
        onBlur={null}
        ref={null}
      />
    </div>
  );
};

export const NicknameInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>닉네임</Label>
      <Input
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={value}
        onChange={onChange}
        error={true}
        onBlur={null}
        ref={null}
      />
    </div>
  );
};

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologgerGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologgerGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologgerGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.yologgerGrey900};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`;
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: ${({ theme }) => theme.bodyWidth};
`;

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: ${(props) => props.theme.padding.base};
  border: 1px solid ${(props) => props.theme.color.shadow};
  border-radius: 5px;
`;

export const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  direction: row;
  justify-content: space-between;
`;

const SmallButton = styled.button`
  height: 20px;
  align-items: center;
  padding: 0 5px;
  color: ${(p) => p.theme.color.grey};
  border: 1px solid ${(p) => p.theme.color.shadow};
  font-size: ${(p) => p.theme.font.xxsmall};
`;

export const ChangePasswordButton = styled.button`
  height: 3.5rem;
  width: 10rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.white};
  background: ${theme.color.red};
  border-radius: 0.375rem;
`;

export const SaveButton = styled.button`
  height: 3.5rem;
  width: 10rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.basic0};
  background: ${theme.color.yologgerBlue200};
  border-radius: 0.375rem;
`;

const ProfileText = styled.h3`
  width: ${({ theme }) => theme.bodyWidth};
  font-size: 15px;
  font-weight: 700;
  color: ${theme.color.yologgerGrey900};
  margin-top: ${theme.margin.xxxlarge};
  margin-bottom: ${theme.margin.xxxlarge};
`;

const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${theme.color.yologgerGrey900};

  & > span {
    color: ${theme.color.yologgerRed500};
  }

  & > small {
    color: ${theme.color.yologgerGrey300};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.25rem;
  }
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
  `};
  ${({ pad }) =>
    pad &&
    `
    padding-top: ${pad}px;
  `};
`;

export default AccountPage;
