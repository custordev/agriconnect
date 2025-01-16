/* eslint-disable @typescript-eslint/no-unused-vars */

import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, description, price, quantity, rating, image, images, categoryId } =
    await request.json();

  try {
    const newProduct = await db.product.create({
      data: {
        title,
        description,
        price,
        quantity,
        rating,
        image,
        images,
        categoryId,
      },
    });
    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}


export async function GET(request: Request) {
  try {
    const allProducts = await db.product.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
