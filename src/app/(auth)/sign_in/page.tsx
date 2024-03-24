import { SignIn } from "@/app/(auth)/sign_in/_components/SignIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ログイン",
  description: "アカウントにログイン",
};

export default function SignInPage() {
  return <SignIn />;
}
