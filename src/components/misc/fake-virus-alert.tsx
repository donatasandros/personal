"use client";

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function FakeVirusAlert() {
  const [isOpen, setIsOpen] = React.useState(false);

  const triggerAlert = React.useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  function handleClose() {
    setIsOpen(false);
  }

  function handleYesClick(e: React.MouseEvent) {
    e.stopPropagation();
    handleClose();

    setTimeout(() => {
      triggerAlert();
    }, 500);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95 && !isOpen) {
        triggerAlert();
      }
    }, 20000);

    return () => clearInterval(interval);
  }, [isOpen, triggerAlert]);

  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Content className="bg-window border-border fixed top-1/2 left-1/2 z-20 w-full max-w-[300px] translate-x-[-50%] translate-y-[-50%] border-2 shadow-xl">
          <div className="flex items-center justify-between bg-gradient-to-r from-[#ff0000] to-[#cc0000] p-1 text-white">
            <AlertDialogPrimitive.Title className="text-sm font-bold">
              ⚠️ WARNING: Security Alert
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Cancel asChild>
              <button className="mx-0.5 cursor-pointer px-2 hover:bg-white/20">
                X
              </button>
            </AlertDialogPrimitive.Cancel>
          </div>
          <div className="bg-window p-4">
            <div className="mb-4 flex">
              <span className="mr-4 text-3xl">⚠️</span>
              <div>
                <h2 className="mb-1 font-bold text-red-600">VIRUS DETECTED!</h2>
                <AlertDialogPrimitive.Description className="text-xs">
                  Your computer may be at risk! We have detected suspicious
                  activity on your system.
                </AlertDialogPrimitive.Description>
              </div>
            </div>
            <div className="mb-4 border border-red-600 bg-yellow-100 p-2 text-xs text-red-600">
              {Math.random() > 0.5 ? (
                <React.Fragment>
                  <p className="font-bold">Threat details:</p>
                  <p>Type: Trojan.JS.FakeAlert</p>
                  <p>Risk Level: High</p>
                  <p>Files affected: 13</p>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <p className="font-bold">YOUR SYSTEM IS AT RISK!</p>
                  <p>Windows has detected SPYWARE on your computer!</p>
                  <p>Personal and banking information at risk!</p>
                  <p>Click &quot;Remove Threats&quot; now!</p>
                </React.Fragment>
              )}
            </div>
            <div className="flex justify-between gap-2">
              {Math.random() > 0.5 ? (
                <React.Fragment>
                  <Button onClick={handleYesClick}>Remove Threats</Button>
                  <Button onClick={handleClose}>Ignore</Button>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Button onClick={handleYesClick}>Download Protection</Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </React.Fragment>
              )}
            </div>
            <div className="mt-4 text-center text-[10px] text-gray-500">
              Don&apos;t worry! This is just a joke. No real viruses here!
            </div>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  );
}
