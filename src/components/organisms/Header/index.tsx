import { connect } from 'react-redux';
import Container from './container';
import { IRootState } from '~/store';
import { Dispatch } from 'redux';
import { setLoginPopup } from '~/store/common';

const mapStateToProps = (state: IRootState) => ({
  isLoginPopupOpened: state.common.isLoginPopupOpened
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  // login: () => dispatch(login("dummy@gmail.com", "1234")),
  // logout: () => dispatch(logout()),
  // getUserInfo: () => dispatch(getUserInfo())
  setLoginPopup: (isLoginPopupOpened: boolean) => {
    dispatch(setLoginPopup(isLoginPopupOpened));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
