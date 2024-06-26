import { navLinks } from "../../utils/navLinks";
import { Link } from "react-router-dom";
import logo from "/shared/logo.svg";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 relative">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className={`flex justify-around ${styles.navBackground}`}>
        {navLinks.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
      <hr className={`${styles.hr}`} />
    </div>
  );
};
