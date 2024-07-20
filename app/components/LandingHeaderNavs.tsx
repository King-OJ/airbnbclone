import Image from "next/image";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { FaUserCircle, FaBars } from "react-icons/fa";
import HeaderReservationBox from "./HeaderReservationBox";

export default function LandingHeaderNavs() {
  return (
    <nav className="min-h-20 w-full border-b pt-4 pb-6">
      <div className="grid grid-flow-col items-center mb-4 px-6 md:px-10">
        <Link href="/">
          <Image
            className="w-auto h-auto"
            src="/assets/airbnb-logo.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        <div className="justify-self-end">
          <ul className="flex items-center justify-center space-x-[2px] text-palette-hof">
            <li className="py-2 px-4 transition-all text-palette-foggy duration-150 hover:cursor-pointer font-light hover:font-normal hover:bg-opacity-30 hover:bg-palette-bebe rounded-full">
              Stays
            </li>
            <li className="py-2 px-4">Experiences</li>
          </ul>
        </div>
        <div className="flex items-center space-x-6 justify-self-end">
          <span className="text-palette-hof text-sm font-medium">
            Airbnb your home
          </span>
          <button className="text-palette-hof">
            <SlGlobe />
          </button>
          <button className="hover:shadow-lg transition-all duration-150 hover:cursor-pointer rounded-full px-3 py-[8px] flex items-center space-x-3 outline outline-palette-deco outline-1">
            <span>
              <FaBars />
            </span>
            <span>
              <FaUserCircle fill="#6A6A6A" size={30} />
            </span>
          </button>
        </div>
      </div>
      <HeaderReservationBox />
    </nav>
  );
}
