"use client";

import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/context/AuthContext";
import { queryProducts } from "@/lib/mockGraphql";
import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ProductsPage() {
  const { loading, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-lg text-gray-600">Checking authentication...</div>
    );
  }

  if (!user) return null; // Prevent flicker

  const [items, setItems] = useState<Product[]>([]);
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    queryProducts().then(setItems);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(items.map((p) => p.category)));
    return cats;
  }, [items]);

  const maxPriceLimit = useMemo(() => {
    return items.length ? Math.max(...items.map((p) => p.price)) : 2000;
  }, [items]);

  const filtered = useMemo(() => {
    let list = items.slice();

    if (category) list = list.filter((p) => p.category === category);
    if (maxPrice !== "") list = list.filter((p) => p.price <= Number(maxPrice));
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));

    if (sort === "asc") list = list.sort((a, b) => a.price - b.price);
    else if (sort === "desc") list = list.sort((a, b) => b.price - a.price);
    else if (sort === "rating") list = list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return list;
  }, [items, category, maxPrice, search, sort]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Products</h1>

      <Filter
        category={category}
        setCategory={setCategory}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        categories={categories}
        minPrice={0}
        maxPriceLimit={maxPriceLimit}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && <p className="mt-8 text-center text-gray-500">No products found for your filters.</p>}
    </div>
  );
}
