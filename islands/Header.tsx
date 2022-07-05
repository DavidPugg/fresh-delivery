/** @jsx h */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { tw } from '../utils/twind.ts';

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
    <div class={tw`fixed top-0 w-full bg-blue-600 p-6 flex justify-end`}>
      <a class={tw`bg-white rounded py-1 px-2 relative`} href='/cart'>
        Cart
        <span
          class={tw`absolute -bottom-2 -right-2 bg-red-600 py-0.5 px-1 text-white rounded-lg leading-none`}
        >
          {itemCount}
        </span>
      </a>
    </div>
  );
}
