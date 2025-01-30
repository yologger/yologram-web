import styled, { theme } from '~/styles';

export const Layout = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`;

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 0.875rem;
  color: rgb(107 114 128);
`;
