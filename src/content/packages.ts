export type PackagePrice = {
  vehicle: string;
  price: string;
};

export type DetailingPackage = {
  id: string;
  name: string;
  startingPrice?: string;
  prices?: PackagePrice[];
  exterior: string[];
  interior: string[];
  featured?: boolean;
};

export const detailingPackages: DetailingPackage[] = [
  {
    id: "standard",
    name: "Standard Package",
    startingPrice: "$100",
    exterior: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
    ],
    interior: [
      "Vacuum",
      "Clean all windows",
      "Wipe and treat all vinyl",
    ],
  },

  {
    id: "premium",
    name: "Premium Package",
    featured: true,
    prices: [
      {
        vehicle: "Sedan",
        price: "$175",
      },
      {
        vehicle: "Small SUV",
        price: "$200",
      },
      {
        vehicle: "Large SUV",
        price: "$250",
      },
    ],
    exterior: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
      "Spray wax",
    ],
    interior: [
      "Vacuum",
      "Clean all windows",
      "Scrub and treat all vinyl and leather seats",
    ],
  },

  {
    id: "elite",
    name: "Elite Package",
    prices: [
      {
        vehicle: "Sedan",
        price: "$275",
      },
      {
        vehicle: "Small SUV",
        price: "$300",
      },
      {
        vehicle: "Large SUV",
        price: "$350",
      },
    ],
    exterior: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
      "Full-body clay bar",
      "Machine-applied deep wax",
    ],
    interior: [
      "Vacuum",
      "Clean all windows",
      "Scrub and treat all vinyl and leather seats",
    ],
  },
];
