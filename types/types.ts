export type CategoryProps = {
  title: string;
  slug: string;
  imageUrl: string;
  description: string;
};
export type UserProps = {
  name: string;
  firstName: string;
  lastName: string;
  phone: string;
  image: string;
  email: string;
  password: string;
};
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
