import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import db from "@/prisma/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const users = await db.user.findMany({
      select: {
        id: true,
        name: true,
        phone: true,
      },
    });

    console.log("Users fetched successfully:", users);
    return NextResponse.json(users);
  } catch (error) {
    console.log("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, firstName, lastName, name, phone } = body;

    if (!phone || !password || !firstName || !lastName) {
      console.log("Missing required fields:", body);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await db.user.findUnique({ where: { phone } });

    if (existingUser) {
      console.log("Phone already exists:", phone);
      return NextResponse.json(
        { error: "Phone already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: {
        phone,
        password: hashedPassword,
        name: name || `${firstName} ${lastName}`,
      },
      select: {
        id: true,
        name: true,
        phone: true,
      },
    });

    console.log("User created successfully:", newUser);
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 }
    );
  }
}
