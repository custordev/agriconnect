/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import db from "@/prisma/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // console.log(id)
  try {
    const category = await db.category.findUnique({
      where: {
        id: (await params).id,
      },
    });
    //   console.log(category)
    return NextResponse.json(category);
  } catch (error) {
    console.log("Something Went wrong, Failed to get back a category");
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // console.log(id)
  try {
    const { slug, name, image } = await request.json();

    const data = {
      name: name,
      slug: slug,
      image: image,
    };

    const updatedCategory = await db.category.update({
      data,
      where: {
        id: (await params).id,
      },
    });
    // console.log(`Updated Category: ${updatedCategory}`);
    return NextResponse.json(updatedCategory);
  } catch (error) {
    console.log("Something Went wrong, Failed to update a category");
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  // console.log(id)
  try {
    const deletedCategory = await db.category.delete({
      where: {
        id: (await params).id,
      },
    });
    // console.log(`Deleted The Following Category: ${deletedCategory}`);
    return NextResponse.json(deletedCategory);
  } catch (error) {
    console.log("Something Went wrong, Failed to delete a category");
  }
}
