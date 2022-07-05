/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from 'https://deno.land/x/fresh@1.0.1/server.ts';
import Cart from '../islands/Cart.tsx';

export default function CartPage({}: PageProps) {
  return <Cart />;
}
