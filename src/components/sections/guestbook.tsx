"use client";

import * as React from "react";

import type { GuestbookMessage } from "@/types";

import { GuestbookForm } from "@/components/forms/guestbook-form";
import { Avatar } from "@/components/ui/avatar";
import { BlinkingText } from "@/components/ui/blinking-text";
import { Button } from "@/components/ui/button";

interface GuestbookProps {
  messages: GuestbookMessage[];
}

export function Guestbook({ messages }: GuestbookProps) {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center border-2 border-[#aca899] bg-[#ece9d8] p-2">
        <div className="mr-2 size-4 bg-[#316ac5]"></div>
        <h2 className="text-lg font-bold">Guestbook</h2>
      </div>
      <div className="border-2 border-[#aca899] bg-white p-4">
        <div>
          <div className="mb-6 text-center">
            <BlinkingText className="mb-2 text-xl font-bold text-[#ff0000]">
              Sign My Guestbook!!!
            </BlinkingText>
            <p
              className="text-[#0000ff]"
              style={{ fontFamily: "Comic Sans MS, cursive" }}
            >
              Let me know you were here! Leave a message for future visitors!
            </p>
            <div className="mt-4 flex justify-center">
              <div className="relative overflow-x-hidden border-2 border-[#ffcc66] bg-[#ffff99] p-2">
                <div className="animate-marquee block transform font-bold whitespace-nowrap text-[#cc6600]">
                  <span>
                    {messages.length} visitors have signed my guestbook! Will
                    you be next?
                  </span>
                </div>
              </div>
            </div>
          </div>
          {!showForm ? (
            <div className="mb-6 flex justify-center">
              <Button onClick={() => setShowForm(true)}>Sign Guestbook</Button>
            </div>
          ) : (
            <div className="mb-6 border-2 border-[#aca899] bg-[#ece9d8] p-4">
              <div className="mb-4 bg-[#316ac5] p-1 font-bold text-white">
                Sign My Guestbook
              </div>
              <GuestbookForm setShowForm={setShowForm} />
            </div>
          )}
          <div className="border-2 border-[#aca899] bg-[#ece9d8] p-2">
            <div className="mb-2 bg-[#316ac5] p-1 font-bold text-white">
              Recent Guestbook Entries
            </div>
            <div className="max-h-[400px] space-y-4 overflow-y-auto p-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className="border border-[#aca899] bg-white p-3"
                >
                  <div className="flex items-start">
                    <div className="mr-3">
                      <Avatar
                        type={message.avatar}
                        className="size-[50px] border border-black"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <div className="font-bold text-[#0000ff]">
                          {message.name}
                        </div>
                        <div className="text-xs text-[#666666]">
                          {new Date(message.created_at).toLocaleDateString(
                            "en-US",
                          )}
                        </div>
                      </div>
                      <div className="mt-2 border-t border-[#eeeeee] pt-2 text-sm">
                        {message.message}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center text-xs text-[#666666]">
            <p>
              Guestbook powered by GuestbookMaster 2003 - Free for
              non-commercial use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
