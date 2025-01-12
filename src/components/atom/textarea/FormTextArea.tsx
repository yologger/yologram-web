
import styled, { theme } from '~/styledComponents';

interface IProps {
    rows?: number
    label: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    error?: string;
    flexDirection?: 'row' | 'column' 
}

const FormTextArea = ({label, rows=6, value, onChange, placeholder, error, flexDirection = 'row'}: IProps) => {
    return <Layout flexDirection={flexDirection}>
        <Label>{label}</Label>
        <Wrapper>
            <StyledTextArea 
                rows={rows}
                placeholder={placeholder}
                value={value}
                hasError={!!error}
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
    padding: 2rem 0;
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


const StyledTextArea = styled.textarea<{ hasError: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid ${({ hasError }) => (hasError ? theme.color.red : theme.color.grey)};
  font-size: 16px;
  resize: none;
  font-weight: 400;
  background-color: ${({ hasError }) => (hasError ? '#f8d7da' : 'white')};
  line-height: 1.35;
  transition: border-color 0.3s, background-color 0.3s;
  line-height: 1.35;  

  &:hover,
  &:focus {
    border-color: ${({ hasError }) => (hasError ? theme.color.red : theme.color.yologramBlue200)};
    outline: none;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 16px;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  width: 100%;
`

export default FormTextArea