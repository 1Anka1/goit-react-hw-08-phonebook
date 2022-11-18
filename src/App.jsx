//react
import { useEffect } from 'react';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
import { getLoadingUserStatus } from 'redux/auth/auth-selectors';
//COMPONENTS
import UserRoutes from './UserRoutes';
import NavBar from './components/NavBar/NavBar';
// import Loader from 'components/Loader/Loader';

export default function App() {
  const dispatch = useDispatch();
  // const isLoadingUser = useSelector(getLoadingUserStatus);
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  // return (
  //   <>
  //     {isLoadingUser ? (
  //       <Loader/>
  //     ) : (
  //       <>
  //         <NavBar />
  //         <UserRoutes />
  //       </>
  //     )}
  //   </>
  // );
    return (
        <>
          <NavBar />
          <UserRoutes />
        </>
  );
}
