import { Product } from "@/types";
import { products } from "./data";

export const queryProducts = async (): Promise<Product[]> => {
  // simulate async/GraphQL
  return new Promise((res) => setTimeout(() => res(products), 150));
};

export const queryProductById = async (id: string): Promise<Product | undefined> => {
  return new Promise((res) => setTimeout(() => res(products.find((p) => p.id === id)), 120));
};
