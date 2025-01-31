import PageTitle from './PageTitle';

interface IProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const Container = ({ title, subtitle }: IProps) => {
  return <PageTitle title={title} subtitle={subtitle} />;
};

export default Container;
