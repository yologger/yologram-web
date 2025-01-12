import { IRootState, RootActions } from '~/store'
import Container from './container'
import { ThunkDispatch } from 'redux-thunk'
import { connect } from 'react-redux'

const mapStateToProps = (state: IRootState) => ({
  userInfo: state.auth.userInfo,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Container)