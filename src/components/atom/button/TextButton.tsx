
import styled, { theme, typographyStyles } from '~/styledComponents';

export interface TextButtonProps extends React.HTMLAttributes<HTMLElement> {
  as?: string;
  size?: 'medium' | 'small';
  color?: string;
}

const TextButton = styled.button<TextButtonProps>`
  ${(p) =>
    p.size === 'small' ? typographyStyles.L11 : typographyStyles.L7}
  color: ${(p) => p.color ?? theme.color.grey900};
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
`;

export default TextButton;