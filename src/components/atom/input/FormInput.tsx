import React from 'react';
import styled, { css, theme } from '~/styledComponents';

interface IProps {
  label: string;
  value: string;
  type: 'text' | 'password' | 'email'
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  error?: string;
  flexDirection?: 'row' | 'column' 
  disabled?: boolean
}

const FormInput = ({ label, type, value, onChange, placeholder, error, flexDirection = 'row', disabled=false}: IProps) => {
  return <Layout flexDirection={flexDirection}>
    <Label>{label}</Label>
    <Wrapper>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
        disabled={disabled}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Wrapper>
  </Layout>
}

interface IWrapperProps {
  flexDirection?: 'row' | 'column' 
}

const Layout = styled.div<IWrapperProps>`
    width: 100%;
    display: flex;
    flex-direction: ${(props) => {
      if(props.flexDirection == 'row') return 'row'
      else return 'column'
    }};
    padding: ${(props) => {
      if(props.flexDirection == 'row') return '2rem'
      else return '0'
    }} 0;
    gap: 20px;
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

const Wrapper = styled.div`
  width: 100%;
`

const disabledStyles = css`
  background-color: #f1f1f1;
  color: #d3d3d3;
  border-color: #d3d3d3;
  cursor: not-allowed;
  pointer-events: none;
`;

const StyledInput = styled.input<{ hasError: boolean }>`
  width: 100%;
  padding: 16px;
  border: 1px solid ${({ hasError }) => (hasError ? theme.color.red : theme.color.grey)};
  border-radius: 4px;
  font-size: 16px;
  resize: none;
  font-weight: 400;
  background-color: ${({ hasError }) => (hasError ? '#f8d7da' : 'white')};
  transition: border-color 0.3s, background-color 0.3s;
  line-height: 1.35;

  &:hover,
  &:focus {
    border-color: ${({ hasError }) => (hasError ? theme.color.red : theme.color.yologramBlue200)};
    outline: none;
  }

  ${({ disabled }) => disabled && disabledStyles}
`;

const ErrorText = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export default FormInput;