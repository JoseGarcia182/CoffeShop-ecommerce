'use client'

import { ProductType } from "@/types/product";
import { useRouter } from "next/navigation";



interface ProductImageProps{
    product: ProductType
}

const ProductImage = (props: ProductImageProps) => {
    
    const {product}  = props;
    const router = useRouter();

    return ( 
        <div onClick={()=> router.push(`/product/${product.slug}`)} className="cursor-pointer">
                <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                     alt="Product"
                     className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"/>
            </div>
     );
}
 
export default ProductImage;