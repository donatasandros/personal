"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

import { THEMES } from "@/config/themes";
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <button className="hover:bg-highlightBg hover:text-highlightText cursor-pointer px-3 py-1 outline-none">
          Theme
        </button>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        className="border-border bg-window border-2 shadow-lg"
        align="start"
        side="bottom"
      >
        <DropdownMenuPrimitive.Label className="from-titleBarFrom to-titleBarTo text-highlightText bg-gradient-to-r p-1 text-sm font-bold">
          Select theme
        </DropdownMenuPrimitive.Label>
        <DropdownMenuPrimitive.Group className="space-y-1 p-2">
          {THEMES.map(({ key, name }) => (
            <DropdownMenuPrimitive.Item
              key={`theme-${key}`}
              data-theme={key}
              onClick={() => setTheme(key)}
              className={cn("text-text flex cursor-pointer items-center p-1", {
                "bg-highlightBg text-highlightText": theme === key,
              })}
            >
              <div className="from-titleBarFrom to-titleBarTo border-border mr-2 size-4 border bg-gradient-to-r"></div>
              {name}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Group>
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
}
