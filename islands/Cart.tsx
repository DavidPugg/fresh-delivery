/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { CartType } from '../types.d.ts';

export default function Cart() {
  const [cart, setCart] = useState<CartType | null>(null);

  useEffect(() => {
    updateItems();
  }, []);

  const updateItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart') as string);
    setCart(cart);
  };

  return (
    <div>
      <h1>Cart</h1>
      {cart?.products !== null &&
        cart?.products.map((item) => (
          <div>
            {item.product.name} - {item.qty}
          </div>
        ))}
    </div>
  );
}
