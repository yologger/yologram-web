import * as S from './NotFoundPage.style';
import NotFoundImage from '~/static/images/not_found.svg';

const IMAGE_SIZE = '250px';

const NotFoundPage = () => {
  return (
    <S.Layout>
      <S.Page>
        <img src={NotFoundImage} width={IMAGE_SIZE} height={IMAGE_SIZE} alt="Not Found" />
        <S.Title>This page does not exist.</S.Title>
        <S.Description>찾으시는 페이지가 존재하지 않습니다.</S.Description>
      </S.Page>
    </S.Layout>
  );
};

export default NotFoundPage;
