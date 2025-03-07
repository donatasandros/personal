import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "bg-[#ece9d8] border-t-2 border-l-2 border-r-2 border-b-2 border-[#aca899] px-4 py-1 active:border-t-2 active:border-l-2 active:border-[#aca899] active:border-r-2 active:border-b-2  focus:outline-none focus:border-dotted focus:border-black",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
