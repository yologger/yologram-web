import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { IRootState, RootActions } from '~/store';
import Container from './container';
import { addPopupCount, deletePopupCount } from '~/store/common';

const mapStateToProps = (state: IRootState) => ({
  popupCount: state.common.popupCount,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
  addPopupCount: () => { dispatch(addPopupCount()) },
  deletePopupCount: () => { dispatch(deletePopupCount()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
