import { Route, Routes } from 'react-router';
import Layout from '~/components/template/Layout';
import HomePage from '~/pages/HomePage';
import TestPage from '~/pages/TestPage';

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
