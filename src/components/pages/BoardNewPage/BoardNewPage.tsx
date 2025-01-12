import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './BoardNewPage.style';
import OutlinedButton from '~/components/atom/button/OutlinedButton';
import FilledButton from '~/components/atom/button/FilledButton';
import FormTextArea from '~/components/atom/textarea/FormTextArea';
import FormInput from '~/components/atom/input/FormInput';

const BoardNewPage = () => {
    return <S.Layout>
        <S.Page>
            <PageTitle title="글쓰기" />
            <S.List>
                <S.ListItem><FormInput label="제목" type="text" placeholder="제목을 입력해주세요." value={""} onChange={null} error=' ⃠ 제목이 너무 짧아요'/></S.ListItem>
                <S.ListItem><FormTextArea label='본문' rows={6} placeholder='본문을 입력해주세요' value={""} onChange={null} error=' ⃠ error'/></S.ListItem>
                <S.ListItemButtons>
                    <OutlinedButton type="button">취소</OutlinedButton>
                    <FilledButton type="button">등록하기</FilledButton>
                </S.ListItemButtons>
            </S.List>
        </S.Page>
    </S.Layout>
}

export default BoardNewPage;