import styled, { theme } from '~/styledComponents';

export const Layout = styled.div`
    width: 600px;
    background: ${({ theme }) => theme.color.white};
`

export const List = styled.ul`
  padding: 2rem;
`;

export const ListItem = styled.li`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${theme.color.yologramGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ListItemButtons = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologramGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;