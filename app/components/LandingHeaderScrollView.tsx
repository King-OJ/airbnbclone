"use client";

import { useEffect, useRef, useState } from "react";
import {
  IoBedOutline,
  IoChevronBack,
  IoChevronForward,
  IoFlameOutline,
  IoFootballOutline,
  IoHomeOutline,
  IoKeyOutline,
} from "react-icons/io5";

export default function LandingHeaderScrollView() {
  const scrollList = [
    {
      title: "Rooms",
      icon: <IoBedOutline />,
    },
    {
      title: "New",
      icon: <IoKeyOutline />,
    },
    {
      title: "Trending",
      icon: <IoFlameOutline />,
    },
    {
      title: "Lakefront",
      icon: <IoHomeOutline />,
    },
    {
      title: "Play",
      icon: <IoFootballOutline />,
    },
    {
      title: "Containers",
      icon: <IoBedOutline />,
    },
    {
      title: "Amazing views",
      icon: <IoKeyOutline />,
    },
    {
      title: "Castles",
      icon: <IoFlameOutline />,
    },
    {
      title: "Top cities",
      icon: <IoHomeOutline />,
    },
    {
      title: "Islands",
      icon: <IoFootballOutline />,
    },
    {
      title: "Arctic",
      icon: <IoBedOutline />,
    },
    {
      title: "New",
      icon: <IoKeyOutline />,
    },
    {
      title: "Trending",
      icon: <IoFlameOutline />,
    },
    {
      title: "Countryside",
      icon: <IoHomeOutline />,
    },
    {
      title: "Amazing pools",
      icon: <IoFootballOutline />,
    },
    {
      title: "Farms",
      icon: <IoFlameOutline />,
    },
    {
      title: "Bed & breakfasts",
      icon: <IoHomeOutline />,
    },
    {
      title: "Towers",
      icon: <IoFootballOutline />,
    },
    {
      title: "Treehouses",
      icon: <IoBedOutline />,
    },
    {
      title: "Surfing",
      icon: <IoKeyOutline />,
    },
    {
      title: "Beach",
      icon: <IoFlameOutline />,
    },
    {
      title: "Chefs kitchen",
      icon: <IoHomeOutline />,
    },
    {
      title: "Caves",
      icon: <IoFootballOutline />,
    },
  ];

  const [activeListItem, setActiveListItem] = useState(0);

  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollViewWidth, setScrollViewWidth] = useState(0);
  // const [scrollElement, setScrollElement] = useState<any>(null);

  let scrollRef: any = useRef(null);

  useEffect(() => {
    const setScrollDom = () => {
      if (scrollRef.current !== null) {
        scrollRef = scrollRef;
        const { scrollWidth, clientWidth } = scrollRef.current;
        setScrollViewWidth(scrollWidth - clientWidth);
      }
    };

    setScrollDom();

    window.addEventListener("resize", () => {
      setScrollDom();
    });

    return () =>
      window.removeEventListener("resize", () => {
        setScrollDom();
      });
  }, []);

  return (
    <section className="my-4 sticky top-0 z-20 bg-white shadow-sm">
      <div className="relative py-2 px-2 xs:px-4 sm:px-6 md:px-10">
        <ul
          ref={scrollRef}
          onScroll={() => {
            const { scrollLeft } = scrollRef.current;
            setScrollPosition(Math.abs(scrollLeft));
          }}
          className="flex items-center space-x-6 md:space-x-10 scroll-smooth overflow-x-auto no-scrollbar"
        >
          {scrollList.map((list, index) => {
            return (
              <li
                key={index}
                className={`${
                  index == activeListItem
                    ? "text-palette-hof"
                    : "text-palette-foggy hover:text-palette-hof"
                } transition-all duration-150`}
              >
                <button
                  onClick={() => setActiveListItem(index)}
                  className={`space-y-1 md:space-y-2 ${
                    index == activeListItem
                      ? "border-palette-hof"
                      : " border-transparent hover:border-palette-deco"
                  } flex border-b-2 flex-col items-center border-palette-hof transition-all duration-150`}
                >
                  <span className="text-base md:text-lg">{list.icon}</span>
                  <span className="font-medium pb-2 text-xs whitespace-nowrap">
                    {list.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {scrollPosition != 0 && (
          <div className="absolute bg-gradient-to-r from-white via-white to-transparent bg-opacity-30 left-0 top-0 bottom-0 ">
            <div className="flex h-full items-center pl-2 sm:pl-6 md:pl-10 xs:pl-4 pr-4 sm:pr-6">
              <button
                onClick={() => {
                  scrollRef.current.scrollLeft -= 300;
                }}
                className="md:h-8 h-6 w-6 md:w-8 hover:shadow-sm duration-150 transition-all hover:scale-105 rounded-full grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
              >
                <IoChevronBack />
              </button>
            </div>
          </div>
        )}

        {scrollPosition < scrollViewWidth && (
          <div className="absolute bg-gradient-to-l from-white via-white to-transparent bg-opacity-30 right-0 top-0 bottom-0 ">
            <div className="flex h-full items-center pl-4 sm:pl-6 pr-2 xs:pr-4 sm:pr-6 md:pr-10 ">
              <button
                onClick={() => {
                  scrollRef.current.scrollLeft += 300;
                }}
                className="md:h-8 h-6 w-6 md:w-8 hover:shadow-sm duration-150 transition-all hover:scale-105  rounded-full grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
              >
                <IoChevronForward />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
