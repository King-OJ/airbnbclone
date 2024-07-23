import Image from "next/image";
import { IoStarSharp } from "react-icons/io5";
import Link from "next/link";
import type { ListingType } from "../utils/mock-data";

interface ListingProps {
  listing: ListingType;
}

export default function Listing({ listing }: ListingProps) {
  const formatPrice = (value: number) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <li className="space-y-2">
      <Link href="/" className="block w-full space-y-2">
        <div className="w-full h-[400px] sm:h-64 overflow-hidden rounded-lg">
          {listing.listingImages.map((img, index) => {
            return (
              <Image
                key={index}
                alt="house"
                src={img}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            );
          })}
        </div>

        <div className="text-[15px]">
          <div className="flex items-center text-palette-hof justify-between">
            <h6 className="font-medium">
              {listing.listingCity && (
                <span className="capitalize">{listing.listingCity},</span>
              )}
              {listing.listingState && (
                <span className="capitalize">
                  {` ${listing.listingState},`}
                </span>
              )}
              <span className="capitalize">{` ${listing.listingCountry}`}</span>
            </h6>

            <div className="flex items-center space-x-[2px] font-light text-[14px]">
              <IoStarSharp size={14} />

              <span>{listing.rating.toFixed(2).toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-1 font-light leading-5">
            <p>Viewed {listing.viewsCount} times last week</p>
            <p>{listing.rentalDate}</p>
          </div>
        </div>
      </Link>

      <div className="flex items-center text-palette-hof text-[14px]">
        <span className="font-medium">
          {formatPrice(listing.amountPerNight)}
        </span>
        <span className="font-normal ml-1">night</span>
      </div>
    </li>
  );
}
