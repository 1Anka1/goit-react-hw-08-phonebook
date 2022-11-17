//redux
import { useDispatch,   } from "react-redux"
import { logout } from "redux/auth/auth-operations"
import { getUser } from "redux/auth/auth-selectors";


export default function NavBarUser() {
  const dispatch = useDispatch();
  // const {name} = useSelector(getUser);
  
  const onLogout = () => {
    dispatch(logout());
  }
    return (
    <div><button onClick={onLogout}>Logout</button></div>
  )
}