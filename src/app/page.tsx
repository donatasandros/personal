import { TitleBar } from "@/components/title-bar";
import { MenuBar } from "@/components/menu-bar";
import { Header } from "@/components/header";
import { AboutMe } from "@/components/about-me";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { StartBar } from "@/components/start-bar";
import { sql } from "@/lib/db";

export default async function Home() {
  await sql`INSERT INTO views DEFAULT VALUES;`;

  return (
    <div className="bg-[#008080] pb-14 p-4 font-windows">
      <div className="max-w-[900px] mx-auto shadow-xl border-2 border-[#0a246a]">
        <TitleBar />
        <MenuBar />
        <div className="bg-white p-4 overflow-auto">
          <Header />
          <AboutMe />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </div>
      <StartBar />
    </div>
  );
}
