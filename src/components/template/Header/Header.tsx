import styled from '~/styles';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Component>
      <Wrapper>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/test">Test</Link>
        </Links>
      </Wrapper>
    </Component>
  );
};

const Component = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
  padding: 1rem 0;
  background-color: #eeeeee;
`;
const Wrapper = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export default Header;
