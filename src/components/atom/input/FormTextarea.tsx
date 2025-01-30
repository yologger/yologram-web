import React from 'react';
import styled, { theme } from '~/styles';

interface IProps {
  label?: string;
  rows?: number;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  error?: boolean;
  flexDirection?: 'row' | 'column';
  disabled?: boolean;
}

const FormTextarea = ({
  label = null,
  rows = 6,
  value,
  onChange,
  placeholder,
  error,
  flexDirection = 'row',
  disabled = false
}: IProps) => {
  return (
    <Layout $flexDirection={flexDirection}>
      {label !== null && <Label>{label}</Label>}
      <Wrapper>
        <StyledTextarea
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          $error={error}
          disabled={disabled}
        />
        {error && <ErrorText>{error}</ErrorText>}
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div<{ $flexDirection: 'row' | 'column' }>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => {
    if (props.$flexDirection == 'row') return 'row';
    else return 'column';
  }};
  padding: ${(props) => {
    if (props.$flexDirection == 'row') return '2rem';
    else return '0';
  }}
    0;
  gap: 20px;
`;

const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.grey};

  & > span {
    color: ${theme.color.grey};
  }

  & > small {
    color: ${theme.color.grey};
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
`;

const StyledTextarea = styled.textarea<{ $error: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologgerGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologgerGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologgerGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ $error }) => ($error ? theme.color.red : theme.color.yologgerBlue200)};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

export default FormTextarea;
