interface IProps {
  label: string;
  onClick: () => void;
}

const TestButton = ({ label, onClick }: IProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default TestButton;
