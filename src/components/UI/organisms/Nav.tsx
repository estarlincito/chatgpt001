import { NavMenu } from "@UI/atoms";
import { NavLogo, NavCollapse } from "@UI/molecules";

const Nav = () => {
  return (
    <nav className="relative grid items-center grid-cols-9 p-4 border-b select-none text-slate-50 border-b-tertiary border-opacity-30">
      <NavCollapse />
      <NavMenu />
      <NavLogo />
    </nav>
  );
};

export default Nav;
