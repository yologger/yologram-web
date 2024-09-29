import PageTitle from '~/components/atom/text/PageTitle';
import * as S from './JoinPage.style';

const JoinPage = () => {

  const email = "yologger1013@gmail.com"
  const onEmailChanged = () => {}

  const name = "yologger"
  const onNameChanged = () => {}

  const nickname = "yologger"
  const onNicknameChanged = () => {}

  const password = "1234"
  const onPasswordChanged = () => {}

  const onSubmit = () => { }
  const onCancel = () => { }

  return <S.Layout>
    <S.Form onSubmit={onSubmit}>
      <PageTitle title="회원가입" />
      <S.List>
        <S.Item><S.JoinInput label="이메일" type="email" placeholder="이메일을 입력해주세요." value={email} onChange={onEmailChanged} /></S.Item>
        <S.Item><S.JoinInput label="이름" type="text" placeholder="이름을 입력해주세요." value={name} onChange={onNameChanged} /></S.Item>
        <S.Item><S.JoinInput label="닉네임" type="text" placeholder="닉네임을 입력해주세요." value={nickname} onChange={onNicknameChanged} /></S.Item>
        <S.Item><S.JoinInput label="비밀번호" type="password" placeholder="비밀번호를 입력해주세요." value={password} onChange={onPasswordChanged} /></S.Item>
        <S.JoinFormButtons>
          <S.CancelButton type="button" onClick={onCancel}>취소</S.CancelButton>
          <S.JoinButton type="submit">회원가입</S.JoinButton>
        </S.JoinFormButtons>
      </S.List>
    </S.Form>
  </S.Layout>
}

export default JoinPage