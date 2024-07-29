"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function HeaderReservationBox() {
  const [searchText, setSearchText] = useState("");
  const [formHasFocus, setFormHasFocus] = useState(false);
  const [focusedField, setFocusedField] = useState<Fields | null>(null);

  enum Fields {
    where,
    checkIn,
    checkOut,
    who,
  }

  return (
    <form
      tabIndex={-1}
      onFocus={() => setFormHasFocus(true)}
      onBlur={() => {
        setFocusedField(null);
        setFormHasFocus(false);
      }}
      action=""
      id="reservationBox"
      className={`max-w-4xl ${
        formHasFocus
          ? "bg-palette-bebe bg-opacity-60"
          : "bg-transparent bg-opacity-100"
      } h-16 mx-auto border rounded-full shadow-md transition-all duration-150 gap-2 grid grid-flow-col grid-cols-3 overflow-hidden`}
    >
      <label
        onClick={() => setFocusedField(Fields.where)}
        htmlFor="search"
        className={`hover:cursor-pointer ${
          focusedField == Fields.where ? "bg-white shadow-md" : "bg-transparent"
        }  text-palette-hof ${
          focusedField == Fields.where ? "" : "hover:bg-palette-bebe"
        } transition-all duration-150 rounded-full w-full h-full `}
      >
        <div className="w-full h-full flex items-center justify-between pl-8 pr-1">
          <div className="flex-1 flex flex-col justify-center space-y-[1px]">
            <span className=" text-xs text-left font-medium">Where</span>
            <input
              id="search"
              value={searchText}
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              className="text-sm font-medium placeholder:font-light flex-1 bg-transparent outline-none"
              placeholder="Search destinations"
            />
          </div>

          {searchText && (
            <button
              onClick={() => setSearchText("")}
              type="button"
              className="ml-3 p-[6px] transition-all duration-100 grid place-content-center hover:bg-palette-deco hover:bg-opacity-30 rounded-full"
            >
              <FaXmark />
            </button>
          )}
        </div>
      </label>

      <div className="grid grid-flow-col grid-cols-2 gap-2 h-full">
        <div
          onClick={() => setFocusedField(Fields.checkIn)}
          className={`hover:cursor-pointer  ${
            focusedField == Fields.checkIn
              ? "bg-white shadow-md"
              : "bg-transparent"
          } flex justify-center h-full ${
            focusedField == Fields.checkIn ? "" : "hover:bg-palette-bebe"
          } items-center rounded-full transition-all duration-150`}
        >
          <div className="space-y-[1px]">
            <span className="text-palette-hof block text-xs text-left font-medium">
              Check in
            </span>
            <span className="block text-sm text-left font-light">
              Add dates
            </span>
          </div>
        </div>
        <div
          onClick={() => setFocusedField(Fields.checkOut)}
          className={`hover:cursor-pointer  ${
            focusedField == Fields.checkOut
              ? "bg-white shadow-md"
              : "bg-transparent"
          } flex justify-center h-full
           ${
             focusedField == Fields.checkOut ? "" : "hover:bg-palette-bebe"
           } items-center rounded-full transition-all duration-150`}
        >
          <div className="space-y-[1px]">
            <span className="text-palette-hof block text-xs text-left font-medium">
              Check out
            </span>
            <span className="block text-sm text-left font-light">
              Add dates
            </span>
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setFocusedField(Fields.who);
        }}
        className={`hover:cursor-pointer ${
          focusedField == Fields.who ? "bg-white shadow-md" : "bg-transparent"
        } flex items-center justify-between rounded-full w-full h-full
         ${focusedField == Fields.who ? "" : "hover:bg-palette-bebe"}
          pl-8 pr-2 transition-all duration-150`}
      >
        <div className="space-y-[1px]">
          <span className="block text-xs font-medium text-palette-hof">
            Who
          </span>
          <span className="block text-sm font-light">Add guests</span>
        </div>

        <button
          onClick={() => setSearchText("")}
          type="button"
          className={`h-12 ${
            formHasFocus ? "w-24" : "w-12"
          } overflow-hidden text-sm flex items-center transition-all duration-150 justify-center text-white bg-brand-color rounded-full`}
        >
          <FaSearch size={16} />
          {formHasFocus && <span className="ml-1">Search</span>}
        </button>
      </div>
    </form>
  );
}
