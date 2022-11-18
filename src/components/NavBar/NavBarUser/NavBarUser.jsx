//redux
import { useDispatch } from "react-redux"
import { logout } from "redux/auth/auth-operations"

import styled from './navBarUser.module.css'
export default function NavBarUser() {
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(logout());
  }
    return (
      <div><button className={styled.btnLogout} onClick={onLogout}>Logout</button></div>
  )
}