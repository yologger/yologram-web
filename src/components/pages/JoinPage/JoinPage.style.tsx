import { ChangeEvent } from 'react';
import styled, { theme } from '~/styledComponents';

export const Layout = styled.div`
    background: ${(p) => p.theme.color.white};
    display: flex;
    background: ${({ theme }) => theme.color.white};
    justify-content: center;
`

export const Form = styled.form`
  width: ${({ theme }) => theme.bodyWidth};
`

export const List = styled.ul`
  padding-top: 0.5rem;
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