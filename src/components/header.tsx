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
      <Link href={"/"} tabIndex={0} aria-label="Logo to HomePage">
        <Image src={logo} alt="heal" width="80" height="80" />
      </Link>
      <div className="grow">
        <div className="flex items-end justify-evenly sm:items-center sm:justify-center gap-4 md:gap-8">
          <Link
            aria-label="Link to Appointments page"
            tabIndex={0}
            className={`${
              path === "/" ? "text-teal-500 font-bold" : ""
            } md:w-36 md:text-base text-xs text-center`}
            href={"/"}
          >
            <span className="hidden md:block">My Appointments</span>
            <span className="md:hidden">Appointments</span>
          </Link>
          <Link
            aria-label="Link to Doctors page"
            tabIndex={0}
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
