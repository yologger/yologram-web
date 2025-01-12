import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './BoardEditPage.style';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FilledButton from '~/components/atom/button/FilledButton';

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
                    <OutlinedButton type="button">취소</OutlinedButton>
                    <FilledButton type="button">수정하기</FilledButton>
                </S.Buttons>
            </S.List>
        </S.Page>
    </S.Layout>
}

export default BoardEditPage