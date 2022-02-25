type JSON = {
  [key: string]: string;
};

type Amenities = {
  primary: string;
  secondary?: string;
};

type AvailablePropertyCardDataType = {
  img: string;
  amentities: Amenities[];
  title: string;
  address?: string;
  availability: "available" | "undetermined" | "unavailable";
};

type AvailablePropertyCardType = {
  isMobile: boolean;
  data: AvailablePropertyCardDataType;
};

export type {
  Amenities,
  AvailablePropertyCardDataType,
  AvailablePropertyCardType,
  JSON,
};
