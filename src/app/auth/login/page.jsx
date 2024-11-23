"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    try {
      // Make the API request
      const response = await fetch("https://20.244.45.179/app3/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      const data = await response.json();

      // Check if login was successful
      if (response.ok) {
        toast.success("Login successful!");
        // Navigate to the chat page after successful login
        router.push("/chat");
      } else {
        // Handle error response
        setError(data.message || "Failed to login. Please try again.");
        toast.error(data.message || "Failed to login. Please try again.");
      }
    } catch (err) {
      // Handle any network or other errors
      setError("Failed to login. Please try again.");
      toast.error("Failed to login. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="relative w-2/3 max-w-6xl border rounded-lg overflow-hidden shadow-lg">
        <BorderBeam size={250} duration={12} delay={9} />
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8 flex flex-col justify-center items-center text-center text-primary-foreground">
            <div className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none">
              <DotLottieReact
                src="/animation/login.lottie"
                loop
                autoplay
                className="w-auto h-auto"
              />
            </div>
          </div>
          <div className="flex-1 p-8">
            <Card className="border-none bg-inherit shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Login</CardTitle>
                <CardDescription>
                  Enter your email below to login to your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <div className="flex items-center">
                      <Label htmlFor="password">Password</Label>
                      <Link
                        href="/auth/reset-password"
                        className="ml-auto inline-block text-sm underline text-primary"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                    <Input
                      id="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="border-none bg-inherit w-full hover:bg-primary hover:text-white"
                    disabled={isLoading}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Login with Google
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/register" className="underline text-primary">
                    Sign up
                  </Link>
                </div>
                <div className="mt-2 text-center text-xs">
                  By registering or logging in, you are accepting our{" "}
                  <Link href="/privacy-policy" className="underline text-primary">
                    Privacy Policy
                  </Link>.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
