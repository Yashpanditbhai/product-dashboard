"use client";
import React from "react";

type Props = {
  category: string;
  setCategory: (c: string) => void;
  maxPrice: number | "";
  setMaxPrice: (p: number | "") => void;
  search: string;
  setSearch: (s: string) => void;
  sort: string;
  setSort: (s: string) => void;
  categories: string[]; // dynamic categories from data
  minPrice?: number;
  maxPriceLimit?: number;
};

export default function Filter({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  search,
  setSearch,
  sort,
  setSort,
  categories,
  minPrice = 0,
  maxPriceLimit = 2000
}: Props) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products by name..."
          className="flex-1 p-2 border rounded-md"
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded-md">
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <div className="flex items-center gap-2">
          <input
            type="range"
            min={minPrice}
            max={maxPriceLimit}
            value={maxPrice === "" ? maxPriceLimit : maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-48"
          />
          <input
            type="number"
            value={maxPrice === "" ? "" : String(maxPrice)}
            onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : "")}
            placeholder="Max price"
            className="w-28 p-2 border rounded-md"
          />
        </div>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 border rounded-md">
          <option value="">Sort</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    </div>
  );
}
