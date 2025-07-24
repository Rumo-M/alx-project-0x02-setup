// interfaces/index.ts

// Used for listing properties
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
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

// Used for displaying user-related data (optional)
export interface UserProps {
  id: number;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
  phone: string;
}

// For modals that deal with creating or editing property data
export interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (property: PropertyProps) => void;
}

// For modals that deal with user data (optional)
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}
