import toast from "react-hot-toast";
import { Product } from "./../types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  categoryId: string;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
}

const useCartStore = create<CartState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      items: [],
      addToCart: (product) => {
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            toast.error("Product Already Exists in Cart");
            return { items: state.items };
          } else {
            toast.success("Product Added Successfully");
            return {
              items: [
                ...state.items,
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                  categoryId: product.categoryId,
                },
              ],
            };
          }
        });
      },
      removeFromCart: (productId) => {
        set((state) => {
          const updatedItems = state.items.filter(
            (item) => item.id !== productId
          );
          toast.error("Product Removed From Cart");
          return { items: updatedItems };
        });
      },
      updateCartItemQuantity: (productId, quantity) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
