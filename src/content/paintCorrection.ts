export type PaintCorrectionPrice = {
  vehicle: string;
  price: string;
};

export type PaintCorrectionPackage = {
  id: string;
  name: string;
  description: string;
  prices: PaintCorrectionPrice[];
  features: string[];
  featured?: boolean;
};

export const paintCorrectionPackages: PaintCorrectionPackage[] = [
  {
    id: "paint-correction-basic",
    name: "Basic P.C.P. Package",
    description:
      "One-step paint correction designed to improve gloss and reduce minor swirl marks.",
    prices: [
      {
        vehicle: "Sedan",
        price: "$550",
      },
      {
        vehicle: "Small SUV",
        price: "$650",
      },
      {
        vehicle: "Large SUV",
        price: "$750",
      },
    ],
    features: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
      "Full-body clay bar",
      "One-step paint correction for minor swirl marks",
      "Ceramic coat protection",
    ],
  },

  {
    id: "paint-correction-plus",
    name: "Plus P.C.P. Package",
    description:
      "Two-step paint correction for vehicles needing a deeper level of paint enhancement.",
    prices: [
      {
        vehicle: "Sedan",
        price: "$675",
      },
      {
        vehicle: "Small SUV",
        price: "$775",
      },
      {
        vehicle: "Large SUV",
        price: "$875",
      },
    ],
    features: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
      "Full-body clay bar",
      "Two-step paint correction",
      "Ceramic coat protection",
    ],
    featured: true,
  },
];
