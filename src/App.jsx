//react
import { useEffect } from 'react';
//redux
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/auth-operations';
//COMPONENTS
import UserRoutes from './UserRoutes'
import NavBar from './components/NavBar/NavBar'

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current())
  }, [dispatch])
  
  return (
    <>
    <NavBar />
   <UserRoutes/>
    </>

  );
}