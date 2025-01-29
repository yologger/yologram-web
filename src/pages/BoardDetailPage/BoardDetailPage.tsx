import { useParams } from 'react-router-dom';

interface BoardDetailParams {
  bid: string; // 경로 파라미터는 항상 string으로 전달되므로, string으로 정의
}

function BoardDetailPage() {
  const { bid } = useParams(); // bid는 항상 string으로 반환됨

  // bid가 숫자일 경우에만 처리
  const bidNumber = Number(bid);

  if (isNaN(bidNumber)) {
    return <div>잘못된 ID입니다. 숫자만 가능합니다.</div>;
  }

  return <div>Board Detail for ID: {bidNumber}</div>;
}

export default BoardDetailPage;
