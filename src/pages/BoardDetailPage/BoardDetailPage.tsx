import styled from 'styled-components';
import { theme } from '~/styles';
import DefaultProfileAvatar from '~/static/icons/custom/default_profile_avatar.svg';
import { ReactComponent as ViewIcon } from '~/static/icons/custom/bolt.svg';
import { ReactComponent as SubscribeIcon } from '~/static/icons/custom/subscribe.svg';
import { ReactComponent as LikeIcon } from '~/static/icons/custom/like.svg';
import { ReactComponent as CommentIcon } from '~/static/icons/custom/comment.svg';
import editIcon from '~/static/icons/custom/edit.svg';
import deleteIcon from '~/static/icons/custom/delete.svg';

interface IProps {
  email: string;
  nickname: string;
  title: string;
  body: string;
}

const ICON_SIZE_XSMALL = '0.75rem';
const ICON_SIZE_SMALL = '1rem';
const ICON_SIZE = '1.25rem';
const IMAGE_SIZE = '40px';

const BoardDetailPage = ({ email, nickname, title, body }: IProps) => {
  return (
    <Wrapper>
      <Page>
        <Header nickname={nickname} email={email}></Header>
        <Content>
          <Title>{title}</Title>
          <Body>{body}</Body>
        </Content>
      </Page>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  background: ${(p) => p.theme.color.white};
  display: flex;
  background: ${({ theme }) => theme.color.white};
  justify-content: center;
`;

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
`;

interface IHeaderProps {
  nickname: string;
  email: string;
}

const Header = ({ nickname, email }: IHeaderProps) => {
  const onClose = () => {};

  return (
    <HeaderWrapper>
      <HeaderLeftSection>
        <img
          src={DefaultProfileAvatar}
          width={IMAGE_SIZE}
          height={IMAGE_SIZE}
          alt="user profile avatar image"
        />
        <div>
          <Nickname>{nickname}</Nickname>
          <div>
            <IconsWrapper>
              <IconWrapper>
                <ViewIcon width={ICON_SIZE_XSMALL} height={ICON_SIZE_XSMALL} />
                <span>365</span>
              </IconWrapper>
              <span>·</span>
              <span>
                <span>약 2시간 전</span>
              </span>
              <span>·</span>
              <IconWrapper>
                <SubscribeIcon width={ICON_SIZE_SMALL} height={ICON_SIZE_SMALL} />
                <span>30</span>
              </IconWrapper>
            </IconsWrapper>
          </div>
        </div>
      </HeaderLeftSection>
      <div>
        <EditButton onClick={null}>
          <img src={editIcon} alt="close" width="17px" height="17px" />
        </EditButton>
        <DeleteButton onClick={null}>
          <img src={deleteIcon} alt="close" width="17px" height="17px" />
        </DeleteButton>
      </div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2.25rem;
`;

const HeaderLeftSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Content = styled.div``;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
`;

const Body = styled.p`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.125rem;
`;

const Nickname = styled.span`
  font-size: ${(props) => props.theme.font.large};
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
  align-items: center;
`;

const BoardTitle = () => {
  const error: boolean = false;

  return (
    <>
      <Label>제목</Label>
      <NameInput
        type="text"
        placeholder="제목을 입력해주세요"
        value={null}
        onChange={null}
        error={true}
        onBlur={null}
        ref={null}
      />
    </>
  );
};

const BoardBody = () => {
  return (
    <>
      <Label>본문</Label>
      <BodyInput
        rows={6}
        placeholder="본문을 입력해주세요"
        value={null}
        onChange={null}
        error={true}
        ref={null}
        onBlur={null}
      />
    </>
  );
};

export const EditButton = styled.button`
  top: 0;
  right: 0;
  padding: 5px;
`;

export const DeleteButton = styled.button`
  top: 0;
  right: 0;
  padding: 5px;
`;

export const Groups = styled.ul`
  padding-top: 0.5rem;
`;

export const Group = styled.li`
  width: 100%;
  display: flex;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export const ButtonGroup = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  padding: 2rem 0;
  border-bottom: 1px solid ${theme.color.yologgerGrey50};

  &:last-child {
    border-bottom: 0;
  }
`;

export const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.yologgerGrey900};

  & > span {
    color: ${theme.color.yologgerRed500};
  }

  & > small {
    color: ${theme.color.yologgerGrey300};
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    margin-left: 0.25rem;
  }
  ${({ center }) =>
    center &&
    `
    display: flex;
    align-items: center;
  `};
  ${({ pad }) =>
    pad &&
    `
    padding-top: ${pad}px;
  `};
`;

export const NameInput = styled.input<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;

export const BodyInput = styled.textarea<{ error: boolean }>`
  width: 100%;
  ${(p) =>
    p.error &&
    `
    border-color: ${p.theme.color.error} !important;
  `};
`;

export default BoardDetailPage;
