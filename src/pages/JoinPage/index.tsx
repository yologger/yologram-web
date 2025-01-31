import Container from './container';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { IRootState, RootActions } from '~/store';
import { IJoinPayload, IJoinResult } from '~/types/ums';
import { ILoginPayload, ILoginResult } from '~/types/auth';
import { join } from '~/store/user';
import { login } from '~/store/auth';
import { fail } from '~/store/error';

const mapStateToProps = (state: IRootState) => ({
  accessToken: state.auth.accessToken,
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  onJoin: (payload: IJoinPayload): Promise<IJoinResult> => {
    return dispatch(join(payload));
  },
  onLogin: (payload: ILoginPayload): Promise<ILoginResult> => {
    return dispatch(login(payload));
  },
  onError: (msg: string) => dispatch(fail(msg))
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
