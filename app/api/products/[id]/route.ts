/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params: { id } }: any) {
  try {
    const product = await db.product.findUnique({
      where: { id },
      include: { category: true },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to get product",
    });
  }
}

export async function PUT(request: Request, { params: { id } }: any) {
  try {
    const { title, description, price, quantity, rating, image, images, categoryId } =
      await request.json();

    const updatedProduct = await db.product.update({
      where: { id },
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
    return NextResponse.json(updatedProduct);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to update product",
    });
  }
}

export async function DELETE(request: Request, { params: { id } }: any) {
  try {
    const product = await db.product.delete({
      where: { id },
    });
    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json({
      error: "Failed to delete product",
    });
  }
}