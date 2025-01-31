import FilledButton from '~/components/atoms/button/FilledButton';
import OutlinedButton from '~/components/atoms/button/OutlinedButton';
import FormInput from '~/components/atoms/input/FormInput';
import FormTextarea from '~/components/atoms/input/FormTextarea';
import PageTitle from '~/components/atoms/text/PageTitle';
import styled from '~/styles';

const BoardNewPage = () => {
  return (
    <Wrapper>
      <Form>
        <PageTitle title="글쓰기" />
        <FormInput
          label="이메일"
          flexDirection="row"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={null}
          onChange={null}
          error={null}
        />
        <FormTextarea
          label="본문"
          flexDirection="row"
          placeholder=""
          value={null}
          onChange={null}
          error={null}
        />
        <Buttons>
          <OutlinedButton onClick={null}>취소</OutlinedButton>
          <FilledButton onClick={null} type="submit">
            등록
          </FilledButton>
        </Buttons>
      </Form>
    </Wrapper>
  );
};

export default BoardNewPage;

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`;

const Form = styled.form`
  width: ${({ theme }) => theme.bodyWidth};
`;

const Buttons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  &:last-child {
    border-bottom: 0;
  }
`;
