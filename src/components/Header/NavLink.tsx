import { FC } from "react";
import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps & {
  text: string;
};

const NavLink: FC<Props> = ({ text, to }) => {
  return (
    <RouterNavLink
      to={to}
      style={({ isActive }) => ({
        color: isActive ? "#EA524F" : "inherit",
        textDecoration: "none",
        transition: "color 0.2s ease",
      })}
    >
      {text}
    </RouterNavLink>
  );
};

export default NavLink;
