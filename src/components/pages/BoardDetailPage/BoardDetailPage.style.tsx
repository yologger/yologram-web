import styled, { theme } from '~/styledComponents';
import { ChangeEvent } from 'react';

export const Layout = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
` 

export const HeaderLayout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 2.25rem;
`

export const HeaderLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

export const Nickname = styled.span`
    font-size: ${(props) => props.theme.font.large};
`

export const Icons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
    align-items: center;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.125rem;
`

export const HeaderRightSection = styled.div``

export const ContentLayout = styled.div`
  
`

export const FooterLayout = styled.div`
  
`

export const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
`

export const Body = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`

export const EditButton = styled.button`
  top: 0;
  right: 0;
  padding: 5px;
`

export const DeleteButton = styled.button`
  top: 0;
  right: 0;
  padding: 5px;
`