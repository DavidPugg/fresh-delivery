/** @jsx h */
import { useEffect } from 'preact/hooks';
import { h } from 'preact';

import { CartType, ProductType, StorageItem } from '../types.d.ts';
import { tw } from '../utils/twind.ts';

interface Props {
  product: ProductType;
  query: string;
}

export default function Product({ product, query }: Props) {
  const addItemToCart = () => {
    let item = { product, qty: 1 } as StorageItem;
    const cart = JSON.parse(localStorage.getItem('cart') as string);

    if (cart && cart.restaurant === query) {
      const foundItem = cart.products.find(
        (e: StorageItem) => e.product.id === product.id
      );
      if (foundItem) {
        item = { ...foundItem, qty: foundItem.qty + 1 };
        const index = cart.products
          .map((e: StorageItem) => e.product.id)
          .indexOf(product.id);
        cart.products.splice(index, 1, item);
        updateCart({ ...cart });
      } else {
        updateCart({ ...cart, products: [...cart.products, item] });
      }
    } else {
      updateCart({ restaurant: query, products: [item] });
    }
    const event = new Event('localstorage');
    self.dispatchEvent(event);
  };

  const updateCart = (cartItem: CartType) => {
    localStorage.setItem('cart', JSON.stringify(cartItem));
  };

  return (
    <li class={tw`bg-blue-200 px-5 py-3 flex justify-between`} key={product.id}>
      {product.name}
      <span
        class={tw`bg-green-400 px-2 flex align-center justify-center cursor-pointer`}
        onClick={addItemToCart}
      >
        ADD
      </span>
    </li>
  );
}
