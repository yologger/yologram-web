import styled from 'styled-components';
import PageTitle from '~/components/atoms/text/PageTitle';
import { theme } from '~/styles';
import { ChangeEvent } from 'react';
import FormInput from '~/components/atoms/input/FormInput';
import OutlinedButton from '~/components/atoms/button/OutlinedButton';
import FilledButton from '~/components/atoms/button/FilledButton';

interface IInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ChangePasswordPage = () => {
  const onCancel = () => {};

  return (
    <>
      <Wrapper>
        <Page>
          <PageTitle title="비밀번호 변경" />
          <Inputs>
            <FormInput
              label="현재 비밀번호"
              flexDirection="column"
              type="password"
              placeholder="현재 비밀번호를 입력해주세요"
              value={null}
              onChange={null}
              error={null}
            />
            <FormInput
              label="신규 비밀번호"
              flexDirection="column"
              type="password"
              placeholder="최소 6자리 이상(알파벳, 숫자 필수)"
              value={null}
              onChange={null}
              error={null}
            />
            <FormInput
              label="신규 비밀번호 확인"
              flexDirection="column"
              type="password"
              placeholder="신규 비밀번호를 다시 한 번 입력해주세요"
              value={null}
              onChange={null}
              error={null}
            />
          </Inputs>
          <Buttons>
            <OutlinedButton onClick={null}>취소</OutlinedButton>
            <FilledButton onClick={null}>비밀번호 변경</FilledButton>
          </Buttons>
        </Page>
      </Wrapper>
    </>
  );
};

export const CurrentPasswordInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>현재 비밀번호</Label>
      <Input
        type="password"
        placeholder="현재 비밀번호를 입력해주세요"
        value={value}
        onChange={onChange}
        error={false}
        onBlur={null}
        ref={null}
      />
    </div>
  );
};

export const NewPasswordInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>신규 비밀번호</Label>
      <Input
        type="password"
        placeholder="최소 6자리 이상(알파벳, 숫자 필수)"
        value={value}
        onChange={onChange}
        error={true}
        onBlur={null}
        ref={null}
      />
    </div>
  );
};

export const ConfirmNewPasswordInput = ({ value, onChange }: IInputProps) => {
  return (
    <div>
      <Label>신규 비밀번호 확인</Label>
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

export const CancelButton = styled.button`
  height: 3.5rem;
  width: 10rem;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.color.white};
  background: ${theme.color.lightGrey};
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

export default ChangePasswordPage;
