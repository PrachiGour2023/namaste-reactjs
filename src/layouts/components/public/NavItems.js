import { Link } from "react-router";

const NavItem = ({ to, icon: Icon, label }) => {
  return (
    <li className="flex items-center gap-2 hover:text-orange-500 font-semibold dark:text-white cursor-pointer">
      <Icon />
      {to ? <Link to={to}>{label}</Link> : label}
    </li>
  );
};

export default NavItem;
