"use server";

import apiPago from "@/api/checkout";
import { ProductType } from "@/types/product";

export async function pagarAction(items: ProductType[], totalPrice: number) {
  const url = await apiPago.pago(items, totalPrice);
  return url; // no uses redirect aquí
}
