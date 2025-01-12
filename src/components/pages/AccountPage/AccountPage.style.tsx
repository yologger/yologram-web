import styled, { theme } from '~/styledComponents';
import { ChangeEvent } from 'react';

export const Layout = styled.div`
    background: ${(p) => p.theme.color.white};
    display: flex;
    background: ${({ theme }) => theme.color.white};
    justify-content: center;
`

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: ${({ theme }) => theme.bodyWidth};   
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: ${(props) => props.theme.padding.base};
  border: 1px solid ${(props) => props.theme.color.shadow};
  border-radius: 5px;
`

export const ProfileSectioInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProfileSectionButtons = styled.div`
    margin-top: 20px;
    display: flex;
    direction: row;
    justify-content: space-between;
`

interface IProfileInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}