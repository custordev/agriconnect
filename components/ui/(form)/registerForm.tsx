/* eslint-disable @typescript-eslint/no-unused-vars */
// app/components/RegisterForm.tsx
"use client";
import { Phone, Loader2, Lock, User } from "lucide-react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Link from "next/link";

type UserProps = {
  name: string;
  phone: string;
  password: string;
  role: 'FARMER' | 'CONSUMER' | 'DRIVER';
};

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserProps>();
  const router = useRouter();

  async function onSubmit(data: UserProps) {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      
      if (res.ok) {
        toast.success("Registration successful!");
        // Redirect to appropriate onboarding page based on role
        router.push(`/onboarding/${data.role.toLowerCase()}`);
      } else {
        toast.error(result.error || "Registration failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="py-4 text-amber-700">
        <h2 className="text-xl lg:text-2xl font-bold leading-9 tracking-tight">
          Create an account
        </h2>
        <p className="text-xs">Join Us, fill in details to register</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <div className="mt-1 relative">
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <div className="mt-1 relative">
            <input
              {...register("phone", { required: "Phone is required" })}
              type="tel"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Role</label>
          <div className="mt-1 relative">
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select a role</option>
              <option value="FARMER">Farmer</option>
              <option value="CONSUMER">Consumer</option>
              <option value="DRIVER">Driver</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-xs mt-1">{errors.role.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 relative">
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full px-4 py-2 border rounded-md"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin h-5 w-5 mr-2" />
              Registering...
            </>
          ) : (
            "Register"
          )}
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-amber-700 hover:text-amber-600">
          Login
        </Link>
      </p>
    </div>
  );
}