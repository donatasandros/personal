import type { GuestbookMessage } from "@/types";

import { MenuBar } from "@/components/misc/menu-bar";
import { StartBar } from "@/components/misc/start-bar";
import { TitleBar } from "@/components/misc/title-bar";
import { AboutMe } from "@/components/sections/about-me";
import { Contact } from "@/components/sections/contact";
import { Guestbook } from "@/components/sections/guestbook";
import { Projects } from "@/components/sections/projects";
import { TechStack } from "@/components/sections/tech-stack";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const [[{ count }], guestbookMessages] = (await sql.transaction([
    sql`SELECT COUNT(*) FROM views;`,
    sql`SELECT * FROM guestbook_messages ORDER BY created_at DESC;`,
    sql`INSERT INTO views DEFAULT VALUES;`,
  ])) as [{ count: number }[], GuestbookMessage[]];

  return (
    <div className="font-windows p-4 pb-14">
      <div className="mx-auto max-w-[900px] border-2 border-[#0a246a] shadow-xl">
        <TitleBar />
        <MenuBar />
        <div className="overflow-auto bg-white p-4">
          <div className="mb-8 text-center">
            <div className="inline-block">
              <div className="mb-2 text-4xl font-bold text-[#0000ff]">
                My Portfolio!
              </div>
              <div className="h-2 bg-[#ff0000]"></div>
              <div className="h-2 bg-[#00ff00]"></div>
              <div className="h-2 bg-[#0000ff]"></div>
            </div>
          </div>
          <AboutMe count={count} />
          <TechStack />
          <Projects />
          <Guestbook messages={guestbookMessages} />
          <Contact />
        </div>
      </div>
      <StartBar />
    </div>
  );
}
