import Link from "next/link";
import { NavIcon, NavName } from "@UI/atoms";

const NavLogo = () => {
  return (
    <Link href="/" className="col-start-4 grid grid-cols-2 items-center">
      <NavIcon />
      <NavName />
    </Link>
  );
};

export default NavLogo;
