"use client";

import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { Menulist } from "./menu-list";
import MenuMobile from "./menu-mobile";
import { ToggleTheme } from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const {lovedItems} = useLovedProducts();

  return (
    <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl ">
      <h1 className="text-3xl" onClick={() => router.push("/")}>
        Coffe
        <span className="font-bold">Shop</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <Menulist />
      </div>
      <div className="flex sm:hidden">
        <MenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-7">
        
        {cart.items.length === 0 ? (
          <ShoppingCart
            strokeWidth="1"
            className="cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        ) : (
          <div className="flex gap-1" >
            <BaggageClaim 
            strokeWidth={1} 
            className="cursor-point" 
            onClick={() => router.push("/cart")} />
            <span>{cart.items.length}</span>
          </div>
        )}

        <Heart
          strokeWidth="1"
          className={`cursor-pointer ${lovedItems.length > 0 && 'fill-red-500'}`}
          onClick={() => router.push("/loved-products")}
        />
        <User
          strokeWidth="1"
          className="cursor-pointer"
          onClick={() => router.push("/user")}
        />
        <ToggleTheme />
      </div>
    </div>
  );
};

export default Navbar;
