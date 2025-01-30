import FilledButton from '~/components/atom/button/FilledButton';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FormInput from '~/components/atom/input/FormInput';
import PageTitle from '~/components/atom/text/PageTitle';
import styled from '~/styles';

interface IProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const JoinPage = ({ onSubmit, onCancel }: IProps) => {
  return (
    <Wrapper>
      <Form>
        <PageTitle title="회원가입" />
        <FormInput
          label="이메일"
          flexDirection="row"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={null}
          onChange={null}
          error={null}
        />
        <FormInput
          label="이름"
          flexDirection="row"
          type="text"
          placeholder="이름을 입력해주세요"
          value={null}
          onChange={null}
          error={null}
        />
        <FormInput
          label="닉네임"
          flexDirection="row"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={null}
          onChange={null}
          error={null}
        />
        <FormInput
          label="비밀번호"
          flexDirection="row"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={null}
          onChange={null}
          error={null}
        />
        <Buttons>
          <OutlinedButton onClick={onCancel}>취소</OutlinedButton>
          <FilledButton onClick={onSubmit} type="submit">
            회원가입
          </FilledButton>
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
