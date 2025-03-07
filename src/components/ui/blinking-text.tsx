import * as React from "react";

import { cn } from "@/lib/utils";

interface BlinkingTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function BlinkingText({
  children,
  className,
  ...props
}: BlinkingTextProps) {
  return (
    <div
      className={cn("animate-blink transition-opacity", className)}
      {...props}
    >
      {children}
    </div>
  );
}
