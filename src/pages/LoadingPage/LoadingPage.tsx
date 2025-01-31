import styled from '~/styles';
import { ClipLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <Wrapper>
      <ClipLoader />
    </Wrapper>
  );
};

export default LoadingPage;

const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
  padding: 10rem 0;
`;
