import Container from './container'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {IRootState, RootActions} from "~/store";
import { IJoinData } from "~/types";
import {joinAction} from "~/store/user";

const mapStateToProps = (state: IRootState) => ({
    isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
    onJoin: (data: IJoinData) => {
        return dispatch(joinAction(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)