import styled, { theme } from '~/styles';

interface IProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const SectionTitle = ({ title, subtitle }: IProps) => {
  return (
    <Title>
      {title}
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Title>
  );
};

const Title = styled.h1`
  width: ${({ theme }) => theme.bodyWidth};
  font-size: 20px;
  font-weight: 700;
  color: ${theme.color.yologgerGrey900};
  margin-top: ${theme.margin.xxxlarge};
  margin-bottom: ${theme.margin.xxxlarge};
`;

const Subtitle = styled.span`
  /* display: inline-block; */
  margin: 0 8px;
  height: 20;
  width: 2;
  color: ${theme.color.yologgerGrey200};
`;

export default SectionTitle;
