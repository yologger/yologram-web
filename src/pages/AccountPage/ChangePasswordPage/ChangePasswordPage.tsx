import styled from 'styled-components';
import PageTitle from '~/components/atoms/text/PageTitle';
import { theme } from '~/styles';
import { ChangeEvent } from 'react';
import FormInput from '~/components/atoms/input/FormInput';
import OutlinedButton from '~/components/atoms/button/OutlinedButton';
import FilledButton from '~/components/atoms/button/FilledButton';

interface IProps {
  onCancel: () => void;
  onSave: () => void;
}

const ChangePasswordPage = ({ onSave, onCancel }: IProps) => {
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
            <OutlinedButton onClick={onCancel}>취소</OutlinedButton>
            <FilledButton onClick={onSave}>비밀번호 변경</FilledButton>
          </Buttons>
        </Page>
      </Wrapper>
    </>
  );
};

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export default ChangePasswordPage;
