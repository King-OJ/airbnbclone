"use client";
import Image from "next/image";
import { IoChevronBack, IoChevronForward, IoStarSharp } from "react-icons/io5";
import Link from "next/link";
import type { ListingType } from "../utils/mock-data";
import { useEffect, useRef, useState } from "react";

import { LuHeart } from "react-icons/lu";

interface ListingProps {
  listing: ListingType;
}

export default function Listing({ listing }: ListingProps) {
  const {
    listingImages,
    listingCity,
    listingState,
    listingCountry,
    rating,
    amountPerNight,
    viewsCount,
    rentalDate,
  } = listing;

  const formatPrice = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  let imgScrollRef: any = useRef(null);
  let imgRef: any = useRef(null);

  const [imgScrollPosition, setImgScrollPosition] = useState(0);
  const [imgScrollEnd, setImgScrollEnd] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  let observer = null;
  if (typeof window !== "undefined") {
    observer = new IntersectionObserver(
      (entries) => {
        // find the entry with the largest intersection ratio
        entries.forEach((entry, index) => {
          if (entry.intersectionRatio > 0) {
            setActiveSlide(index);
          }
        });
      },
      {
        root: imgScrollRef.current,
        threshold: 0.5,
      }
    );
  }

  useEffect(() => {
    if (imgScrollRef.current !== null) {
      imgScrollRef = imgScrollRef;
      const { scrollWidth, clientWidth } = imgScrollRef.current;
      setImgScrollEnd(scrollWidth - clientWidth);
    }
  }, []);

  return (
    <li className="space-y-1 lg:space-y-2 group">
      <Link href="/" className="block w-full space-y-2">
        <div className="relative w-full h-[320px] xs:h-[290px] sm:h-[320px] md:h-[280px] lg:h-[260px] overflow-hidden rounded-md sm:rounded-xl">
          <div
            ref={imgScrollRef}
            className={`w-full h-full ${
              listing.listingImages.length > 1 &&
              "overflow-x-scroll overflow-y-hidden snap-x flex items-center snap-mandatory scroll-smooth no-scrollbar"
            }`}
            onScroll={() => {
              const { scrollLeft } = imgScrollRef.current;
              setImgScrollPosition(scrollLeft);

              Array.from(imgScrollRef.current.children).forEach(
                (element: any) => {
                  observer?.observe(element);
                }
              );
            }}
          >
            {listing.listingImages.map((img, index) => {
              return (
                <div
                  ref={imgRef}
                  key={index}
                  className="relative w-full h-full shrink-0 snap-start"
                >
                  <Image
                    alt="house"
                    src={img}
                    sizes="100vw"
                    width="0"
                    height="0"
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          {listing.listingImages.length > 1 && (
            <>
              <div className="absolute left-0 top-[45%] flex items-center justify-between pl-2">
                {imgScrollPosition !== 0 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      imgScrollRef.current.scrollLeft -=
                        imgScrollRef.current.clientWidth;
                    }}
                    className="hidden md:h-8 h-6 w-6 md:w-8 hover:shadow-sm duration-150 transition-all hover:scale-105 rounded-full group-hover:grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
                  >
                    <IoChevronBack />
                  </button>
                )}
              </div>
              <div className="absolute right-0 top-[45%] flex items-center justify-between pr-2">
                {imgScrollPosition < imgScrollEnd && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      imgScrollRef.current.scrollLeft +=
                        imgScrollRef.current.clientWidth;
                    }}
                    className="hidden md:h-8 h-6 w-6 md:w-8 hover:shadow-sm duration-150 transition-all hover:scale-105 rounded-full group-hover:grid place-content-center text-palette-hof border-[0.8px] bg-white border-palette-bobo"
                  >
                    <IoChevronForward />
                  </button>
                )}
              </div>

              <div className="absolute left-0 right-0 bottom-2">
                <div className="w-full flex items-center justify-center space-x-1">
                  {listingImages.map((_, index) => {
                    return (
                      <span
                        key={index}
                        className={`block  rounded-full transition-all duration-200 ${
                          index == activeSlide
                            ? "bg-white w-[7px] h-[7px]"
                            : "bg-palette-deco w-[6px] h-[6px]"
                        }`}
                      ></span>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          <div className="absolute top-0 w-full">
            <div className="grid grid-flow-col pt-2 justify-items-stretch px-2">
              <div className="justify-self-start">
                <button className="text-xs md:text-sm shadow-md text-palette-hof font-medium rounded-full px-2 md:px-3 py-[3px] md:py-1 bg-palette-faint">
                  Guest favourite
                </button>
              </div>
              <div className="justify-self-end">
                <button className="text-xl md:text-2xl">
                  <LuHeart className="hover:scale-105 transition stroke-[1px] fill-heart-fill-color duration-150 stroke-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[12px] md:text-[13px] lg:text-[15px]">
          <div className="flex items-center text-palette-hof justify-between">
            <h6 className="font-medium">
              {listingCity && (
                <span className="capitalize">{listingCity},</span>
              )}
              {listingState && (
                <span className="capitalize">{` ${listingState},`}</span>
              )}
              <span className="capitalize">{` ${listingCountry}`}</span>
            </h6>

            <div className="flex items-center space-x-[2px] font-light text-[11px] md:text-[14px]">
              <IoStarSharp size={14} />

              <span>{rating.toFixed(2).toLocaleString()}</span>
            </div>
          </div>

          <div className="text-[12px] md:text-[13px] lg:text-[14px] mt-[2px] lg:mt-1 font-light leading-5">
            <p>Viewed {viewsCount} times last week</p>
            <p>{rentalDate}</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center text-palette-hof text-[12px] md:text-[13px] lg:text-[14px]">
        <span className="font-medium">{formatPrice(amountPerNight)}</span>
        <span className="font-normal ml-1">night</span>
      </div>
    </li>
  );
}
