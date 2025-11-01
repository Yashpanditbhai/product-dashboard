export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description?: string;
  image?: string;
  rating?: number;       // 0-5
  reviewsCount?: number;
  stock?: number;
  brand?: string;
  features?: string[];   // short bullet list
  color?: string[];
};
