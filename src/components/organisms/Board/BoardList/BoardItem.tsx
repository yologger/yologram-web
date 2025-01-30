import styled, { theme } from '~/styles';
import { ReactComponent as ViewIcon } from '~/static/icons/custom/bolt.svg';
import { ReactComponent as SubscribeIcon } from '~/static/icons/custom/subscribe.svg';
import { ReactComponent as LikeIcon } from '~/static/icons/custom/like.svg';
import { ReactComponent as CommentIcon } from '~/static/icons/custom/comment.svg';
import DefaultProfileAvatar from '~/static/icons/custom/default_profile_avatar.svg';
import { IBoard } from '~/types';

interface IProps {
  board: IBoard;
  index: number;
  onItemClicked: (board: IBoard, index: number) => void;
}

const ICON_SIZE_SMALL = '0.75rem';
const ICON_SIZE_MEDIUM = '1.25rem';
const AVARTAR_IMAGE_SIZE = '20px';

const BoardItem = ({ board, index, onItemClicked }: IProps) => {
  const handleClick = () => onItemClicked(board, index);

  return (
    <Wrapper onClick={handleClick}>
      <Header nickname={board.nickname} />
      <Body title={board.title} />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* margin-top: ${(props) => props.theme.margin.base};
  margin-bottom: ${(props) => props.theme.margin.base}; */
  padding: ${(props) => props.theme.padding.base};
  /* border-top: 1px solid ${(props) => props.theme.color.shadow}; */
  border-bottom: 1px solid ${(props) => props.theme.color.shadow};
  /* border-radius: 5px; */
`;

interface IHeaderProps {
  nickname: string;
}

const Header = ({ nickname }: IHeaderProps) => {
  return (
    <HeaderWrapper>
      <img
        src={DefaultProfileAvatar}
        width={AVARTAR_IMAGE_SIZE}
        height={AVARTAR_IMAGE_SIZE}
        alt="user profile avatar image"
      />
      <Nickname>{nickname}</Nickname>
      <span>·</span>
      <ViewIconWrapper>
        <ViewIcon width={ICON_SIZE_SMALL} height={ICON_SIZE_SMALL} />
        <span>365</span>
      </ViewIconWrapper>
      <span>·</span>
      <span>약 2시간 전</span>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;

const Nickname = styled.span`
  font-size: ${(props) => props.theme.font.large};
`;

const ViewIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface IBodyProps {
  title: string;
}

const Body = ({ title }: IBodyProps) => {
  return (
    <BodyWrapper>
      <Title>{title}</Title>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
`;
const Title = styled.div`
  font-size: ${(props) => props.theme.font.xlarge};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLeftSection>
        <Category href="/categories/category1">카테고리1</Category>
        <Tags>
          <Tag href="/tag/tag1">#Tag1</Tag>
          <Tag href="/tag/tag2">#Tag2</Tag>
        </Tags>
      </FooterLeftSection>
      <FooterRightSection>
        <IconWrapper>
          <SubscribeIcon width={ICON_SIZE_MEDIUM} height={ICON_SIZE_MEDIUM} />
          <span>30</span>
        </IconWrapper>
        <IconWrapper>
          <LikeIcon width={ICON_SIZE_MEDIUM} height={ICON_SIZE_MEDIUM} />
          <span>30</span>
        </IconWrapper>
        <IconWrapper>
          <CommentIcon width={ICON_SIZE_MEDIUM} height={ICON_SIZE_MEDIUM} />
          <span>30</span>
        </IconWrapper>
      </FooterRightSection>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FooterLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

const Category = styled.a`
  background-color: ${theme.color.yologgerLightBlue100};
  color: ${theme.color.yologgerLightBlue400};
  border-radius: 0.25rem;
  padding: 0.125rem 0.625rem 0.125rem 0.625rem;
`;

const Tags = styled.span`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const Tag = styled.a`
  color: #4d5562;
`;

const FooterRightSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const IconWrapper = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.125rem;
`;

export default BoardItem;
