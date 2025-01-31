import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router';
import Toast from '~/components/molecules/Toast';
import Layout from '~/components/templates/Layout';
const HomePage = lazy(() => import('~/pages/HomePage'));
const NotFoundPage = lazy(() => import('~/pages/NotFoundPage'));
const AccountPage = lazy(() => import('~/pages/AccountPage'));
const JoinPage = lazy(() => import('~/pages/JoinPage'));
const BoardNewPage = lazy(() => import('~/pages/BoardNewPage'));
const BoardEditPage = lazy(() => import('~/pages/BoardEditPage'));
const BoardDetailPage = lazy(() => import('~/pages/BoardDetailPage'));
const TestPage = lazy(() => import('~/pages/TestPage'));
const ChangePasswordPage = lazy(() => import('~/pages/AccountPage/ChangePasswordPage'));
import LoadingPage from '~/pages/LoadingPage';

const App = () => {
  return (
    <>
      <Layout>
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route index element={<HomePage />} />
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
