import { NextResponse } from "next/server";
import db from "@/prisma/db";

// Define a specific type for context parameter
interface Context {
  params: {
    id: string;
  };
}

// GET /api/users/[id]
export async function GET(request: Request, context: Context) {
  try {
    const { id } = context.params;

    const user = await db.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.error("Error fetching user:", err);
    return NextResponse.json(
      { error: "Failed to fetch user" },
      { status: 500 }
    );
  }
}

// PUT /api/users/[id]
export async function PUT(request: Request, context: Context) {
  try {
    const { id } = context.params;
    const body = await request.json();

    const { firstName, lastName, name, phone } = body;

    const updatedUser = await db.user.update({
      where: { id },
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

    return NextResponse.json(updatedUser);
  } catch (err) {
    console.error("Error updating user:", err);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}

// DELETE /api/users/[id]
export async function DELETE(request: Request, context: Context) {
  try {
    const { id } = context.params;

    await db.user.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("Error deleting user:", err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
