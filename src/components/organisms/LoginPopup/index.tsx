import { connect } from 'react-redux';
import Container from './container';
import { IRootState } from '~/store';
import { Dispatch } from 'redux';
import { setLoginPopup } from '~/store/common';

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setLoginPopup: (isLoginPopupOpened: boolean) => {
    dispatch(setLoginPopup(isLoginPopupOpened));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
