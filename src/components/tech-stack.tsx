import { TECH_STACK } from "@/config/tech-stack";

export function TechStack() {
  return (
    <div className="mb-8">
      <div className="bg-[#ece9d8] border-2 border-[#aca899] p-2 mb-2 flex items-center">
        <div className="w-4 h-4 bg-[#316ac5] mr-2"></div>
        <h2 className="text-lg font-bold">My Tech Stack</h2>
      </div>
      <div className="border-2 border-[#aca899] p-4 bg-[#ffffff]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#316ac5] text-white">
              <th className="border-2 border-[#aca899] p-2 text-left">
                Category
              </th>
              <th className="border-2 border-[#aca899] p-2 text-left">
                Skills
              </th>
            </tr>
          </thead>
          <tbody>
            {TECH_STACK.map(({ category, tech }, index) => (
              <tr key={`tech-stack-${index}`} className="bg-[#ece9d8]">
                <td className="border-2 border-[#aca899] p-2 font-bold">
                  {category}
                </td>
                <td className="border-2 border-[#aca899] p-2">{tech}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
