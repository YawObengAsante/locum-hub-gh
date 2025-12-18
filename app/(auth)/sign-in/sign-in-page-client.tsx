"use client";
import PasswordInput from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInAction } from "@/actions/auth";
import Link from "next/link";
import { useActionState } from "react";
import { Ring } from "ldrs/react";
import { cn } from "@/lib/utils";
import type { SignInFormReturnType } from "@/types";

const initState: SignInFormReturnType = {
  success: false,
  message: "",
  entries: {
    email: "",
    password: "",
  },
  error: {
    email: [],
    password: [],
  },
};

export default function SignInPageClient() {
  const [state, action, isLoading] = useActionState(signInAction, initState);
  return (
    <div className="bg-[#391F81] text-white min-h-screen w-full flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left hero / illustration area */}
          <div className="order-2 md:order-1 flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Welcome to Job-Board
            </h2>
            <p className="text-white/80 max-w-lg mx-auto md:mx-0">
              Sing into your account and start applying to jobs you love. We
              keep your data secure and make the hiring process easy.
            </p>
            <div className="hidden md:flex items-center justify-start gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                {/* subtle decorative blob */}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z"
                    fill="white"
                    opacity="0.2"
                  />
                </svg>
              </div>
              <div className="text-sm text-white/70">Fast. Simple. Human.</div>
            </div>
          </div>

          {/* Right form area */}
          <div className="order-1 md:order-2 flex justify-center">
            <form
              className="w-full max-w-md mx-auto bg-white/6 backdrop-blur-lg border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
              aria-label="Sign up form"
              action={action}
            >
              <h1 className="font-extrabold text-2xl md:text-3xl mb-3">
                Sign Into your account
              </h1>
              <p className="text-sm text-white/70 mb-6">
                Sign in to access job listings and apply in one click.
              </p>
              {state.message && (
                <div
                  className={cn(
                    "p-3 rounded-2xl mb-2 text-center",
                    state.success
                      ? "bg-green-200 border-green-300 text-green-600"
                      : "bg-red-200 border-red-300 text-red-600"
                  )}
                >
                  <p>{state.message}</p>
                </div>
              )}

              <div className="flex flex-col gap-4">
                {/* Email field */}
                <div>
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <div className="relative mt-2">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8l9 6 9-6"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <Input
                      defaultValue={state.entries?.email}
                      id="email"
                      name="email"
                      // type="email"
                      placeholder="you@email.com"
                      className="pl-10 bg-transparent text-white placeholder-white/60 border border-white/20 rounded-lg py-3 w-full focus:outline-none focus:ring-2 focus:ring-white/10"
                    />
                    {state.error?.email && (
                      <p className="text-red-500">{state.error.email[0]}</p>
                    )}
                  </div>
                </div>

                {/* Password field */}
                <div>
                  <Label htmlFor="password" className="text-white/80">
                    Password
                  </Label>
                  <PasswordInput defaultValue={state.entries?.password} />
                  {state.error?.password && (
                    <p className="text-red-500">{state.error.password[0]}</p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="mt-1 w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 rounded-lg"
                >
                  {isLoading ? (
                    <Ring
                      size="20"
                      stroke="2"
                      bgOpacity="0"
                      speed="2"
                      color="white"
                    />
                  ) : (
                    "Sign In"
                  )}
                </Button>

                <div className="text-center text-sm text-white/60 mt-2">
                  Don't have an account?{" "}
                  <Link href="/sign-up" className="text-white underline">
                    Sign Up
                  </Link>
                </div>

                <div className="text-center text-sm text-white/60 mt-2">
                  By creating an account you agree to our{" "}
                  <Link className="underline text-white" href="#">
                    Terms
                  </Link>
                  .
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
