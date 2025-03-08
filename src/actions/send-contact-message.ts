"use server";

import { z } from "zod";

import { sql } from "@/lib/db";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export async function sendContactMessage(
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
  };

  const { success, data } = schema.safeParse(rawFormData);

  if (!success) {
    return {
      success: false,
      message: "Please fill out all fields with valid data.",
    };
  }

  try {
    await sql`INSERT INTO contact_messages (name, email, message) VALUES (${data.name}, ${data.email}, ${data.message})`;

    await fetch(process.env.DISCORD_WEBHOOK_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Portfolio Website",
        avatar_url:
          "https://7wcjkkywzt.ufs.sh/f/tCK54Qgs28eY6z4lSW5Fcg7E9QyarCt2enfPh8UuAXOY4SpV",
        embeds: [
          {
            title: "New contact form submission",
            description: "Someone has sent you a message on your website!",
            color: 3447003,
            fields: [
              {
                name: "Name",
                value: data.name,
                inline: false,
              },
              {
                name: "Email",
                value: `*${data.email}*`,
                inline: false,
              },
              {
                name: "Message",
                value: `\`\`\`text\n${data.message}\`\`\``,
                inline: false,
              },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });
  } catch {
    return {
      success: false,
      message: "Failed to submit your contact message.",
    };
  }

  return {
    success: true,
  };
}
