import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './BoardEditPage.style';

const BoardEditPage = () => {
    return <S.Layout>
        <S.Page>
            <PageTitle title="수정하기" />
            <S.List>
                <S.Item>
                    <S.BoardTitle />
                </S.Item>
                <S.Item>
                    <S.BoardBody />
                </S.Item>
                <S.Buttons>
                    <S.CancelButton type="button">취소</S.CancelButton>
                    <S.SaveButton type="button">수정하기</S.SaveButton>
                </S.Buttons>
            </S.List>
        </S.Page>
    </S.Layout>
}

export default BoardEditPage