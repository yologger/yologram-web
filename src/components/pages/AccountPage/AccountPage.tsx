import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './AccountPage.style';
import SectionTitle from '~/components/atom/text/SectionTitle';
import BoardList from '~/components/organisms/Board/BoardList';
import { useHistory } from 'react-router-dom'
import FilledButton from '~/components/atom/button/FilledButton';
import { ChangeEvent } from 'react';
import FormInput from '~/components/atom/input/FormInput';

interface IProps {
  email: string,
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void,
  name: string
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void,
  nickname: string, 
  onNicknameChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

const AccountPage = ({
  email, name, nickname, onEmailChange, onNameChange, onNicknameChange
}: IProps) => {

  const history = useHistory();
  
  const onChangePassword = () => history.push(`/change-password`)
  const onSave = () => {}
  
  return <S.Layout>
    <S.Page>
      <PageTitle title="계정" />
      <S.Section>
        <SectionTitle title="프로필" />
        <S.ProfileSectioInputs>
          <FormInput label="이메일" type="email" value={email} onChange={onEmailChange} flexDirection='column' disabled={true}/>
          <FormInput label="이름" type="text" value={name} onChange={onNameChange} flexDirection='column'/>
          <FormInput label="닉네임" type="text" value={nickname} onChange={onNicknameChange} flexDirection='column'/>
        </S.ProfileSectioInputs>
        <S.ProfileSectionButtons>
          <FilledButton onClick={onChangePassword} backgroundColor='#F72F33'>비밀번호 변경</FilledButton>
          <FilledButton onClick={onSave}>저장</FilledButton>
        </S.ProfileSectionButtons>
      </S.Section>
      <S.Section>
        <SectionTitle title="내 게시글" />
        <BoardList />
      </S.Section>
    </S.Page>
  </S.Layout>
}

export default AccountPage