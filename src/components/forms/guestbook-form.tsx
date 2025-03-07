"use client";

import * as React from "react";

import { addGuestbookMessage } from "@/actions/add-guestbook-message";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AVATARS } from "@/config/avatars";
import { cn } from "@/lib/utils";

interface GuestbookFormProps {
  setShowForm: (value: boolean) => void;
}

export function GuestbookForm({ setShowForm }: GuestbookFormProps) {
  const [selectedAvatar, setSelectedAvatar] = React.useState<string>("default");

  const [state, action, isLoading] = React.useActionState(addGuestbookMessage, {
    success: false,
  });

  return (
    <React.Fragment>
      {state.success ? (
        <div className="border border-[#aca899] bg-white p-4 text-center">
          <p className="mb-2 font-bold text-[#008000]">
            Thank you for signing my guestbook!
          </p>
          <p>Your message has been added.</p>
        </div>
      ) : (
        <form action={action} className="border border-[#aca899] bg-white p-4">
          {!state.success && state.message && (
            <div className="mb-3 border-2 border-[#cc0000] bg-[#ffffcc] p-2">
              <div className="flex items-start">
                <div className="mr-2 flex h-5 w-5 items-center justify-center bg-[#cc0000] font-bold text-white">
                  !
                </div>
                <div className="text-sm text-[#cc0000]">{state.message}</div>
              </div>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="guestbook-name"
                  className="mb-1 block text-sm font-bold"
                >
                  Name: <span className="text-[#ff0000]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="guestbook-name"
                  required
                  className="w-full border-2 border-[#aca899] p-1"
                />
              </div>
              <div>
                <label
                  htmlFor="guestbook-email"
                  className="mb-1 block text-sm font-bold"
                >
                  Email: <span className="text-[#ff0000]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="guestbook-email"
                  required
                  className="w-full border-2 border-[#aca899] p-1"
                />
                <p className="mt-1 text-xs text-[#666666]">
                  (Will not be displayed publicly)
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-bold">
                  Choose Avatar:
                </label>
                <div className="flex flex-wrap gap-2 border border-[#aca899] bg-[#f5f5f5] p-2">
                  {AVATARS.map((avatar) => (
                    <button
                      key={avatar}
                      type="button"
                      onClick={() => setSelectedAvatar(avatar)}
                      className={cn(
                        "cursor-pointer p-1",
                        selectedAvatar === avatar &&
                          "border border-[#aca899] bg-[#316ac5]",
                      )}
                    >
                      <Avatar
                        type={avatar}
                        className="size-10 border border-black"
                      />
                    </button>
                  ))}
                </div>
                <input type="hidden" name="avatar" value={selectedAvatar} />
              </div>
              <div>
                <label className="mb-1 block text-sm font-bold">
                  Message: <span className="text-[#ff0000]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full border-2 border-[#aca899] p-1"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
            <Button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
}
