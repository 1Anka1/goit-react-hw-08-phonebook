import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicPoute/PublicPoute';
import HomePage from 'pages/HomePages/HomePages';

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const MyContactsPage = lazy(() =>
  import('./pages/MyContactPage/MyContactPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Load page</p>}>
        <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/my-contacts" element={<MyContactsPage />} />
              </Route>
               <Route path='*' element={<HomePage/>} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
