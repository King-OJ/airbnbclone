interface Listing {
  listingCountry: string;
  listingState?: string;
  listingCity?: string;
  listingImages: Array<string>;
  rating: number;
  rentalDate: string;
  amountPerNight: number;
  viewsCount: number;
}

export type { Listing as ListingType };

export const listings: Array<Listing> = [
  {
    listingCity: "seserit",
    listingCountry: "indonesia",
    listingImages: [
      "/assets/houseImg-unsplash.jpg",
      "/assets/houseImg3-unsplash.jpg",
      "/assets/houseImg2-unsplash.jpg",
      "/assets/houseImg1-unsplash.jpg",
    ],
    rating: 4.85,
    rentalDate: "Nov 23 - 28",
    amountPerNight: 136,
    viewsCount: 1357,
  },
  {
    listingCity: "llaes",
    listingCountry: "spain",
    listingImages: ["/assets/houseImg1-unsplash.jpg"],
    rating: 4.99,
    rentalDate: "Dec 15 - 20",
    amountPerNight: 754,
    viewsCount: 3343,
  },
  {
    listingCity: "trenton",
    listingState: "georgia",
    listingCountry: "US",
    listingImages: [
      "/assets/houseImg2-unsplash.jpg",
      "/assets/houseImg5-unsplash.jpg",
      "/assets/houseImg4-unsplash.jpg",
    ],
    rating: 4.97,
    rentalDate: "Aug 6 - 7",
    amountPerNight: 415,
    viewsCount: 2964,
  },
  {
    listingState: "north side",
    listingCountry: "caymen island",
    listingImages: ["/assets/houseImg3-unsplash.jpg"],
    rating: 5.0,
    rentalDate: "Aug 30 - Sept 4",
    amountPerNight: 412,
    viewsCount: 1626,
  },
  {
    listingCity: "seserit",
    listingCountry: "indonesia",
    listingImages: [
      "/assets/houseImg5-unsplash.jpg",
      "/assets/houseImg4-unsplash.jpg",
    ],
    rating: 4.85,
    rentalDate: "Nov 23 - 28",
    amountPerNight: 136,
    viewsCount: 1357,
  },
  {
    listingCity: "llaes",
    listingCountry: "spain",
    listingImages: ["/assets/houseImg4-unsplash.jpg"],
    rating: 4.99,
    rentalDate: "Dec 15 - 20",
    amountPerNight: 754,
    viewsCount: 3343,
  },
  {
    listingCity: "trenton",
    listingState: "georgia",
    listingCountry: "US",
    listingImages: ["/assets/houseImg2-unsplash.jpg"],
    rating: 4.97,
    rentalDate: "Aug 6 - 7",
    amountPerNight: 415,
    viewsCount: 2964,
  },
  {
    listingState: "north side",
    listingCountry: "caymen island",
    listingImages: ["/assets/houseImg1-unsplash.jpg"],
    rating: 5.0,
    rentalDate: "Aug 30 - Sept 4",
    amountPerNight: 412,
    viewsCount: 1626,
  },
];
