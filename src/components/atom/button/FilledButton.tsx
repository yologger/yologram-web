import styled, { css, theme } from '~/styledComponents';
import { lighten, darken } from 'polished';

interface IProps {
    type?: 'button' | 'submit'
    onClick?: () => void,
    disabled?: boolean
    textColor?: string
    backgroundColor?: string
    children: React.ReactNode
}

const FilledButton = ({ type, onClick, textColor, backgroundColor, disabled, children }: IProps) => {
    return (
      <StyledButton 
        type={type} 
        onClick={onClick} 
        textColor={textColor} 
        backgroundColor={backgroundColor} 
        disabled={disabled}
      >
        {children}
      </StyledButton>
    )
}

export const StyledButton = styled.button<IProps>`
  width: 10rem;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  height: 3.5rem;
  border-radius: 4px;
  color: ${(props) => props.textColor || theme.color.basic0};
  background-color: ${(props) => props.backgroundColor || '#007bff'};

  &:hover {
    background-color: ${(props) => darken(0.13, props.backgroundColor || '#007bff')};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ disabled }) => disabled && disabledStyles}
`

const disabledStyles = css`
  background-color: #B5B8BF;
  color: #FFFFFF;
  cursor: not-allowed;
  pointer-events: none;
`;

export default FilledButton