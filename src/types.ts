import type { AVATARS } from "./config/avatars";

export type GuestbookMessage = {
  name: string;
  email: string;
  avatar: (typeof AVATARS)[number];
  message: string;
  created_at: string;
};
