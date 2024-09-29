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

export const ProfileInput = ({ label, type, value, onChange }: IProfileInputProps) => {
  return <>
    <Label>{label}</Label>
    <Input
      type={type}
      value={value}
      onChange={onChange}
      error={true}
      onBlur={null}
      ref={null} />
  </>
}

const Input = styled.input<{ error: boolean }>`
width: 100%;
padding: 16px;
border-radius: 2px;
border: 1px solid ${({ theme }) => theme.color.yologramGrey200};
resize: none;
font-weight: 400;
color: ${({ theme }) => theme.color.yologramGrey900};
line-height: 1.35;

::placeholder {
  color: ${({ theme }) => theme.color.yologramGrey400};
}

&:hover,
&:focus {
  border-color: ${({ theme }) => theme.color.yologramGrey900};
  outline: none;
}

&.error {
  border-color: #f57e00 !important;
}
`

const Label = styled.div<{ center?: boolean; pad?: number }>`
width: 10.5rem;
font-size: 18px;
font-weight: 400;
color: ${theme.color.yologramGrey900};

& > span {
  color: ${theme.color.yologramRed500};
}

& > small {
  color: ${theme.color.yologramGrey300};
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  margin-left: 0.25rem;
}
${({ center }) =>
    center &&
    `
  display: flex;
  align-items: center;
`};
${({ pad }) =>
    pad &&
    `
  padding-top: ${pad}px;
`};
`;

export const ChangePasswordButton = styled.button`
      height: 3.5rem;
      width: 10rem;  
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: 2px;    
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${theme.color.white};
      background: ${theme.color.red};
      border-radius: 0.375rem;
  `

export const SaveButton = styled.button`
      height: 3.5rem;
      width: 10rem;  
      font-size: 0.875rem;
      font-weight: 700;
      border-radius: 2px;    
      display: flex;
      align-items: center;
      justify-content: center;      
      color: ${theme.color.basic0};
      background: ${theme.color.yologramBlue200};
      border-radius: 0.375rem;
  `