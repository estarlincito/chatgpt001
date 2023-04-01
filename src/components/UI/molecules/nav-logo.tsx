import Link from "next/link";
import { NavIcon, NavName } from "@UI/atoms";

const NavLogo = () => {
  return (
    <Link href="/" className="grid items-center grid-cols-2 col-start-4">
      <NavIcon />
      <NavName />
    </Link>
  );
};

export default NavLogo;
