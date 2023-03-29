import { NavMenu } from "@UI/atoms";
import { NavLogo } from "@UI/molecules";
import NavCollapse from "../molecules/NavCollapse";

const Nav = () => {
  return (
    <nav className="relative grid items-center grid-cols-9 p-4 border-b border-solid rounded-t-lg select-none bg-primary text-slate-50 border-b-tertiary border-opacity-30">
      <NavCollapse />
      <NavMenu />
      <NavLogo />
    </nav>
  );
};

export default Nav;
