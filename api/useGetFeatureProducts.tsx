"use client"

import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, result, error };
}
