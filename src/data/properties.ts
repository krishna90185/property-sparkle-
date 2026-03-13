export type Property = {
  id: number;
  name: string;
  location: string;
  value: string;
  growth: string;
  image: string;
  status: string;
  description?: string;
};

export const initialProperties: Property[] = [
  {
    id: 1,
    name: "2BHK Apartment",
    location: "Andheri West, Mumbai",
    value: "₹85L",
    growth: "+12%",
    image: "🏠",
    status: "Active",
    description: "A well-maintained 2 bedroom flat with balcony and good sunlight.",
  },
  {
    id: 2,
    name: "3BHK Flat",
    location: "Whitefield, Bangalore",
    value: "₹1.2Cr",
    growth: "+8%",
    image: "🏡",
    status: "Active",
    description: "Spacious 3BHK with a garden view and excellent connectivity.",
  },
];
