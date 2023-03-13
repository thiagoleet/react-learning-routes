import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const linkIsActive = ({ isActive }) => (isActive ? classes.active : undefined);

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={linkIsActive} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={linkIsActive} end>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
