import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './BoardDetailPage.style';
import { IBoard } from '~/types';
import DefaultProfileAvatar from '~/static/icons/icon_default_profile_avatar.svg'
import { ReactComponent as ViewIcon } from '~/static/icons/icon_bolt.svg'
import { ReactComponent as SubscribeIcon } from '~/static/icons/icon_subscribe.svg'
import { ReactComponent as LikeIcon } from '~/static/icons/like.svg'
import { ReactComponent as CommentIcon } from '~/static/icons/comment.svg'
import editIcon from '~/static/icons/icon_edit.svg'
import deleteIcon from '~/static/icons/icon_delete.svg'

interface IPageProps {
    board: IBoard
}

const ICON_SIZE_XSMALL = "0.75rem"
const ICON_SIZE_SMALL = "1rem"
const IMAGE_SIZE = "40px"

const BoardDetailPage = ({ board }: IPageProps) => {
    return <S.Layout>
        <S.Page>
            <Header nickname={board.nickname} email={board.email} />
            <Content title={board.title} body={board.body} />
            <Footer />
        </S.Page>
    </S.Layout>
}

interface IHeaderProps {
    nickname: string;
    email: string;
}

const Header = ({ nickname, email }: IHeaderProps) => {
    return <S.HeaderLayout>
        <S.HeaderLeftSection>
            <img
                src={DefaultProfileAvatar}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
                alt="user profile avatar image"
            />
            <div>
                <S.Nickname>{nickname}</S.Nickname>
                <div>
                    <S.Icons>
                        <S.Icon>
                            <ViewIcon width={ICON_SIZE_XSMALL} height={ICON_SIZE_XSMALL} />
                            <span>365</span>
                        </S.Icon>
                        <span>·</span>
                        <span>
                            <span>약 2시간 전</span>
                        </span>
                        <span>·</span>
                        <S.Icon>
                            <SubscribeIcon width={ICON_SIZE_SMALL} height={ICON_SIZE_SMALL} />
                            <span>30</span>
                        </S.Icon>
                    </S.Icons>
                </div>
            </div>
        </S.HeaderLeftSection>
        <S.HeaderRightSection>
            <S.EditButton onClick={null}>
                <img src={editIcon} alt="close" width="17px" height="17px" />
            </S.EditButton>
            <S.DeleteButton onClick={null}>
                <img src={deleteIcon} alt="close" width="17px" height="17px" />
            </S.DeleteButton>
        </S.HeaderRightSection>
    </S.HeaderLayout>
}

interface IContentProps {
    title: string;
    body: string;
}

const Content = ({ title, body }: IContentProps) => {
    return <S.ContentLayout>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
    </S.ContentLayout>
}

interface IFooterProps {

}

const Footer = ({ }: IFooterProps) => {
    return <S.FooterLayout>

    </S.FooterLayout>
}

export default BoardDetailPage