import { NavMenu } from "@UI/atoms";
import { NavLogo } from "@UI/molecules";
import NavCollapse from "../molecules/NavCollapse";

const Nav = () => {
  return (
    <nav className="relative grid grid-cols-9 items-center p-4 bg-primary text-slate-50 rounded-t-lg select-none border-solid border-b border-b-tertiary border-opacity-30">
      <NavCollapse />
      <NavMenu />
      <NavLogo />
    </nav>
  );
};

export default Nav;
