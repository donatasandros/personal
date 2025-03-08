"use client";

import * as PopoverPrimitive from "@radix-ui/react-popover";
import * as React from "react";
import { z } from "zod";

import { Avatar } from "@/components/ui/avatar";
import {
  AUTO_RESPONSES,
  DEFAULT_RESPONSES,
  INITIAL_MESSAGES,
  ONLINE_USERS,
} from "@/config/chat";
import { cn } from "@/lib/utils";

const schema = z.object({
  content: z.string().min(1),
});

export function StartBarChat() {
  const [messages, setMessages] = React.useState(INITIAL_MESSAGES);
  const [newMessage, setNewMessage] = React.useState("");
  const [isMinimized, setIsMinimized] = React.useState(false);
  const chatEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isMinimized]);

  function sendMessage() {
    const { success } = schema.safeParse({ content: newMessage });
    if (!success) return;

    const userMessage = {
      id: crypto.randomUUID(),
      sender: "You",
      content: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    setTimeout(
      () => {
        let responseText = "";
        const lowercaseMessage = newMessage.toLowerCase();

        for (const response of AUTO_RESPONSES) {
          if (
            response.keywords.some((keyword) =>
              lowercaseMessage.includes(keyword),
            )
          ) {
            responseText =
              response.responses[
                Math.floor(Math.random() * response.responses.length)
              ];
            break;
          }
        }

        if (!responseText) {
          responseText =
            DEFAULT_RESPONSES[
              Math.floor(Math.random() * DEFAULT_RESPONSES.length)
            ];
        }

        const randomUser =
          ONLINE_USERS[Math.floor(Math.random() * (ONLINE_USERS.length - 1))];

        const autoMessage = {
          id: crypto.randomUUID(),
          sender: randomUser.name,
          content: responseText,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, autoMessage]);
      },
      1000 + Math.random() * 2000,
    );
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <PopoverPrimitive.Popover onOpenChange={() => setIsMinimized(false)}>
      <PopoverPrimitive.Trigger asChild>
        <button className="bg-button data-[state=open]:bg-accent data-[state=open]:text-highlightText text-text border-border mx-0.5 flex h-8 cursor-pointer items-center rounded border px-2">
          <span>Messenger</span>
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Content align="start" side="top" sideOffset={8}>
        <div className="border-border w-80 border-2 shadow-lg">
          <div className="from-titleBarFrom to-titleBarTo text-highlightText flex items-center justify-between bg-gradient-to-r p-1">
            <div>
              <span className="text-sm font-bold">Messenger</span>
            </div>
            <div className="flex">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="mx-0.5 cursor-pointer px-2 hover:bg-[#3a6ea5]"
              >
                _
              </button>
              <PopoverPrimitive.Close asChild>
                <button className="mx-0.5 cursor-pointer bg-[#ff0000]/80 px-2 hover:bg-[#ff0000]">
                  X
                </button>
              </PopoverPrimitive.Close>
            </div>
          </div>
          {isMinimized ? (
            <button
              onClick={() => setIsMinimized(false)}
              className="bg-window border-border flex w-full cursor-pointer justify-between border-t p-1 text-xs"
            >
              <span>Messenger</span>
              <span>
                {new Date().toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                })}
              </span>
            </button>
          ) : (
            <React.Fragment>
              <div className="bg-window p-2">
                <div className="border-border mb-2 border bg-white p-1 text-xs">
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {ONLINE_USERS.map(({ id, name, status }) => (
                      <div
                        key={id}
                        className="flex items-center"
                        title={`${name} - ${status}`}
                      >
                        <div
                          className={cn("mr-1 size-2 rounded-full", {
                            "bg-[#00cc00]": status === "online",
                            "bg-[#ffcc00]": status === "away",
                            "bg-[#cc0000]": status === "busy",
                          })}
                        ></div>
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-border mb-2 h-60 overflow-y-auto border bg-white p-2">
                  {messages.map(({ id, sender, content, timestamp }) => (
                    <div
                      key={id}
                      className={cn(
                        "mb-2",
                        sender === "You" ? "text-right" : "text-left",
                      )}
                    >
                      <div className="inline-block max-w-[80%]">
                        <div
                          className={cn(
                            "rounded px-2 py-1 text-xs",
                            sender === "You"
                              ? "bg-accent text-highlightText flex-row-reverse"
                              : "text-text bg-[#e0e0e0]",
                          )}
                        >
                          <div className="mb-1 flex items-center gap-1">
                            {sender !== "You" && (
                              <Avatar
                                type={
                                  ONLINE_USERS.find(
                                    ({ name }) => name === sender,
                                  )?.avatar || "default"
                                }
                                className="size-4"
                              />
                            )}
                            <span className="font-bold">{sender}</span>
                            {sender === "You" && (
                              <Avatar type="gamer" className="size-4" />
                            )}
                          </div>
                          <div>{content}</div>
                        </div>
                        <div className="mt-1 text-[10px] text-gray-500">
                          {new Date(timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef}></div>
                </div>
                <div className="flex">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type a message..."
                    className="border-border w-full resize-none border p-1 text-xs"
                    rows={2}
                  />
                  <button
                    onClick={sendMessage}
                    className="border-border bg-button ml-1 cursor-pointer border px-2"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div className="bg-window border-border flex justify-between border-t p-1 text-xs">
                <span>Messenger</span>
                <span>
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </React.Fragment>
          )}
        </div>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Popover>
  );
}
