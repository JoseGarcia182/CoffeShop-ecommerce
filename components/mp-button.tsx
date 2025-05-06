import React, { useEffect } from 'react';

interface CheckoutButtonProps {
  preferenceId: string;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ preferenceId }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js';
    script.setAttribute('data-preference-id', preferenceId);
    document.getElementById('button-checkout')?.appendChild(script);
  }, [preferenceId]);

  return <div id="button-checkout" />;
};

export default CheckoutButton;
