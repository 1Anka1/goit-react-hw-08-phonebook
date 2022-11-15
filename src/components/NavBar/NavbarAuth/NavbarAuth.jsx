import { NavLink } from "react-router-dom"
import css from './navbarauth.module.css'
export default function NavbarAuth() {
  return (
    <div className={css.navDiv}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
    </div>
  )
}
