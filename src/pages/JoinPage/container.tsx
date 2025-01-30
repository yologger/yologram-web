import { useNavigate } from 'react-router';
import JoinPage from './JoinPage';

const Container = () => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate('/');
  };

  const onCancel = () => {
    navigate(-1);
  };

  return <JoinPage onSubmit={onSubmit} onCancel={onCancel} />;
};

export default Container;
