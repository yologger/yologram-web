import styled from 'styled-components';
import { theme } from '~/styles';
import { ChangeEvent } from 'react';
import BoardList from '~/components/organisms/Board/BoardList';
import PageTitle from '~/components/atoms/text/PageTitle';
import SectionTitle from '~/components/atoms/text/SectionTitle';
import FormInput from '~/components/atoms/input/FormInput';
import FilledButton from '~/components/atoms/button/FilledButton';

interface IProps {
  onChangePassword: () => void;
}

const AccountPage = ({ onChangePassword }: IProps) => {
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
              <FilledButton backgroundColor="red" onClick={onChangePassword}>
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

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

export default AccountPage;
