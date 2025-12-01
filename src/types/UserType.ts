export type UserType = {
  id: number;
  image: string;
  name: string;
  age: number;
  isMarried: boolean;
  contact: {
    phone: string;
    city: string;
  };
};
