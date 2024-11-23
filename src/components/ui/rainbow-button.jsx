import React from "react";
import { cn } from "@/lib/utils";

export function RainbowButton({
  children,
  className,
  variant = "default",
  size = "medium",
  ...props
}) {
  const buttonSizes = {
    small: "h-8 px-4 text-sm",
    medium: "h-11 px-8 text-md",
    large: "h-12 px-10 text-lg",
  };

  const buttonVariants = {
    default: "bg-transparent text-primary-foreground border-2 border-transparent",
    outline: "bg-transparent text-primary border-2 border-primary",
    solid: "bg-primary text-white",
  };

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        // Button size
        buttonSizes[size],
        // Button variant
        buttonVariants[variant],
        // Animation and background styles
        "animate-rainbow before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))] before:transition-all",
        className
      )}
      {...props}
    >
      {children}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
