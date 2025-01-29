import styled, { css } from '~/styles';
import { lighten } from 'polished';

interface IOutlinedButtonProps {
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  textColor?: string;
  borderColor?: string;
  children: React.ReactNode;
}

const OutlinedButton = ({
  textColor,
  borderColor,
  disabled = false,
  onClick,
  children
}: IOutlinedButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      textColor={textColor}
      borderColor={borderColor}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

const disabledStyles = css`
  background-color: #f1f1f1;
  color: #d3d3d3;
  border-color: #d3d3d3;
  cursor: not-allowed;
  pointer-events: none;
`;

const StyledButton = styled.button<IOutlinedButtonProps>`
  width: 10rem;
  text-align: center;
  padding: 10px 20px;
  font-size: 16px;
  height: 3.5rem;
  border-radius: 4px;
  border: 1px solid ${({ borderColor }) => borderColor || '#b7b7b7'};
  background-color: transparent;
  color: ${({ textColor }) => textColor || '#000000'};
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.borderColor ? lighten(0.35, props.borderColor) : '#eaeaea'};
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }

  ${({ disabled }) => disabled && disabledStyles}
`;

export default OutlinedButton;
