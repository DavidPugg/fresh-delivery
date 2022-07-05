/** @jsx h */
import { h } from 'preact';
import { tw } from '@twind';
import { Handlers, PageProps } from 'https://deno.land/x/fresh@1.0.1/server.ts';
import { RestaurantType } from '../types.d.ts';
import { getRestaurants } from '../utils/api.ts';

interface Props {
  restaurants: RestaurantType[];
}

export const handler: Handlers<Props> = {
  GET: async (req, ctx) => {
    const restaurants = await getRestaurants();
    if (restaurants) {
      return ctx.render({ restaurants });
    }
    return new Response('No restaurants found');
  },
};

export default function HomePage({ data }: PageProps<Props>) {
  const { restaurants } = data;

  return (
    <div class={tw`flex gap-4 justify-center my-3`}>
      {restaurants.map(({ id, name }) => (
        <a href={`/restaurant/${name}`} class={tw`border p-3`} key={id}>
          {name}
        </a>
      ))}
    </div>
  );
}
