import type { GuestbookMessage } from "@/types";

import { AboutMe } from "@/components/about-me";
import { Contact } from "@/components/contact";
import { Guestbook } from "@/components/guestbook";
import { Header } from "@/components/header";
import { MenuBar } from "@/components/menu-bar";
import { Projects } from "@/components/projects";
import { StartBar } from "@/components/start-bar";
import { TechStack } from "@/components/tech-stack";
import { TitleBar } from "@/components/title-bar";
import { sql } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const [[{ count }], guestbookMessages] = (await sql.transaction([
    sql`SELECT COUNT(*) FROM views;`,
    sql`SELECT * FROM guestbook_messages ORDER BY created_at DESC;`,
    sql`INSERT INTO views DEFAULT VALUES;`,
  ])) as [{ count: number }[], GuestbookMessage[]];

  return (
    <div className="font-windows bg-[#008080] p-4 pb-14">
      <div className="mx-auto max-w-[900px] border-2 border-[#0a246a] shadow-xl">
        <TitleBar />
        <MenuBar />
        <div className="overflow-auto bg-white p-4">
          <Header />
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
