"use client";

import Link from "next/link";
import { Product } from "../types";

const formatPrice = (p: number) => {
  return p.toLocaleString("en-IN", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 duration-200 overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden bg-gray-100">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" loading="lazy" />
        {/* badge */}
        {product.stock !== undefined && product.stock < 10 && (
          <span className="absolute left-3 top-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full shadow">
            Low stock
          </span>
        )}
        <div className="absolute right-3 top-3 bg-white/80 text-sm px-2 py-1 rounded-full">{product.brand}</div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
            <p className="text-xs text-gray-500 mt-1">{product.category}</p>
          </div>

          <div className="text-right">
            <div className="text-lg font-bold text-indigo-600">{formatPrice(product.price)}</div>
            <div className="text-xs text-gray-500">{product.reviewsCount ?? 0} reviews</div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-3 line-clamp-2">{product.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
          >
            View
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <div className="flex items-center gap-2">
            <div className="text-sm text-yellow-500 font-semibold">{product.rating ?? "—"}</div>
            <div className="text-xs text-gray-500">({product.reviewsCount ?? 0})</div>
          </div>
        </div>
      </div>
    </div>
  );
}
