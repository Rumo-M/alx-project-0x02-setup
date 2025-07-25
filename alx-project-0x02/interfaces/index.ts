export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string; // ✅ This is the required field
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
