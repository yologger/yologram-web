import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './AccountPage.style';
import SectionTitle from '~/components/atom/text/SectionTitle';
import BoardList from '~/components/organisms/Board/BoardList';

const AccountPage = () => {

  const email = "yologger1013@gmail.com"
  const onEmailChanged = () => {}

  const name = "yologger"
  const onNameChanged = () => {}

  const nickname = "yologger"
  const onNicknameChanged = () => {}

  const onChangePassword = () => {}
  
  return <S.Layout>
    <S.Page>
      <PageTitle title="계정" />
      <S.Section>
        <SectionTitle title="프로필" />
        <S.ProfileSectioInputs>
          <S.ProfileInput label="이메일" type="email" value={email} onChange={onEmailChanged} />
          <S.ProfileInput label="이름" type="text" value={name} onChange={onNameChanged} />
          <S.ProfileInput label="닉네임" type="text" value={nickname} onChange={onNicknameChanged} />
        </S.ProfileSectioInputs>
        <S.ProfileSectionButtons>
          <S.ChangePasswordButton onClick={onChangePassword}>비밀번호 변경</S.ChangePasswordButton>
          <S.SaveButton onClick={null}>저장</S.SaveButton>
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