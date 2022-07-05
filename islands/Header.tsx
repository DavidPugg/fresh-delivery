/** @jsx h */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

interface Props {
  query: string;
}

export default function Header({ query }: Props) {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') as string);
    if (cart && query !== cart.restaurant) {
      localStorage.removeItem('cart');
    }

    updateItems();

    self.addEventListener('localstorage', () => {
      updateItems();
    });
    return () => {
      self.removeEventListener('localstorage', () => {
        updateItems();
      });
    };
  }, []);

  const updateItems = () => {
    const cart = JSON.parse(localStorage.getItem('cart') as string);
    setItemCount(cart ? cart.products.length : 0);
  };

  return (
    <div>
      <a href='/cart'>Cart</a>
      <p>{itemCount}</p>
    </div>
  );
}
