import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';

import { IRootState, RootActions } from '~/store';


import { init } from '~/store/error';
import Container from './container';

const mapStateToProps = (state: IRootState) => ({
  toggle: state.error.toggle,
  message: state.error.message,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  init: () => { dispatch(init()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
