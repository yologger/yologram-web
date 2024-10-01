import styled, { theme } from '~/styledComponents';

export const Layout = styled.div`
    background: ${(p) => p.theme.color.white};
    display: flex;
    background: ${({ theme }) => theme.color.white};
    justify-content: center;
`

export const Page = styled.div`
    width: ${({ theme }) => theme.bodyWidth};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Button = styled.button`
      height: 3.5rem;
      width: 10rem;  
      font-size: 20px;
      font-weight: 700;
      border-radius: 2px;    
      display: flex;
      align-items: center;
      justify-content: center;     
      margin: 5px ;
      background: ${theme.color.yologramBlue100};
  `

export const Buttons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologramGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;  