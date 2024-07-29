import { listings } from "../utils/mock-data";
import Listing from "./Listing";

export default function ListingsBox() {
  return (
    <section id="listing">
      <div className="px-2 xs:px-4 sm:px-6 md:px-10 py-1 sm:py-2 pb-6">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {listings.map((listing, index) => {
            return <Listing key={index} listing={listing} />;
          })}
        </ul>
      </div>
    </section>
  );
}
