import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/prisma/db";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const user = await db.user.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        name: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      console.log("User not found with ID:", params.id);
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("User fetched successfully:", user);
    return NextResponse.json(user);
  } catch (error) {
    console.log("Error fetching user:", error);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { firstName, lastName, name, phone } = body;

    const updatedUser = await db.user.update({
      where: { id: params.id },
      data: {
        name: name || `${firstName} ${lastName}`,
        phone,
      },
      select: {
        id: true,
        name: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    console.log("User updated successfully:", updatedUser);
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log("Error updating user:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await db.user.delete({
      where: { id: params.id },
    });

    console.log("User deleted successfully with ID:", params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log("Error deleting user:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
