"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Product } from "@/types";
import { queryProductById } from "@/lib/mockGraphql";

export default function ProductDetailsPage() {
  const { user } = useAuth();
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (user === null) router.push("/login");
  }, [user, router]);

  useEffect(() => {
    if (id) {
      queryProductById(id).then(setProduct);
    }
  }, [id]);

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <div className="bg-white rounded-2xl overflow-hidden shadow">
        <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-sm text-gray-500">
          {product.brand} • {product.category}
        </p>

        <div className="flex items-center gap-4 mt-3">
          <div className="text-2xl font-extrabold text-indigo-600">${product.price}</div>
          <div className="text-sm text-gray-600">{product.reviewsCount} reviews</div>
          <div className="text-sm text-yellow-500 font-semibold">{product.rating ?? "—"} ★</div>
        </div>

        <p className="mt-4 text-gray-700">{product.description}</p>

        {product.features?.length ? (
          <ul className="mt-4 space-y-2">
            {product.features.map((f, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mt-2"></span>
                {f}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-6 flex gap-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">Add to cart</button>
          <button className="px-4 py-2 border rounded-lg">Add to wishlist</button>
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <div>
            In stock: <strong className="text-gray-800">{product.stock ?? 0}</strong>
          </div>
          <div className="mt-1">Colors: {product.color?.length ? product.color.join(", ") : "N/A"}</div>
        </div>
      </div>
    </div>
  );
}
