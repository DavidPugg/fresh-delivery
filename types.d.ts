export interface RestaurantType {
  id: number;
  name: string;
  products: ProductType[];
}

export interface ProductType {
  id: number;
  name: string;
}

export interface StorageItem {
  product: ProductType;
  qty: number;
}

export interface CartType {
  restaurant: string;
  products: StorageItem[];
}
