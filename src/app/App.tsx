import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import Layout from '~/components/template/Layout';
const HomePage = lazy(() => import('~/pages/HomePage'));
const LoginPage = lazy(() => import('~/pages/LoginPage'));
const NotFoundPage = lazy(() => import('~/pages/NotFoundPage'));
const AccountPage = lazy(() => import('~/pages/AccountPage'));
const JoinPage = lazy(() => import('~/pages/JoinPage'));
const BoardNewPage = lazy(() => import('~/pages/BoardNewPage'));
const BoardEditPage = lazy(() => import('~/pages/BoardEditPage'));
const BoardDetailPage = lazy(() => import('~/pages/BoardDetailPage'));
const TestPage = lazy(() => import('~/pages/TestPage'));
const ChangePasswordPage = lazy(() => import('~/pages/AccountPage/ChangePasswordPage'));
import Toast from '~/components/template/Toast';

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Layout>
      <Toast />
    </>
  );
};

export default App;
