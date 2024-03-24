import { SignUp } from "@/app/(auth)/sign_up/_components/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "新規登録",
  description: "アカウントを作成",
};

export default function SignUpPage() {
  return <SignUp />;
}
