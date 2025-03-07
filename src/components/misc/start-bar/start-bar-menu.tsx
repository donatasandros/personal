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
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              className="mr-1 size-5"
            >
              <rect width="40" height="40" fill="#004e98"></rect>
              <rect y="36" width="40" height="4" fill="#0c5da5"></rect>
              <rect x="2" y="4" width="36" height="32" fill="#3a6ea5"></rect>
              <rect x="2" y="4" width="10" height="32" fill="#246ebd"></rect>
              <rect x="12" y="4" width="26" height="8" fill="#b2cbe5"></rect>
              <rect x="12" y="12" width="26" height="16" fill="#ccddf1"></rect>
              <rect x="12" y="28" width="26" height="8" fill="#e3eaf8"></rect>
              <rect x="3" y="6" width="8" height="8" fill="#ffe7c7"></rect>
              <rect x="3" y="6" width="8" height="2" fill="#5a3825"></rect>
              <rect x="4" y="8" width="2" height="2" fill="#000000"></rect>
              <rect x="8" y="8" width="2" height="2" fill="#000000"></rect>
              <rect x="5" y="11" width="4" height="1" fill="#d4a76a"></rect>
              <rect x="3" y="16" width="8" height="2" fill="#ffffff"></rect>
              <rect x="3" y="19" width="8" height="2" fill="#ffffff"></rect>
              <rect x="3" y="22" width="8" height="2" fill="#ffffff"></rect>
              <rect x="3" y="25" width="8" height="2" fill="#ffffff"></rect>
              <rect x="3" y="28" width="8" height="2" fill="#ffffff"></rect>
              <rect
                x="14"
                y="7"
                width="6"
                height="6"
                fill="#ff9c27"
              ></rect>{" "}
              <rect x="22" y="7" width="6" height="6" fill="#4caf50"></rect>{" "}
              <rect x="30" y="7" width="6" height="6" fill="#e91e63"></rect>{" "}
              <rect x="14" y="15" width="22" height="1" fill="#a0b4c8"></rect>{" "}
              <rect x="14" y="18" width="22" height="2" fill="#333333"></rect>
              <rect x="14" y="22" width="22" height="2" fill="#333333"></rect>
              <rect x="14" y="26" width="22" height="2" fill="#333333"></rect>
              <rect x="14" y="30" width="22" height="2" fill="#333333"></rect>
              <rect x="14" y="34" width="8" height="1" fill="#333333"></rect>
              <rect x="23" y="33" width="1" height="3" fill="#333333"></rect>
              <rect x="22" y="34" width="1" height="1" fill="#333333"></rect>
              <rect x="24" y="34" width="1" height="1" fill="#333333"></rect>
              <rect y="36" width="10" height="4" fill="#57a638"></rect>
              <rect x="2" y="37" width="2" height="2" fill="#ffffff"></rect>
              <rect x="5" y="37" width="3" height="2" fill="#ffffff"></rect>
              <rect x="34" y="37" width="2" height="2" fill="#ffffff"></rect>
              <rect x="37" y="37" width="2" height="2" fill="#ffffff"></rect>
              <rect x="31" y="37" width="2" height="2" fill="#ffffff"></rect>
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
