import * as S from './HomePage.style';
import PageTitle from '~/components/atom/text/PageTitle';
import BoardList from '~/components/organisms/Board/BoardList';

const HomePage = () => {
    return <S.Layout>
      <S.Page>
        <PageTitle title='홈'/>
        <BoardList />
      </S.Page>
    </S.Layout>
}

export default HomePage