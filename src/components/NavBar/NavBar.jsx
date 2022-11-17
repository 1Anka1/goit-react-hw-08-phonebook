import { Link } from 'react-router-dom';
//COMPONENTS
import NavbarMenu from './NavMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavBarUser from './NavBarUser/NavBarUser';
//redux
import useAuth from 'shared/hooks/useAuth';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useAuth();
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.row}>
          <Link to="/">Home</Link>
          {isLogin && <NavbarMenu />}
          {isLogin ? <NavBarUser /> : <NavbarAuth />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
