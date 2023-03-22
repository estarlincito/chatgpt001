import Collapse from "./Collapse";
import MenuAction from "./MenuAction";

const Navbar = () => {
  return (
    <nav className="relative grid grid-cols-9 items-center p-4 bg-primary text-slate-50 rounded-t-lg select-none">
      <MenuAction />
      <Collapse />
    </nav>
  );
};

export default Navbar;
