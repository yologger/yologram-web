import { useParams } from 'react-router';
import BoardDetailPage from './BoardDetailPage';

interface PathParams {
  bid: string;
}

const Container = () => {
  // const [data, fetch, isLoading] = useHttpRequest(async () => {

  // })

  // console.log(data)
  // console.log(fetch)
  // console.log(isLoading)

  const email = 'samuel@gmal.com';
  const nickname = 'samuel';
  const title = 'This is title';
  const body = 'This is body';

  return (
    <>
      <BoardDetailPage email={email} nickname={nickname} title={title} body={body} />
    </>
  );
};

export default Container;
