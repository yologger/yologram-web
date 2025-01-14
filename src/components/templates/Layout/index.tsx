import Container from './container';
import { connect } from 'react-redux'
import { IRootState } from '~/store'
import { Dispatch } from 'redux'

const mapStateToProps = (state: IRootState) => ({
  isShownLoginPopup: state.common.isShownLoginPopup
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)