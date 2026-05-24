const product = {
  id: "mango-studio-alphonso",
  name: "Mango Studio Alphonso",
  tagline: "Pure. Raw. Unfiltered.",
  description:
    "Cold pressed Alphonso mango juice from Ratnagiri farms. HPP treated, never heated, zero additives.",
  badges: ["Cold Pressed", "HPP Treated", "No Added Sugar", "Farm Direct"],
  sizes: [
    { id: "300ml", label: "300ml", price: 120, originalPrice: 150 },
    { id: "500ml", label: "500ml", price: 180, originalPrice: 220 },
    { id: "1L", label: "1 Litre", price: 320, originalPrice: 400 },
  ],
  packs: [
    { id: "single", label: "Single Bottle", multiplier: 1, badge: null },
    { id: "pack6", label: "Pack of 6", multiplier: 6, badge: "Save 10%" },
    { id: "pack12", label: "Pack of 12", multiplier: 12, badge: "Save 15%" },
  ],
  rating: 4.8,
  reviewCount: 2847,
  imagePath: "/images/mango/final-frame.jpg",
};

export default product;
