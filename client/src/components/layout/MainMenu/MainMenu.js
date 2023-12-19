import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'react-bootstrap';
import styles from './MainMenu.module.scss';

const MainMenu = () => {
  return (
    <div className={styles.mainMenu}>
      <Navbar expand="md" className="animated fadeIn">
        <Nav className="ms-auto align-items-center" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/buttons">Buttons</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/dropdowns">Dropdowns</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainMenu;
