import type { Service } from "../types/service";

export const services: Service[] = [
  {
    id: "exterior-wash",
    title: "Exterior Wash",
    shortDescription:
      "A quality hand wash designed to remove dirt, grime, and buildup from your vehicle’s exterior.",
    longDescription:
      "Our exterior wash service helps keep your vehicle clean, sharp, and protected from everyday road grime.",
    icon: "sparkles",
    image: "",
    featured: true,
    order: 1,
    link: "/#contact",
  },
  {
    id: "interior-cleaning",
    title: "Interior Cleaning",
    shortDescription:
      "Vacuuming, wipe-downs, and detail-focused interior cleaning for a fresher ride.",
    longDescription:
      "Interior cleaning helps refresh the inside of your vehicle with attention to the areas you use every day.",
    icon: "car",
    image: "",
    featured: true,
    order: 2,
    link: "/#contact",
  },
  {
    id: "full-detail",
    title: "Full Detail",
    shortDescription:
      "A complete inside-and-out cleaning service for vehicles that need extra attention.",
    longDescription:
      "Our full detail service is designed for customers who want a deeper clean across both the interior and exterior.",
    icon: "shield",
    image: "",
    featured: true,
    order: 3,
    link: "/#contact",
  },
  {
    id: "maintenance-wash-plans",
    title: "Maintenance Wash Plans",
    shortDescription:
      "Recurring wash options to help keep your vehicle consistently clean.",
    longDescription:
      "Maintenance wash plans are ideal for customers who want their vehicle cleaned regularly without scheduling from scratch every time.",
    icon: "repeat",
    image: "",
    featured: true,
    order: 4,
    link: "/#contact",
  },
];
