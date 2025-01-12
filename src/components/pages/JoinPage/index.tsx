import Container from './container'
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import {IRootState, RootActions} from "~/store";
import {IJoinPayload, IJoinResult} from "~/types";
import {ILoginPayload, ILoginResult} from "~/types/auth";
import {IFailAction} from "~/store/error/types";
import {join} from "~/store/user";
import {login} from "~/store/auth";

const mapStateToProps = (state: IRootState) => ({
    accessToken: state.auth.accessToken,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
    onJoin: (payload: IJoinPayload) => {
        return dispatch(join(payload))
    },
    onLogin: (payload: ILoginPayload): Promise<ILoginResult | IFailAction> => {
        return dispatch(login(payload))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)