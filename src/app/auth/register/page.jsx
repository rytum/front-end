// "use client";
// import { BorderBeam } from "@/components/ui/border-beam";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Eye, EyeOff } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import toast, { Toaster } from "react-hot-toast"; // Import toast
// import { DotLottieReact } from '@lottiefiles/dotlottie-react'

// export default function RegisterForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     if (name === "confirmPassword" || name === "password") {
//       setError("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setIsLoading(true);

//     // Basic validation
//     if (Object.values(formData).some((field) => field === "")) {
//       setError("Please fill in all fields");
//       setIsLoading(false);
//       return;
//     }

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match");
//       setIsLoading(false);
//       return;
//     }

//     // Simulate API call
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

//       // Show success toast
//       toast.success("Registration successful! Redirecting to login page...");

//       // After successful registration, redirect to login page
//       setTimeout(() => {
//         router.push("/auth/login");
//       }, 3000);
//     } catch (err) {
//       setError("Failed to register. Please try again.");
//       toast.error("Failed to register. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const togglePasswordVisibility = (field) => {
//     if (field === "password") {
//       setShowPassword(!showPassword);
//     } else {
//       setShowConfirmPassword(!showConfirmPassword);
//     }
//   };

//   return (
//     <div className="flex h-screen w-full items-center justify-center px-4 ">
//       <Toaster position="top-right" reverseOrder={false} />
//       <div className="w-2/3 max-w-6xl border rounded-lg overflow-hidden shadow-lg relative  ">
//         <BorderBeam size={250} duration={12} delay={9}/>
//       <div className="flex flex-col md:flex-row">
//         <div className="flex-1 p-8 flex flex-col justify-center items-center  ">
          
//           <div className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none">
//            <DotLottieReact
//              src="/animation/register.lottie"
//              loop
//              autoplay
//              className="w-auto h-auto"
//            />
//          </div>
//         </div>
//         {/* <div className="w-px bg-border hidden md:block" /> */}
//         <div className="flex-1 p-8">
//           <Card className="mx-auto max-w-lg w-full bg-inherit border-none shadow-none">
//             <CardHeader>
//               <CardTitle className="text-2xl text-primary">Register</CardTitle>
//               <CardDescription className="text-muted-foreground">
//                 Create an account to get started
//               </CardDescription>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="grid gap-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="grid gap-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input
//                       id="firstName"
//                       name="firstName"
//                       placeholder="John"
//                       required
//                       value={formData.firstName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                   <div className="grid gap-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input
//                       id="lastName"
//                       name="lastName"
//                       placeholder="Doe"
//                       required
//                       value={formData.lastName}
//                       onChange={handleChange}
//                     />
//                   </div>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="email">Email</Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="john@example.com"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="password">Password</Label>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       name="password"
//                       type={showPassword ? "text" : "password"}
//                       required
//                       value={formData.password}
//                       onChange={handleChange}
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="icon"
//                       className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                       onClick={() => togglePasswordVisibility("password")}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="confirmPassword">Confirm Password</Label>
//                   <div className="relative">
//                     <Input
//                       id="confirmPassword"
//                       name="confirmPassword"
//                       type={showConfirmPassword ? "text" : "password"}
//                       required
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="icon"
//                       className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
//                       onClick={() =>
//                         togglePasswordVisibility("confirmPassword")
//                       }
//                     >
//                       {showConfirmPassword ? (
//                         <EyeOff className="h-4 w-4" />
//                       ) : (
//                         <Eye className="h-4 w-4" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>
//                 {error && (
//                   <p
//                     className="text-sm text-red-500"
//                     role="alert"
//                     aria-live="polite"
//                   >
//                     {error}
//                   </p>
//                 )}
//                 <Button type="submit" className="w-full" disabled={isLoading}>
//                   {isLoading ? "Registering..." : "Register"}
//                 </Button>
//               </form>
//               <div className="mt-4 text-center text-sm">
//                 Already have an account?{" "}
//                 <Button
//                   variant="link"
//                   className="p-0"
//                   onClick={() => router.push("/auth/login")}
//                 >
//                   Log in
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "confirmPassword" || name === "password") {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (Object.values(formData).some((field) => field === "")) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

      toast.success("Registration successful! Redirecting to login page...");

      setTimeout(() => {
        router.push("/auth/login");
      }, 3000);
    } catch (err) {
      setError("Failed to register. Please try again.");
      toast.error("Failed to register. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full md:w-2/3 max-w-6xl border rounded-lg overflow-hidden shadow-lg relative">
        <BorderBeam size={250} duration={12} delay={9} />
        <div className="flex flex-col md:flex-row">
          {/* Left side: Hidden on small screens */}
          <div className="hidden md:flex flex-1 p-8 flex-col justify-center items-center">
            <div className="flex-1 flex justify-center items-center w-full max-w-md lg:max-w-none">
              <DotLottieReact
                src="/animation/register.lottie"
                loop
                autoplay
                className="w-auto h-auto"
              />
            </div>
          </div>

          <div className="flex-1 p-8">
            <Card className="mx-auto max-w-lg w-full bg-inherit border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Register</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Create an account to get started
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => togglePasswordVisibility("password")}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  {error && (
                    <p
                      className="text-sm text-red-500"
                      role="alert"
                      aria-live="polite"
                    >
                      {error}
                    </p>
                  )}
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => router.push("/auth/login")}
                  >
                    Log in
                  </Button>
                </div>
                <div className="mt-2 text-center text-sm text-muted-foreground">
                  By registering, you are accepting our{" "}
                  <Button
                    variant="link"
                    className="p-0"
                    onClick={() => router.push("/privacy-policy")}
                  >
                    Privacy Policy
                  </Button>
                  .
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
