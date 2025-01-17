"use server";

import axios from "axios";

const apiEndpoint = "https://localhost:3000/api/products"; 


export async function createProduct(data: {
  name: string;
  price: number;
  category: string;
  image: string;
}) {
  try {
    const apiResponse = await axios.post(apiEndpoint, data);

    if (apiResponse.status !== 201) {
      return {
        error: `Failed to create product via API`,
        status: apiResponse.status,
        data: null,
      };
    }

    return {
      error: null,
      status: 200,
      data: apiResponse.data,
    };
  } catch (error: any) {
    console.log("Error creating product:", error.message);
    return {
      error: `Something went wrong, please try again.`,
      status: error.response?.status || 500,
      data: null,
    };
  }
}

export async function getProducts() {
  try {
    const apiResponse = await axios.get(apiEndpoint);

    if (apiResponse.status !== 200) {
      return {
        error: `Failed to fetch products from API`,
        status: apiResponse.status,
        data: null,
      };
    }

    return {
      error: null,
      status: 200,
      data: apiResponse.data,
    };
  } catch (error: any) {
    console.log("Error fetching products:", error.message);
    return {
      error: `Something went wrong, please try again.`,
      status: error.response?.status || 500,
      data: null,
    };
  }
}

export async function deleteProduct(productId: string) {
  try {
    const apiResponse = await axios.delete(`${apiEndpoint}/${productId}`);

    if (apiResponse.status !== 200) {
      return {
        error: `Failed to delete product via API`,
        status: apiResponse.status,
        data: null,
      };
    }

    return {
      error: null,
      status: 200,
      data: apiResponse.data,
    };
  } catch (error: any) {
    console.log("Error deleting product:", error.message);
    return {
      error: `Something went wrong, please try again.`,
      status: error.response?.status || 500,
      data: null,
    };
  }
}
