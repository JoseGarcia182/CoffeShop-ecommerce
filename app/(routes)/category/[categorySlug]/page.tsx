'use client';

import { UseGetCategoryProduct } from "@/api/getCategoyProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import FiltersControlCategory from "./components/filters-control-category";
import SkeletonSchema from "@/components/skeleton-scheme";
import ProductCard from "./components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const categorySlug = typeof params?.categorySlug === 'string' ? params.categorySlug : '';
  const { result, loading, error }: ResponseType = UseGetCategoryProduct(categorySlug);
 

  const [filterOrigin, setFilterOrigin] = useState('')

  const filteredProducts = result != null && !loading &&(
    filterOrigin === "" 
    ? result 
    : result.filter((product: ProductType) => product.origin  === filterOrigin)
  ) 
 

  return (
    
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && (
          <h1 className="text-3xl font-medium">Café {result[0].category.categoryName}</h1>
      )}
    <Separator/>
    
    <div className="sm:flex sm:justify-between w-full">
        <FiltersControlCategory setFiltersOrigin={setFilterOrigin} />
        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
        {loading && (
            <SkeletonSchema grid={3}/>
        )}

        {filteredProducts !== null && !loading && (
          filteredProducts.map((product: ProductType)=>(
            <ProductCard key={product.id} product={product} />
          ))
        )}

        {filteredProducts !== null && !loading && filteredProducts.length === 0 && (
          <p>No hay productos para este filtro</p>
        )}
        </div>

    </div>
    </div>
    
    
  );
}
