import { listings } from "../utils/mock-data";
import Listing from "./Listing";

export default function ListingsBox() {
  return (
    <section id="listing">
      <div className="px-2 md:px-6 lg:px-8">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {listings.map((listing, index) => {
            return <Listing key={index} listing={listing} />;
          })}
        </ul>
      </div>
    </section>
  );
}
