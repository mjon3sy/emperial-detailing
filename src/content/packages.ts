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
    name: "Essential Package",
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
    name: "Premier Package",
    featured: true,
    prices: [
      {
        vehicle: "Sedan",
        price: "$160",
      },
      {
        vehicle: "Small SUV",
        price: "$200",
      },
      {
        vehicle: "Large SUV/Truck",
        price: "$240",
      },
    ],
    exterior: [
      "Hand wash and dry",
      "Door jambs and rims",
      "Tire shine",
      "Wheel & tire clean",
      "Spray wax",
    ],
    interior: [
      "Vacuum",
      "Clean all windows",
      "Interior wipe down",
      "Scrub and treat all vinyl and leather seats",
    ],
  },

  {
    id: "elite",
    name: "Signature Package",
    prices: [
      {
        vehicle: "Sedan",
        price: "$260",
      },
      {
        vehicle: "Small SUV",
        price: "$310",
      },
      {
        vehicle: "Large SUV/Truck",
        price: "$360",
      },
    ],
    exterior: [
      "Hand wash and dry",
      "Wheel & tire clean",
      "Door jambs and rims",
      "Tire shine",
      "Sealant wax",
    ],
    interior: [
      "Vacuum",
      "Interior wip down",
      "Clean all windows",
      "Scrub and treat all vinyl and leather seats",
    ],
  },
];
