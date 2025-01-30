import SectionTitle from './SectionTitle';

interface IProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Container = ({ title, subtitle }: IProps) => {
  return <SectionTitle title={title} subtitle={subtitle} />;
};

export default Container;
