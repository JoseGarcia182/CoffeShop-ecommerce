import { ProductType } from "@/types/product";
import { MercadoPagoConfig, Preference } from "mercadopago";
import { describe } from "node:test";

const mercadopago = new MercadoPagoConfig({
  accessToken: "APP_USR-2878602450387403-043009-301271b44e436ec5363d6002fc8f3943-2413009523",
});

const apiPago = {
  async pago(product: ProductType[], totalPrice: number) {

    const itemsArray = product.map((item) => ({
        id: item.slug,
        picture_url: item.images[0].url,
        category_id: item.origin,
        title: item.productName,  
        unit_price: item.price,
        quantity: 1,
        description: item.description,          
      }));

      console.log("Productos enviados a MercadoPago:", itemsArray);

    try {
      const preference = await new Preference(mercadopago).create({
        body: {
          items: itemsArray,         
        },
      });
      

      console.log("Preferencia creada con éxito:", preference); // Imprimir preferencia para ver la respuesta completa

      return preference.init_point!;

    } catch (error: any) {
      // Manejar el error de forma más detallada
      console.error("❌ Error al crear preferencia:", error);
      
      if (error?.response) {
        console.error("Detalles del error desde MercadoPago:", JSON.stringify(error.response, null, 2));
      }

      throw new Error(
        error?.message || "Error desconocido al crear la preferencia de pago"
      );
    }
  },
};

export default apiPago;
