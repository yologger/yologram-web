import { connect } from 'react-redux';
import Container from './container';
import { IRootState } from '~/store';

const mapStateToProps = (state: IRootState) => ({
  accessToken: state.auth.accessToken,
  userInfo: state.auth.userInfo
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
