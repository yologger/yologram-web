import { Link } from 'react-router-dom';
import styled, { theme } from '~/styledComponents';

export const HeaderTop = styled.div`
    display: flex;
    justify-content: center;
    background: ${(p) => p.theme.color.white};
    width: 100%;
    /* height: 40px; */
    border-bottom: 1px solid ${(props) => props.theme.color.shadow};
`

export const HeaderTopContent = styled.div`
    width: ${(p) => p.theme.bodyWidth};
    display: flex;
    justify-content: space-between;
`;

export const HeaderBottom = styled.div`
    display: flex;
    justify-content: center;
    background: ${(p) => p.theme.color.white};
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme.color.shadow};
    position: sticky;
    top: 0;
`

export const HeaderBottomContent = styled.div`
    display: flex;
    width: ${(p) => p.theme.bodyWidth};
    justify-content: space-between;
`;

export const HeaderMenuGroup = styled.div`
    display: flex;
    flex-shrink: 0;
`;

export const HeaderMenuLink = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    color: ${theme.color.yologramGrey900};
    height: 50px;
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
`

export const HeaderMenuButton = styled.button`
    height: 50px;
    font-size: 14px;
    font-weight: 700;
    color: ${theme.color.yologramGrey900};
    display: flex;
    align-items: center;
    padding: 15px;
    position: relative;
`