import { ChangeEvent } from 'react';
import styled, { theme } from '~/styledComponents';

export const Layout = styled.div`
    background: ${(p) => p.theme.color.white};
    display: flex;
    background: ${({ theme }) => theme.color.white};
    justify-content: center;
`

export const Page = styled.div`
  width: ${({ theme }) => theme.bodyWidth};
`

export const BoardTitle = () => {

    const error: boolean = false

    return <>
        <Label>제목</Label>
        <NameInput
            type="text"
            placeholder="제목을 입력해주세요"
            value={null}
            onChange={null}
            error={false}
            onBlur={null}
            ref={null}
        />
    </>
}

export const BoardBody = () => {
    return <>
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
}

export const NameInput = styled.input<{ error: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologramGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologramGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologramGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.yologramGrey900};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;

export const BodyInput = styled.textarea<{ error: boolean }>`
  width: 100%;
  padding: 16px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.color.yologramGrey200};
  resize: none;
  font-weight: 400;
  color: ${({ theme }) => theme.color.yologramGrey900};
  line-height: 1.35;

  ::placeholder {
    color: ${({ theme }) => theme.color.yologramGrey400};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.color.yologramGrey900};
    outline: none;
  }

  &.error {
    border-color: #f57e00 !important;
  }
`;

const Label = styled.div<{ center?: boolean; pad?: number }>`
  width: 10.5rem;
  font-size: 18px;
  font-weight: 400;
  color: ${theme.color.yologramGrey900};

  & > span {
    color: ${theme.color.yologramRed500};
  }

  & > small {
    color: ${theme.color.yologramGrey300};
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

export const List = styled.ul`
  padding-top: 0.5rem;
`;

export const ListItem = styled.li`
    width: 100%;
    display: flex;
    border-bottom: 1px solid ${theme.color.yologramGrey50};

    &:last-child {
        border-bottom: 0;
    }
`;

export const ListItemButtons = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    border-bottom: 1px solid ${theme.color.yologramGrey50};
    &:last-child {
        border-bottom: 0;
    }
`;

export const CancelButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    background: ${theme.color.lightGrey};
`

export const SaveButton = styled.button`
    height: 3.5rem;
    width: 10rem;  
    font-size: 20px;
    font-weight: 700;
    border-radius: 2px;    
    display: flex;
    align-items: center;
    justify-content: center;      
    color: ${theme.color.basic0};
    background: ${theme.color.yologramBlue200};
`