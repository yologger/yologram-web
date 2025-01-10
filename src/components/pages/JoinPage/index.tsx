import Container from './container'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {IRootState, RootActions} from "~/store";
import {IJoinPayload, IJoinResult} from "~/types";
import {joinAction} from "~/store/user";
import {IFailAction} from "~/store/error/types";

const mapStateToProps = (state: IRootState) => ({
    isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
    onJoin: (payload: IJoinPayload) => {
        return dispatch(joinAction(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)