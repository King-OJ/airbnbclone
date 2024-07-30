"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function FooterInspirations() {
  type Property = {
    location?: string;
    type: string;
  };

  type Inspiration = {
    title: string;
    content: Array<Property>;
  };

  const inspirations: Array<Inspiration> = [
    {
      title: "Popular",
      content: [
        { location: "Canmore", type: "Charlet rentals" },
        { location: "Benalmadena", type: "Vacation rentals" },
        { location: "Mabella", type: "Villa rentals" },
        { location: "Mijas", type: "Apartment rentals" },
        { location: "Prescott", type: "House rentals" },
        { location: "Scottsdale", type: "Apartment rentals" },
        { location: "Tucson", type: "Rentals with pools" },
        { location: "Jasper", type: "Vacation rentals" },
        { location: "Mountain View", type: "Family-friend rentals" },
        { location: "Devon port", type: "Cottage rentals" },
        { location: "Mallacoota", type: "Pet-friendly rentals" },
        { location: "Ibiza", type: "Apartment rentals" },
        { location: "Anaheim", type: "Beach house rentals" },
        { location: "Monterey", type: "Cabin rentals" },
        { location: "Paso Robles", type: "Vacation rentals" },
        { location: "Santa babara", type: "Apartment rentals" },
        { location: "Sonoma", type: "House rentals" },
      ],
    },
    {
      title: "Arts & culture",
      content: [
        { location: "Phoenix", type: "House rentals" },
        { location: "Devon port", type: "Cottage rentals" },
        { location: "Mallacoota", type: "Pet-friendly rentals" },
        { location: "Ibiza", type: "Apartment rentals" },
        { location: "Anaheim", type: "Beach house rentals" },
        { location: "Monterey", type: "Cabin rentals" },
        { location: "Paso Robles", type: "Vacation rentals" },
        { location: "Santa babara", type: "Apartment rentals" },
        { location: "Sonoma", type: "House rentals" },
      ],
    },
    {
      title: "Outdooors",
      content: [
        { location: "Lake Martin", type: "Condo rentals" },
        { location: "Jasper", type: "Vacation rentals" },
        { location: "Mountain View", type: "Family-friend rentals" },
        { location: "Devon port", type: "Cottage rentals" },
        { location: "Mallacoota", type: "Pet-friendly rentals" },
        { location: "Ibiza", type: "Apartment rentals" },
        { location: "Anaheim", type: "Beach house rentals" },
      ],
    },
    {
      title: "Mountains",
      content: [
        { location: "Menton", type: "House rentals" },
        { location: "Mabella", type: "Villa rentals" },
        { location: "Mijas", type: "Apartment rentals" },
        { location: "Prescott", type: "House rentals" },
        { location: "Scottsdale", type: "Apartment rentals" },
        { location: "Tucson", type: "Rentals with pools" },
      ],
    },
    {
      title: "Beach",
      content: [{ location: "Dauphine Island", type: "Beach house rentals" }],
    },
    {
      title: "Unique stays",
      content: [{ location: "Cabins", type: "United States" }],
    },
    {
      title: "Categories",
      content: [
        { type: "amazing pools" },
        { type: "artic" },
        { type: "camping" },
      ],
    },
    {
      title: "Things to do",
      content: [
        { location: "London", type: "England" },
        { location: "Paris", type: "Ile-de-France" },
      ],
    },
    {
      title: "Travel tips & Inspiration",
      content: [{ location: "Cabins", type: "United States" }],
    },
    {
      title: "Airbnb-friendly apartments",
      content: [{ location: "Cabins", type: "United States" }],
    },
  ];

  const [activeInsp, setActiveInsp] = useState(0);
  const [showOverflowControls, setShowOverflowControls] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);

  const inspirationScrollRef: any = useRef(null);

  useEffect(() => {
    const setScrollDom = () => {
      if (inspirationScrollRef.current !== null) {
        const { scrollWidth, clientWidth } = inspirationScrollRef.current;

        if (clientWidth < scrollWidth) {
          setScrollViewWidth(scrollWidth - clientWidth - 0.5);
          setShowOverflowControls(true);
        } else {
          setShowOverflowControls(false);
        }
      }
    };

    setScrollDom();

    window.addEventListener("resize", setScrollDom);

    return () => window.removeEventListener("resize", setScrollDom);
  }, []);

  return (
    <div className=" mb-2 ">
      <div className="relative">
        <ul
          ref={inspirationScrollRef}
          className="overflow-x-scroll scroll-smooth no-scrollbar border-palette-deco border-b tracking-wide space-x-6 flex items-center text-sm whitespace-nowrap font-medium"
          onScroll={() => {
            if (inspirationScrollRef.current) {
              const { scrollLeft } = inspirationScrollRef.current;
              setScrollPosition(scrollLeft);
            }
          }}
        >
          {inspirations.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setActiveInsp(index);
                }}
                className={`hover:cursor-pointer pb-3 transition-all duration-200 ${
                  index == activeInsp
                    ? "border-b-[2px] text-palette-hof border-palette-hof"
                    : ""
                }`}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
        {showOverflowControls && (
          <>
            {scrollPosition != 0 && (
              <div className="absolute bg-gradient-to-r from-palette-faint to-transparent bg-opacity-30 left-0 top-0 bottom-0 ">
                <div className="flex h-full items-start pr-6 -ml-4 ">
                  <button
                    onClick={() => {
                      if (inspirationScrollRef.current) {
                        inspirationScrollRef.current.scrollLeft -=
                          inspirationScrollRef.current.scrollWidth /
                          inspirations.length;
                      }
                    }}
                    className="text-palette-hof text-xl font-semibold"
                  >
                    <IoChevronBack />
                  </button>
                </div>
              </div>
            )}

            {scrollPosition < scrollViewWidth && (
              <div className="absolute bg-gradient-to-l from-palette-faint to-transparent bg-opacity-30 right-0 top-0 bottom-0 ">
                <div className="flex h-full items-start pl-6 -mr-4 ">
                  <button
                    onClick={() => {
                      if (inspirationScrollRef.current) {
                        inspirationScrollRef.current.scrollLeft +=
                          inspirationScrollRef.current.scrollWidth /
                          inspirations.length;
                      }
                    }}
                    className="text-palette-hof text-xl font-semibold"
                  >
                    <IoChevronForward />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      <div className="mt-2 sm:mt-4 md:mt-8">
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center gap-6 md:gap-8 text-sm">
          {inspirations[activeInsp].content.map((item, index) => {
            return (
              <li key={index}>
                <Link href="/">
                  <div className="text-palette-hof font-medium">
                    {item.location}
                  </div>
                  <div className="font-light">{item.type}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
