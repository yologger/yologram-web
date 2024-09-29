import Layout from "~/components/templates/Layout";
import { Switch, Route } from 'react-router-dom';

import HomePage from '~/components/pages/HomePage';
import NotFoundPage from '~/components/pages/NotFoundPage';
import AccountPage from '~/components/pages/AccountPage';
import ChangePasswordPage from '~/components/pages/AccountPage/ChangePasswordPage';
import JoinPage from '~/components/pages/JoinPage';
import TestPage from '~/components/pages/TestPage';
import BoardNewPage from '~/components/pages/BoardNewPage';
import BoardDetailPage from '~/components/pages/BoardDetailPage';
import BoardEditPage from "~/components/pages/BoardEditPage";

const App = () => {
    return <>
        <Layout>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/join" component={JoinPage} />
                <Route exact path="/account" component={AccountPage} />
                <Route exact path="/change-password" component={ChangePasswordPage} />
                <Route exact path="/board/new" component={BoardNewPage} />
                <Route exact path="/test" component={TestPage} />
                <Route exact path="/board/:bid(\d+)" component={BoardDetailPage} />
               <Route exact path="/board/:bid(\d+)/edit" component={BoardEditPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Layout>
    </>
}

export default App;