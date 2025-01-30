import BoardItem from './BoardItem';
import styled from 'styled-components';

import InfiniteScroll from 'react-infinite-scroller';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoadingIcon from '~/static/icons/custom/loading.gif';
import { IBoard } from '~/types/board';

interface IProps {
  boards: IBoard[];
}

const LOADING_ICON_SIZE = '20px';

const BoardList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dummyBoards: IBoard[] = [
    { id: 1, uid: 1, nickname: 'user1', email: 'user1@gmail.com', title: 'title1', body: 'body1' },
    { id: 2, uid: 2, nickname: 'user2', email: 'user2@gmail.com', title: 'title2', body: 'body2' },
    { id: 3, uid: 1, nickname: 'user3', email: 'user1@gmail.com', title: 'title3', body: 'body3' },
    { id: 4, uid: 2, nickname: 'user2', email: 'user2@gmail.com', title: 'title4', body: 'body4' },
    { id: 5, uid: 1, nickname: 'user1', email: 'user1@gmail.com', title: 'title5', body: 'body5' },
    { id: 6, uid: 2, nickname: 'user2', email: 'user2@gmail.com', title: 'title6', body: 'body6' },
    { id: 7, uid: 1, nickname: 'user3', email: 'user1@gmail.com', title: 'title7', body: 'body7' },
    { id: 8, uid: 2, nickname: 'user2', email: 'user2@gmail.com', title: 'title8', body: 'body8' },
    { id: 9, uid: 1, nickname: 'user1', email: 'user1@gmail.com', title: 'title9', body: 'body9' },
    {
      id: 10,
      uid: 2,
      nickname: 'user2',
      email: 'user2@gmail.com',
      title: 'title10',
      body: 'body10'
    },
    {
      id: 11,
      uid: 1,
      nickname: 'user3',
      email: 'user1@gmail.com',
      title: 'title11',
      body: 'body11'
    },
    {
      id: 12,
      uid: 2,
      nickname: 'user2',
      email: 'user2@gmail.com',
      title: 'title12',
      body: 'body12'
    },
    {
      id: 13,
      uid: 1,
      nickname: 'user1',
      email: 'user1@gmail.com',
      title: 'title13',
      body: 'body13'
    }
  ];

  const [boards, setBoards] = useState(dummyBoards);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  let pivotId = 14;

  const onItemClicked = (board: IBoard, index: number) => {
    navigate(`/board/${board.id}`);
  };

  const onLoadMore = () => {
    if (boards.length >= 50) {
      setHasMore(false);
      return;
    }

    setIsLoading(true);

    const newBoards: IBoard[] = [];

    for (let i = 0; i < 10; i++) {
      const newBoard: IBoard = {
        id: pivotId,
        uid: 1,
        nickname: 'user1',
        email: 'user1@gmail.com',
        title: `title${pivotId}`,
        body: `body${pivotId}`
      };
      newBoards.push(newBoard);
      pivotId = pivotId + 1;
    }

    setTimeout(() => {
      setBoards(boards.concat(newBoards));
      setIsLoading(false);
    }, 1300);
  };

  return (
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={hasMore}
        loader={<LoadingItem />}
      >
        {boards.map((board, index) => (
          <BoardItem key={board.id} index={index} board={board} onItemClicked={onItemClicked} />
        ))}
      </InfiniteScroll>
    </>
  );
};

const LoadingItem = () => {
  return (
    <LoadingItemWrapper>
      <img
        key={0}
        src={LoadingIcon}
        width={LOADING_ICON_SIZE}
        height={LOADING_ICON_SIZE}
        alt="Loading Image"
      />
    </LoadingItemWrapper>
  );
};

const LoadingItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin: ${(props) => props.theme.margin.base};
  padding: ${(props) => props.theme.padding.base};
`;

export default BoardList;
