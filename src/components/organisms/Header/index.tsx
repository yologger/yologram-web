import { connect } from 'react-redux'
import Container from './container'
import { IRootState, RootActions } from '~/store'
import {ThunkDispatch} from "redux-thunk";
import { setLoginPopup } from '~/store/common'
import { ILogoutResult } from '~/types/auth';
import { IFailAction } from '~/store/error/types';
import { logout } from '~/store/auth';
import { ILogoutAction } from '~/store/auth/types';

const mapStateToProps = (state: IRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  accessToken: state.auth.accessToken,
  userInfo: state.auth.userInfo,
  isShownLoginPopup: state.common.isShownLoginPopup
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  // login: () => dispatch(login("dummy@gmail.com", "1234")),
  // logout: () => dispatch(logout()),
  // getUserInfo: () => dispatch(getUserInfo())
  setLoginPopup: (isLoginPopupShown: boolean) => {
    dispatch(setLoginPopup(isLoginPopupShown))
  },
  onLogout: (): Promise<ILogoutAction|IFailAction> => {
    return dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)