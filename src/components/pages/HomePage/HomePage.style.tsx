import styled, { theme } from '~/styledComponents';

export const Layout = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
`

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};    
`