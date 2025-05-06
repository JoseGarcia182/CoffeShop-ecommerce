"use client";

import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { Button } from "@/components/ui/button";
import { pagarAction } from "@/app/actions/pagar";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);

  const searchParams = useSearchParams();
  const [paymentStatus, setPaymentStatus] = useState<null | "success" | "failure">(null);

  const handlePago = async () => {
    try {
      const url = await pagarAction(items, totalPrice); 
      window.location.href = url; 
    } catch (error) {
      console.error("Error al iniciar pago:", error);
    }
  };

  useEffect(() => {
    const status = searchParams.get("status") as "success" | "failure" | null;
    if (status) setPaymentStatus(status);
  }, [searchParams]);






  return (
    <div className="mas-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">

    {paymentStatus === "success" && (
        <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-xl">
          ✅ ¡Gracias por tu compra! El pago fue aprobado.
        </div>
      )}

      {paymentStatus === "failure" && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-xl">
          ❌ El pago fue rechazado o cancelado. Intentalo nuevamente.
        </div>
      )}


      <h1 className="mb-5 text-3xl font-bold">ShoppingCart</h1>
      <div className="grid sm:grid-cols-2 sm:gap-5">
        <div>
          {items.length === 0 && <p>No hay productos en el carrito</p>}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>

        <div className="max-w-xl">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-3 text-lg font-bold">order sumary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>order total</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>

            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full" onClick={handlePago}>
                Comprar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
