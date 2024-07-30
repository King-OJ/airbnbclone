"use client";
import Image from "next/image";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { FaUserCircle } from "react-icons/fa";
import HeaderReservationBox from "./HeaderReservationBox";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";

interface LandingHeaderNavsProps {
  pageScroll: number;
}

export default function LandingHeaderNavs({
  pageScroll,
}: LandingHeaderNavsProps) {
  const reservations: Array<string> = ["stays", "experiences"];
  const [reservationOption, setReservationOption] = useState(0);

  return (
    <nav className="min-h-20 w-full border-b px-2 xs:px-4 sm:px-6 md:px-10 pt-4 pb-6 hidden xs:block">
      <div className="flex items-center justify-between mb-5">
        <Link href="/" className="basis-1/4">
          <Image
            className="w-auto h-auto"
            src="/assets/airbnb-logo.png"
            alt="Next.js Logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        <div className="px-6 basis-2/4">
          <div
            className={`${
              pageScroll > 0 ? "block" : "hidden"
            } rounded-full border border-palette-deco p-[6px] shadow-sm hover:shadow-md transition-all duration-200`}
          >
            <ul className="flex items-center justify-between">
              <li className="text-center border-r text-sm w-full text-palette-hof font-medium">
                <button className="py-[2px]">Anywhere</button>
              </li>
              <li className="text-center border-r text-sm w-full text-palette-hof font-medium">
                <button className="py-[2px]">Any week</button>
              </li>
              <li className="text-sm w-full pl-3">
                <div className="py-[2px] flex items-center justify-end space-x-3">
                  <span className="font-light whitespace-nowrap">
                    Add guests
                  </span>
                  <button className="h-8 w-8 grid place-content-center rounded-full bg-brand-color text-white">
                    <FaSearch />
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <ul
            className={`${
              pageScroll == 0 ? "flex" : "hidden"
            } transition-all duration-200 items-center text-center justify-center`}
          >
            {reservations.map((item, index) => {
              return (
                <li
                  onClick={() => {
                    setReservationOption(index);
                  }}
                  key={index}
                  className={`py-[10px] px-4 transition-all  duration-150 ${
                    reservationOption == index
                      ? "text-palette-hof font-normal"
                      : "font-light  hover:text-palette-hof hover:bg-palette-faint"
                  } hover:cursor-pointer  capitalize  rounded-full`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center space-x-1 justify-self-end basis-1/4">
          <div className="flex items-center">
            <Link
              className="text-palette-hof whitespace-nowrap text-sm font-medium rounded-full hover:bg-palette-faint py-[10px] px-4 transition-all  duration-150"
              href="/"
            >
              Airbnb your home
            </Link>
            <button className="text-palette-hof text-[16px] rounded-full hover:bg-palette-faint p-[10px] transition-all  duration-150">
              <SlGlobe />
            </button>
          </div>

          <button className="hover:shadow-md transition-all duration-150 hover:cursor-pointer rounded-full px-4 py-[6px] flex items-center space-x-2 outline outline-palette-deco outline-1">
            <span>
              <HiMiniBars3 />
            </span>
            <span>
              <FaUserCircle fill="#6A6A6A" size={30} />
            </span>
          </button>
        </div>
      </div>
      <HeaderReservationBox reservationOption={reservationOption} />
    </nav>
  );
}
