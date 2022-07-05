/** @jsx h */
import { h } from 'preact';
import { Handlers, PageProps } from 'https://deno.land/x/fresh@1.0.1/server.ts';
import { getRestaurant } from '../../utils/api.ts';
import { RestaurantType } from '../../types.d.ts';
import Product from '../../islands/Product.tsx';
import { tw } from '../../utils/twind.ts';
import Header from '../../islands/Header.tsx';

interface Props {
  restaurant: RestaurantType;
}

export const handler: Handlers<Props> = {
  GET: async (req, ctx) => {
    const { name } = ctx.params;
    const restaurant = await getRestaurant(name);
    if (restaurant) {
      return ctx.render({ restaurant });
    }
    return new Response('Failed to find restaurant!');
  },
};

export default function RestaurantPage({ params, data }: PageProps<Props>) {
  const { restaurant } = data;
  const { name } = params;
  return (
    <div class={tw`max-w-screen-lg mx-auto`}>
      <Header query={name} />
      <ul class={tw``}>
        {restaurant.products.map((product) => (
          <Product query={name} product={product}></Product>
        ))}
      </ul>
    </div>
  );
}
