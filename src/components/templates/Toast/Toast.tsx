import styled from '~/styledComponents';

interface IToastProps {
  message: string;
}

const Toast = ({ message }: IToastProps) => {
  return <Message>{message}</Message>;
}

const Message = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  height: 50px;
  background-color: rgba(43, 46, 51, 0.9);
  font-size: ${(p) => p.theme.font.large};
  color: ${(p) => p.theme.color.content};
  line-height: normal;
`;

export default Toast;