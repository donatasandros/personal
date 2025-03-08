import { TECH_STACK } from "@/config/tech-stack";

export function TechStack() {
  return (
    <div className="mb-8">
      <div className="border-border bg-window mb-2 flex items-center border-2 p-2">
        <div className="bg-accent mr-2 size-4"></div>
        <h2 className="text-lg font-bold">My Tech Stack</h2>
      </div>
      <div className="border-border border-2 bg-white p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-accent text-white">
              <th className="border-border border-2 p-2 text-left">Category</th>
              <th className="border-border border-2 p-2 text-left">Skills</th>
            </tr>
          </thead>
          <tbody>
            {TECH_STACK.map(({ category, tech }, index) => (
              <tr key={`tech-stack-${index}`} className="bg-window">
                <td className="border-border border-2 p-2 font-bold">
                  {category}
                </td>
                <td className="border-border border-2 p-2">{tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
