export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
// types/types.ts
export type Role = "CONSUMER" | "FARMER" | "DRIVER";

export interface UserProps {
  id?: string;
  firstName: string;
  lastName: string;
  name?: string;
  phone: string;
  password: string;
  role: Role;
  image?: string;
}
export type LoginProps = {
  email: string;
  password: string;
};

// type Rating = {
//   rate: number;
//   count: number;
// };

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  categoryId: string;
  image: string;
};
