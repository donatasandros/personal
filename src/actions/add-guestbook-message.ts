"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { AVATARS } from "@/config/avatars";
import { sql } from "@/lib/db";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
  avatar: z.enum(AVATARS),
});

export async function addGuestbookMessage(
  _: {
    success: boolean;
    message?: string;
  },
  formData: FormData,
) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    avatar: formData.get("avatar"),
  };

  const { success, data } = schema.safeParse(rawFormData);

  if (!success) {
    return {
      success: false,
      message: "Please fill out all fields with valid data.",
    };
  }

  try {
    await sql`INSERT INTO guestbook_messages (name, email, avatar, message) VALUES (${data.name}, ${data.email}, ${data.avatar}, ${data.message})`;
  } catch {
    return {
      success: false,
      message: "Failed to submit your guestbook message.",
    };
  }

  revalidatePath("/");

  return {
    success: true,
  };
}
