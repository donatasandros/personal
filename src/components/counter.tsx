import { sql } from "@/lib/db";

export async function Counter() {
  const [{ count }] = await sql`SELECT COUNT(*) FROM views;`;

  return (
    <div className="inline-block bg-white border-2 border-[#aca899] px-2 py-1 text-sm">
      <span className="font-bold">Visitors:</span>{" "}
      {count.toString().padStart(5, "0")}
    </div>
  );
}
