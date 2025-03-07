import type { AVATARS } from "@/config/avatars";

import { cn } from "@/lib/utils";

interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  type: (typeof AVATARS)[number];
}

export function Avatar({ type, className, ...props }: AvatarProps) {
  switch (type) {
    case "default":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#3b79c7"></rect>
          <rect x="6" y="4" width="8" height="8" fill="#ffe7c7"></rect>
          <rect x="6" y="4" width="8" height="2" fill="#5a3825"></rect>
          <rect x="7" y="6" width="2" height="2" fill="#000000"></rect>
          <rect x="11" y="6" width="2" height="2" fill="#000000"></rect>
          <rect x="8" y="9" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="6" y="12" width="8" height="6" fill="#1e5aa0"></rect>
          <rect x="8" y="14" width="4" height="2" fill="#ffffff"></rect>
        </svg>
      );

    case "casual":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#60a917"></rect>
          <rect x="6" y="5" width="8" height="7" fill="#ffe7c7"></rect>
          <rect x="5" y="3" width="10" height="3" fill="#8b5a2b"></rect>
          <rect x="7" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="11" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="8" y="10" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="4" y="4" width="2" height="3" fill="#333333"></rect>
          <rect x="14" y="4" width="2" height="3" fill="#333333"></rect>
          <rect x="4" y="4" width="12" height="1" fill="#333333"></rect>
          <rect x="6" y="12" width="8" height="6" fill="#f0f0f0"></rect>
          <rect x="8" y="14" width="4" height="2" fill="#60a917"></rect>
        </svg>
      );

    case "developer":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#0078d7"></rect>
          <rect x="6" y="5" width="8" height="7" fill="#ffe7c7"></rect>
          <rect x="5" y="3" width="10" height="3" fill="#5a3825"></rect>
          <rect x="6" y="6" width="3" height="2" fill="#000000"></rect>
          <rect x="11" y="6" width="3" height="2" fill="#000000"></rect>
          <rect x="9" y="7" width="2" height="1" fill="#000000"></rect>
          <rect x="8" y="10" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="6" y="12" width="8" height="6" fill="#333333"></rect>
          <rect x="7" y="14" width="1" height="2" fill="#0078d7"></rect>
          <rect x="9" y="14" width="2" height="2" fill="#0078d7"></rect>
          <rect x="12" y="14" width="1" height="2" fill="#0078d7"></rect>
        </svg>
      );

    case "professional":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#4f8edb"></rect>
          <rect x="6" y="4" width="8" height="7" fill="#ffe7c7"></rect>
          <rect x="6" y="4" width="8" height="2" fill="#5a3825"></rect>
          <rect x="6" y="6" width="3" height="2" fill="#000000"></rect>
          <rect x="11" y="6" width="3" height="2" fill="#000000"></rect>
          <rect x="9" y="6" width="2" height="1" fill="#000000"></rect>
          <rect x="8" y="9" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="6" y="11" width="8" height="7" fill="#2c3e50"></rect>
          <rect x="8" y="11" width="4" height="3" fill="#ffffff"></rect>
          <rect x="9" y="11" width="2" height="7" fill="#cc3333"></rect>
        </svg>
      );

    case "gamer":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#9c27b0"></rect>
          <rect x="6" y="5" width="8" height="7" fill="#ffe7c7"></rect>
          <rect x="5" y="3" width="10" height="3" fill="#222222"></rect>
          <rect x="7" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="11" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="8" y="10" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="4" y="6" width="2" height="4" fill="#222222"></rect>
          <rect x="14" y="6" width="2" height="4" fill="#222222"></rect>
          <rect x="4" y="6" width="12" height="1" fill="#222222"></rect>
          <rect x="5" y="12" width="10" height="6" fill="#333333"></rect>
          <rect x="7" y="14" width="6" height="2" fill="#ffffff"></rect>
          <rect x="8" y="15" width="1" height="1" fill="#9c27b0"></rect>
          <rect x="11" y="15" width="1" height="1" fill="#9c27b0"></rect>
        </svg>
      );

    case "creative":
      return (
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className={cn(className)}
          {...props}
        >
          <rect width="20" height="20" fill="#f7630c"></rect>
          <rect x="6" y="5" width="8" height="7" fill="#ffe7c7"></rect>
          <rect x="5" y="2" width="10" height="4" fill="#ff9800"></rect>
          <rect x="7" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="11" y="7" width="2" height="2" fill="#000000"></rect>
          <rect x="8" y="10" width="4" height="1" fill="#d4a76a"></rect>
          <rect x="6" y="12" width="8" height="6" fill="#7e57c2"></rect>
          <rect x="7" y="14" width="4" height="2" fill="#f7630c"></rect>
          <rect x="8" y="14" width="1" height="1" fill="#ffeb3b"></rect>
          <rect x="9" y="15" width="1" height="1" fill="#f7630c"></rect>
          <rect x="11" y="13" width="2" height="1" fill="#333333"></rect>
        </svg>
      );
  }
}
