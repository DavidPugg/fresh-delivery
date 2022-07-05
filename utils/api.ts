import { RestaurantType } from '../types.d.ts';
import { restaurants } from './database.ts';

export const getRestaurants = (): Promise<RestaurantType[] | undefined> => {
  return returnPromise(restaurants);
};

export const getRestaurant = (
  name: string
): Promise<RestaurantType | undefined> => {
  const restaurant = restaurants.find((res) => res.name === name);
  return returnPromise(restaurant);
};

const returnPromise = <T>(data: T | undefined): Promise<T | undefined> => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve(data);
    }, 1);
  });
};
