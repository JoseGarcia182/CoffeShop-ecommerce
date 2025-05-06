import IconButton from "@/components/icon-button";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Expand, ShoppingCart } from "lucide-react";
import { ProductType } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";
import ProductTasteOrigin from "@/components/shared/product-taste-origin";
import { useCart } from "@/hooks/use-cart";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { addItem } = useCart();
  const router = useRouter();
  const { product } = props;

  return (
    <div className="relative p-2 m-2 w-fit transition-all duration-100 rounded-lg hover:shadow-md">
      <ProductTasteOrigin product={product} />
      <Carousel opts={{ align: "start" }} className="w-full max-w-sm">
        {product.images.map((image) => (
          <CarouselItem key={image.id} className="group">
            <div
              onClick={() => router.push(`/product/${product.slug}`)}
              className="cursor-pointer"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                alt="Product"
                className="overflow-hidden rounded-md sm:w-auto"
              />
            </div>

            <div className="absolute px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5 left-1/2 transform -translate-x-1/2">
              <div className="flex gap-x-6">
                <IconButton
                  onClick={() => router.push(`/product/${product.slug}`)}
                  icon={<Expand size={20} className="text-gray-600" />}
                />

                <IconButton
                  onClick={() => addItem(product)}
                  icon={<ShoppingCart size={20} className="text-gray-600" />}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </Carousel>
      <p className="text-2xl text-center">{product.productName}</p>
      <p className="font-bold text-center">{formatPrice(product.price)}</p>
    </div>
  );
};

export default ProductCard;
