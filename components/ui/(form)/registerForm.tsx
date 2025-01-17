"use client";

import { Headset, Loader2, Lock, User } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Role, UserProps } from "@/types/types";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { createUser } from "@/actions/users";
import TextInput from "../(formInputs)/TextInput";
import PasswordInput from "../(formInputs)/PasswordInput";
import SubmitButton from "../(formInputs)/SubmitButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<UserProps>({
    defaultValues: {
      role: "CONSUMER", // Set default role
    },
  });
  const router = useRouter();

  async function onSubmit(data: UserProps) {
    setLoading(true);
    data.name = `${data.firstName} ${data.lastName}`;
    data.image =
      "https://utfs.io/f/59b606d1-9148-4f50-ae1c-e9d02322e834-2558r.png";

    try {
      const res = await createUser(data);
      if (res.status === 201) {
        // Changed from 200 to 201 to match API
        setLoading(false);
        toast.success("Account Created successfully");
        router.push("/login");
      } else {
        setLoading(false);
        toast.error(res.error || "Something went wrong");
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("It seems something is wrong, try again");
    }
  }

  return (
    <div className="w-full py-5 lg:px-8 px-6">
      <div className="">
        <div className="py-4 text-amber-700">
          <h2 className="text-xl lg:text-2xl font-bold leading-9 tracking-tight">
            Create an account
          </h2>
          <p className="text-xs">Join Us, fill in details to register</p>
        </div>
      </div>
      <div className="">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              register={register}
              errors={errors}
              label="First Name"
              name="firstName"
              icon={User}
              placeholder="First Name"
            />
            <TextInput
              register={register}
              errors={errors}
              label="Last Name"
              name="lastName"
              icon={User}
              placeholder="Last Name"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput
              register={register}
              errors={errors}
              label="Phone"
              name="phone"
              icon={Headset}
              placeholder="phone"
            />
            <PasswordInput
              register={register}
              errors={errors}
              label="Password"
              name="password"
              icon={Lock}
              placeholder="Password"
              type="password"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <Select
              onValueChange={(value: Role) => setValue("role", value)}
              defaultValue="CONSUMER"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CONSUMER">Consumer</SelectItem>
                <SelectItem value="FARMER">Farmer</SelectItem>
                <SelectItem value="DRIVER">Driver</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <SubmitButton
              title="Sign Up"
              loadingTitle="Creating Please wait.."
              loading={loading}
              className="w-full"
              loaderIcon={Loader2}
              showIcon={false}
            />
          </div>
        </form>

        <div className="flex items-center py-4 justify-center space-x-1 text-slate-900">
          <div className="h-[1px] w-full bg-slate-200"></div>
          <div className="uppercase">Or</div>
          <div className="h-[1px] w-full bg-slate-200"></div>
        </div>

        <p className="mt-6 text-left text-sm text-gray-500">
          Already Registered?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-amber-700 hover:text-amber-600"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
