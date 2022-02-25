const itemData: { img: string; title: string }[] = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    title: "Bed",
  },
  {
    img: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    title: "Books",
  },
  {
    img: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6",
    title: "Sink",
  },
  {
    img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    title: "Kitchen",
  },
  {
    img: "https://images.unsplash.com/photo-1588436706487-9d55d73a39e3",
    title: "Blinds",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    title: "Chairs",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    title: "Laptop",
  },
  {
    img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    title: "Doors",
  },
  {
    img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
    title: "Coffee",
  },
  {
    img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
    title: "Storage",
  },
  {
    img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
    title: "Candle",
  },
  {
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    title: "Coffee table",
  },
];

const ratingData: { rating: number; name: string; description: string }[] = [
  {
    rating: 4,
    name: "Edward Thomas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    rating: 3.5,
    name: "Dwayne Furgison",
    description:
      "Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    rating: 4.5,
    name: "Steve Stewart",
    description:
      "Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    rating: 3,
    name: "Jess Singer",
    description:
      "Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const availPropData = [
  {
    img: "https://images.unsplash.com/photo-1549388604-817d15aa0110",
    amentities: [
      { primary: "In-Unit Washer/Dryer" },
      { primary: "Patio" },
      { primary: "Bike Racks" },
      { primary: "Covered Parking" },
      { primary: "Close to Campus" },
      { primary: "Outdoor Area" },
      { primary: "Private Outdoor Area" },
      { primary: "Air-Conditioning" },
      { primary: "Heat" },
      { primary: "Laundry Facility" },
      { primary: "Utilities Included" },
    ],
    title: "The Demo Home",
    address: "1234 W 12th Street, Greeley, Co",
    availability: "unavailable",
  },
  {
    img: "https://images.unsplash.com/photo-1574180045827-681f8a1a9622",
    amentities: [
      { primary: "In-Unit Washer/Dryer" },
      { primary: "Patio" },
      { primary: "Bike Racks" },
      { primary: "Covered Parking" },
      { primary: "Close to Campus" },
      { primary: "Outdoor Area" },
      { primary: "Private Outdoor Area" },
      { primary: "Air-Conditioning" },
      { primary: "Heat" },
      { primary: "Laundry Facility" },
      { primary: "Utilities Included" },
    ],
    title: "The Second Demo Home",
    address: "1234 W 12th Street, Greeley, Co",
    availability: "available",
  },
  {
    img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
    amentities: [
      { primary: "In-Unit Washer/Dryer" },
      { primary: "Patio" },
      { primary: "Bike Racks" },
      { primary: "Covered Parking" },
      { primary: "Close to Campus" },
      { primary: "Outdoor Area" },
      { primary: "Private Outdoor Area" },
      { primary: "Air-Conditioning" },
      { primary: "Heat" },
      { primary: "Laundry Facility" },
      { primary: "Utilities Included" },
    ],
    title: "The Third Demo Home",
    address: "1234 W 12th Street, Greeley, Co",
    availability: "undetermined",
  },
];

export { availPropData, itemData, ratingData };
