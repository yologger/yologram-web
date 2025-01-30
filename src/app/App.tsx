import { Route, Routes } from 'react-router';
import Layout from '~/components/template/Layout';
import HomePage from '~/pages/HomePage';
import LoginPage from '~/pages/LoginPage';
import NotFoundPage from '~/pages/NotFoundPage';
import AccountPage from '~/pages/AccountPage';
import JoinPage from '~/pages/JoinPage';
import BoardNewPage from '~/pages/BoardNewPage';
import BoardEditPage from '~/pages/BoardEditPage';
import BoardDetailPage from '~/pages/BoardDetailPage';
import TestPage from '~/pages/TestPage';
import ChangePasswordPage from '~/pages/AccountPage/ChangePasswordPage';
import Toast from '~/components/template/Toast';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/change-password" element={<ChangePasswordPage />} />
          <Route path="/board/new" element={<BoardNewPage />} />
          {/* <Route path="/board/edit/:bid(\d+)" element={BoardEdit}  /> */}
          <Route path="/board/:bid" element={<BoardDetailPage />} />
          <Route path="/board/:bid/edit" element={<BoardEditPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      <Toast />
    </>
  );
};

export default App;
