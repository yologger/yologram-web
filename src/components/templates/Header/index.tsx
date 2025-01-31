import { connect } from 'react-redux';
import Container from './container';
import { IRootState, RootActions } from '~/store';
import { setLoginPopup } from '~/store/common';
import { logout } from '~/store/auth';
import { ThunkDispatch } from 'redux-thunk';

const mapStateToProps = (state: IRootState) => ({
  isLoginPopupOpened: state.common.isLoginPopupOpened,
  accessToken: state.auth.accessToken,
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  setLoginPopup: (isLoginPopupOpened: boolean) => {
    dispatch(setLoginPopup(isLoginPopupOpened));
  },
  onLogout: (): Promise<void> => {
    return dispatch(logout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
