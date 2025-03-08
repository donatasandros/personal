"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import {
  CalculatorIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  HelpCircleIcon,
  LogOutIcon,
  MailIcon,
  MusicIcon,
  SettingsIcon,
} from "lucide-react";
import * as React from "react";

import { EasterEgg } from "@/components/misc/easter-egg";

export function StartBarMenu() {
  const [showEasterEgg, setShowEasterEgg] = React.useState(false);

  function handleShowEasterEgg() {
    setShowEasterEgg(true);

    setTimeout(() => {
      setShowEasterEgg(false);
    }, 10000); // 10 seconds
  }

  const startMenuItems = [
    {
      icon: <GlobeIcon className="h-5 w-5 text-blue-600" />,
      name: "Internet Explorer",
      special: false,
    },
    {
      icon: <MailIcon className="h-5 w-5 text-blue-600" />,
      name: "Outlook Express",
      special: false,
    },
    {
      icon: <MusicIcon className="h-5 w-5 text-green-600" />,
      name: "Windows Media Player",
      special: false,
    },
    {
      icon: <FileTextIcon className="h-5 w-5 text-yellow-600" />,
      name: "My Documents",
      special: false,
    },
    {
      icon: <CalculatorIcon className="h-5 w-5 text-blue-600" />,
      name: "Calculator",
      special: false,
    },
    {
      icon: <CalendarIcon className="h-5 w-5 text-blue-600" />,
      name: "Calendar",
      special: false,
    },
    {
      icon: <SettingsIcon className="h-5 w-5 text-gray-600" />,
      name: "Control Panel",
      special: false,
    },
    {
      icon: <HelpCircleIcon className="h-5 w-5 text-blue-600" />,
      name: "Help and Support",
      special: false,
    },
    {
      icon: <LogOutIcon className="h-5 w-5 text-red-600" />,
      name: "Shut Down",
      special: true,
    },
  ];

  if (showEasterEgg) {
    return <EasterEgg />;
  }

  return (
    <div>
      <PopoverPrimitive.Popover modal>
        <PopoverPrimitive.Trigger asChild>
          <button className="mx-1 flex h-8 items-center rounded-l rounded-r bg-gradient-to-r from-[#388e3c] to-[#1b5e20] px-2 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="100%"
              height="100%"
              className="mr-1 size-4"
            >
              <rect x="0" y="0" width="20" height="20" fill="#f65314" />
              <rect x="20" y="0" width="20" height="20" fill="#7cbb00" />
              <rect x="0" y="20" width="20" height="20" fill="#00a1f1" />
              <rect x="20" y="20" width="20" height="20" fill="#ffbb00" />
            </svg>
            <span className="font-bold">Start</span>
          </button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content align="start" side="top" sideOffset={8}>
          <div className="w-64 border-2 border-[#aca899] bg-[#ece9d8] shadow-lg">
            <div className="p-2">
              <div className="mb-2 border-b border-[#aca899] pb-2">
                {startMenuItems.slice(0, 6).map((item, index) => (
                  <button
                    key={index}
                    className="flex w-full items-center rounded p-2 text-left hover:bg-[#316ac5] hover:text-white"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </button>
                ))}
              </div>
              <div className="mb-2 border-b border-[#aca899] pb-2">
                {startMenuItems.slice(6, 8).map((item, index) => (
                  <button
                    key={index}
                    className="flex w-full items-center rounded p-2 text-left hover:bg-[#316ac5] hover:text-white"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </button>
                ))}
              </div>
              <div className="group">
                {startMenuItems.slice(8).map((item, index) => (
                  <button
                    key={index}
                    className={`flex w-full items-center rounded p-2 text-left hover:bg-[#316ac5] hover:text-white`}
                    onClick={handleShowEasterEgg}
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
                  </button>
                ))}
                <div className="absolute right-4 bottom-3.5 text-[8px] text-gray-500 group-hover:hidden">
                  Try clicking &quot;Shut Down&quot;
                </div>
              </div>
            </div>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Popover>
    </div>
  );
}
