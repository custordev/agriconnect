// actions/users.ts
"use server";

import { UserProps } from "@/types/types";

export async function createUser(data: UserProps) {
  try {
    const response = await fetch(`http://localhost:3000/api/users`, {
      // ${process.env.NEXT_PUBLIC_API_URL}
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    return {
      status: response.status,
      data: result,
      error: !response.ok ? result.error : null,
    };
  } catch (error) {
    console.log("Error creating user:", error);
    return {
      status: 500,
      data: null,
      error: "Failed to create user",
    };
  }
}
