/* eslint-disable @typescript-eslint/no-unused-vars */

import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { slug, title, image } = await request.json();

    const newCategory = await db.category.create({
      data: {
        slug: slug,
        title: title,
        image: image,
      },
    });

    console.log(newCategory);
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.log(error);
  }
}

export async function GET(request: Request) {
  try {
    const allProductCategories = await db.category.findMany();

    console.log(allProductCategories);
    return NextResponse.json(allProductCategories, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
