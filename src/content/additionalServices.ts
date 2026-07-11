export type AdditionalService = {
  id: string;
  name: string;
  description: string;
  priceLines: string[];
  icon: string;
  featured?: boolean;
};

export const additionalServices: AdditionalService[] = [
  {
    id: "seat-shampoo",
    name: "Full Seat Shampoo",
    description:
      "Deep cleaning for cloth seating to help remove dirt, buildup, and odors.",
    priceLines: [
      "$150 — 2 rows",
      "$175 — 3 rows",
    ],
    icon: "seat",
  },
  {
    id: "floor-shampoo",
    name: "Full Floor Shampoo",
    description:
      "Deep cleaning for vehicle flooring and mats.",
    priceLines: [
      "$150 — 2 rows",
      "$175 — 3 rows",
    ],
    icon: "floor",
  },
  {
    id: "ceramic-coating",
    name: "Ceramic Coating Application",
    description:
      "Protective ceramic coating application with clay bar preparation included.",
    priceLines: [
      "Starting at $250",
    ],
    icon: "shield",
    featured: true,
  },
  {
    id: "headlight-restoration",
    name: "Headlight Restoration",
    description:
      "Restore clarity and improve the appearance of faded or cloudy headlights.",
    priceLines: [
      "$100",
    ],
    icon: "headlight",
  },
  {
    id: "motorcycle-detailing",
    name: "Motorcycle Detailing",
    description:
      "Detail-focused cleaning for motorcycles, including painted surfaces, wheels, chrome, and hard-to-reach areas.",
    priceLines: [
      "Contact for pricing",
    ],
    icon: "motorcycle",
  },
  {
    id: "oil-change",
    name: "Oil Change Service",
    description:
      "Convenient oil change service available alongside select detailing appointments.",
    priceLines: [
      "Contact for pricing",
    ],
    icon: "oil",
  },
];
