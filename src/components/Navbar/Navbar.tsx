import { navLinks } from "../../utils/navLinks";
import { Link } from "react-router-dom";
import logo from "/shared/logo.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        {navLinks.map((link) => (
          <Link to={link.url} key={link.url}>
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
