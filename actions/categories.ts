"use server";

import axios from "axios";

const apiEndpoint = "https://localhost:3000/api/categories"; // Replace with the actual API URL

export async function createCategory(name: string) {
  try {
    const apiResponse = await axios.post(apiEndpoint, { name });

    if (apiResponse.status !== 201) {
      return {
        error: `Failed to create category via API`,
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
    console.log("Error creating category:", error.message);
    return {
      error: `Something went wrong, please try again.`,
      status: error.response?.status || 500,
      data: null,
    };
  }
}

export async function getCategories() {
  try {
    const apiResponse = await axios.get(apiEndpoint);

    if (apiResponse.status !== 200) {
      return {
        error: `Failed to fetch categories from API`,
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
    console.log("Error fetching categories:", error.message);
    return {
      error: `Something went wrong, please try again.`,
      status: error.response?.status || 500,
      data: null,
    };
  }
}
