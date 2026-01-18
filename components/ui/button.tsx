import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-sm",
        secondary:
          "bg-beige-100 text-charcoal-900 hover:bg-beige-200",
        outline:
          "border border-charcoal-300 bg-transparent hover:bg-beige-50 hover:text-charcoal-900",
        ghost: "hover:bg-beige-100 hover:text-charcoal-900",
        premium:
          "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-lg hover:shadow-xl transition-all duration-300",
        "premium-outline":
          "border-2 border-charcoal-900 bg-transparent text-charcoal-900 hover:bg-charcoal-900 hover:text-white transition-all duration-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
