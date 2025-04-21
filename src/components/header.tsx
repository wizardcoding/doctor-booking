"use client";

import Link from "next/link";
import Image from "next/image";
import * as logo from "@/assets/heal.avif";
import { usePathname } from "next/navigation";
import DropdownSpeciality from "./dropdownSpeciality";

const Header = () => {
  const path = usePathname();
  return (
    <div className="mx-auto flex items-center border-b-2 px-6 py-2 h-22">
      <Image src={logo} alt="heal" width="80" height="80" />
      <div className="grow">
        <div className="flex items-end justify-evenly sm:items-center sm:justify-center gap-4 md:gap-8">
          <Link
            className={`${
              path === "/appointments" ? "text-teal-500 font-bold" : ""
            } md:w-36 md:text-base text-xs text-center`}
            href={"/appointments"}
          >
            My Appointments
          </Link>
          <Link
            className={`${
              path === "/doctors" ? "text-teal-500 font-bold" : ""
            } text-center text-xs md:w-36 md:text-base`}
            href={"/doctors"}
          >
            Directory
          </Link>
          {path === "/doctors" && <DropdownSpeciality />}
        </div>
      </div>
    </div>
  );
};

export default Header;
