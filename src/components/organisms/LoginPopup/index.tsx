import { connect } from 'react-redux';
import Container from './container';
import { IRootState, RootActions } from '~/store';
import { Dispatch } from 'redux';
import { setLoginPopup } from '~/store/common';
import { ILoginPayload, ILoginResult } from '~/types/auth';
import { ThunkDispatch } from 'redux-thunk';
import { login } from '~/store/auth';

const mapStateToProps = (state: IRootState) => ({});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  setLoginPopup: (isLoginPopupOpened: boolean) => {
    dispatch(setLoginPopup(isLoginPopupOpened));
  },
  onLogin: (payload: ILoginPayload): Promise<ILoginResult> => {
    return dispatch(login(payload));
  },
  onError: (msg: string) => dispatch(fail(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
