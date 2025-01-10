import { connect } from 'react-redux'
import Container from './container'
import {IRootState, RootActions} from '~/store'
import { setLoginPopup } from '~/store/common'
import {ILoginPayload, ILoginResult} from "~/types/auth";
import {login} from "~/store/auth";
import {ThunkDispatch} from "redux-thunk";
import {IFailAction} from "~/store/error/types";
import {fail} from "~/store/error";

const mapStateToProps = (state: IRootState) => ({
})

const mapDispatchToProps = (dispatch: ThunkDispatch<IRootState, null, RootActions>) => ({
    setLoginPopup: (isLoginPopupOpened: boolean) => {
        dispatch(setLoginPopup(isLoginPopupOpened))
    },
    onLogin: (payload: ILoginPayload): Promise<ILoginResult | IFailAction> => {
        return dispatch(login(payload))
    },
    fail: (msg: string) => dispatch(fail(msg)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Container)