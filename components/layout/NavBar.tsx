import Link from "next/link";
import { BiBuildingHouse } from "react-icons/bi";
function NavBar() {
  return (
    <header className="bg-indigo-500 w-full h-16  text-white flex items-center justify-around overflow-hidden ">
      <Link href={"/"}>
        <div className="flex items-center gap-1 cursor-pointer">
          <BiBuildingHouse size={29} color="#facc15" />
          <span className="font-bold text-2xl">Bayut</span>
          <span className="self-start">™</span>
        </div>
      </Link>
      <nav className="space-x-5">
        <span className="hover:text-yellow-400 font-medium">
          <Link href={"/agencies"}>Agencies</Link>
        </span>
        <span className="hover:text-yellow-400 font-medium">
          <Link href={"/"}>Find Property</Link>
        </span>
      </nav>
    </header>
  );
}

export default NavBar;
