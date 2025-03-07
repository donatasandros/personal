"use client";

import * as React from "react";

import { sendContactMessage } from "@/actions/send-contact-message";
import { Button } from "@/components/ui/button";

import { BlinkingText } from "./ui/blinking-text";

export function ContactForm() {
  const [state, action, isLoading] = React.useActionState(sendContactMessage, {
    success: false,
  });

  return (
    <React.Fragment>
      {state.success ? (
        <div className="border border-[#aca899] bg-[#ffffff] p-4 text-center">
          <BlinkingText className="mb-2 font-bold text-[#008000]">
            Message sent successfully!
          </BlinkingText>
          <p>Thank you for contacting me. I&apos;ll get back to you soon!</p>
        </div>
      ) : (
        <form action={action} className="space-y-2">
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

          <div>
            <label htmlFor="contactName" className="mb-1 block text-sm">
              Name: <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="contactName"
              required
              className="w-full border-2 border-[#aca899] p-1"
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="mb-1 block text-sm">
              Email: <span className="text-[#ff0000]">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="contactEmail"
              required
              className="w-full border-2 border-[#aca899] p-1"
            />
          </div>
          <div>
            <label htmlFor="contactMessage" className="mb-1 block text-sm">
              Message: <span className="text-[#ff0000]">*</span>
            </label>
            <textarea
              className="w-full border-2 border-[#aca899] p-1"
              rows={4}
              name="message"
              id="contactMessage"
              required
            />
          </div>
          <div className="flex justify-center pt-2">
            <Button type="submit" disabled={isLoading}>
              Send Message
            </Button>
          </div>
        </form>
      )}
    </React.Fragment>
  );
}
