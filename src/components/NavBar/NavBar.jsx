import { Link } from 'react-router-dom';

import NavbarMenu from "./NavMenu/NavbarMenu";
import NavbarAuth from './NavbarAuth/NavbarAuth';

import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <Link to="/">Home</Link>
                    <NavbarMenu />
                    <NavbarAuth />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;