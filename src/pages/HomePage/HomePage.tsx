import styled from '~/styles';
import BoardList from '~/components/organisms/Board/BoardList';
import PageTitle from '~/components/atoms/text/PageTitle';

const HomePage = () => {
  return (
    <Wrapper>
      <Page>
        <PageTitle title="홈" />
        <BoardList />
      </Page>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`;
export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
`;

export default HomePage;
