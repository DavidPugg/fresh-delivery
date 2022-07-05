import { RestaurantType, ProductType } from '../types.d.ts';

export const products: Record<string, ProductType> = {
  hamburger: { id: 1, name: 'Hamburger' },
  pizza: { id: 2, name: 'Pizza' },
  wings: { id: 3, name: 'Chicken Wings' },
  salad: { id: 4, name: 'Salad' },
  taco: { id: 5, name: 'Taco' },
};

export const restaurants: RestaurantType[] = [
  {
    id: 1,
    name: 'Picikato',
    products: [products['hamburger'], products['pizza'], products['salad']],
  },
  {
    id: 2,
    name: 'Limbo',
    products: [products['pizza'], products['wings']],
  },
  {
    id: 3,
    name: 'Fudi',
    products: [products['salad'], products['taco']],
  },
];
