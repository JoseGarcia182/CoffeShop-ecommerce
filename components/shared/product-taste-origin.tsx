import { ProductType } from "@/types/product";

interface ProductProps{
    product: ProductType
}

const ProductTasteOrigin = (props: ProductProps) => {

    const {  product } = props;

    return ( 
        <div className="flex items-center justify-between gap-3">
        <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-gray-500 dark:text-black w-fit">{product.taste}</p>
        <p className="px-2 py-1 text-xs text-white bg-yellow-900 rounded-full w-fit">{product.origin}</p>
        </div>
     );
}
 
export default ProductTasteOrigin;