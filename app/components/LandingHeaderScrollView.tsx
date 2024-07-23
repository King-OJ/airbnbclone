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
      icon: <IoBedOutline size={23} />,
    },
    {
      title: "New",
      icon: <IoKeyOutline size={23} />,
    },
    {
      title: "Trending",
      icon: <IoFlameOutline size={23} />,
    },
    {
      title: "Lakefront",
      icon: <IoHomeOutline size={23} />,
    },
    {
      title: "Play",
      icon: <IoFootballOutline size={23} />,
    },
    {
      title: "Containers",
      icon: <IoBedOutline size={23} />,
    },
    {
      title: "Amazing views",
      icon: <IoKeyOutline size={23} />,
    },
    {
      title: "Castles",
      icon: <IoFlameOutline size={23} />,
    },
    {
      title: "Top cities",
      icon: <IoHomeOutline size={23} />,
    },
    {
      title: "Islands",
      icon: <IoFootballOutline size={23} />,
    },
    {
      title: "Arctic",
      icon: <IoBedOutline size={23} />,
    },
    {
      title: "New",
      icon: <IoKeyOutline size={23} />,
    },
    {
      title: "Trending",
      icon: <IoFlameOutline size={23} />,
    },
    {
      title: "Countryside",
      icon: <IoHomeOutline size={23} />,
    },
    {
      title: "Amazing pools",
      icon: <IoFootballOutline size={23} />,
    },
    {
      title: "Farms",
      icon: <IoFlameOutline size={23} />,
    },
    {
      title: "Bed & breakfasts",
      icon: <IoHomeOutline size={23} />,
    },
    {
      title: "Towers",
      icon: <IoFootballOutline size={23} />,
    },
    {
      title: "Treehouses",
      icon: <IoBedOutline size={23} />,
    },
    {
      title: "Surfing",
      icon: <IoKeyOutline size={23} />,
    },
    {
      title: "Beach",
      icon: <IoFlameOutline size={23} />,
    },
    {
      title: "Chefs kitchen",
      icon: <IoHomeOutline size={23} />,
    },
    {
      title: "Caves",
      icon: <IoFootballOutline size={23} />,
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
    <section className="my-4">
      <div className="relative  px-6 md:px-10">
        <ul
          id="scrollView"
          ref={scrollRef}
          onScroll={() => {
            const { scrollLeft } = scrollRef.current;
            setScrollPosition(Math.abs(scrollLeft));
          }}
          className="flex items-center space-x-10 scroll-smooth overflow-x-auto no-scrollbar"
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
                  className={`space-y-2 ${
                    index == activeListItem
                      ? "border-palette-hof"
                      : " border-transparent hover:border-palette-deco"
                  } flex border-b-2 flex-col items-center border-palette-hof transition-all duration-150`}
                >
                  {list.icon}
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
            <div className="flex h-full items-center pl-6 pr-8 md:pl-10 ">
              <button
                onClick={() => {
                  scrollRef.current.scrollLeft -= 300;
                }}
                className="h-8 hover:shadow-sm duration-150 transition-all hover:scale-105 w-8 rounded-full grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
              >
                <IoChevronBack />
              </button>
            </div>
          </div>
        )}

        {scrollPosition < scrollViewWidth && (
          <div className="absolute bg-gradient-to-l from-white via-white to-transparent bg-opacity-30 right-0 top-0 bottom-0 ">
            <div className="flex h-full items-center pr-6 pl-8 md:pr-10 ">
              <button
                onClick={() => {
                  scrollRef.current.scrollLeft += 300;
                }}
                className="h-8 hover:shadow-sm duration-150 transition-all hover:scale-105 w-8 rounded-full grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
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
