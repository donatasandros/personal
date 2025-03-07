import { TECH_STACK } from "@/config/tech-stack";

export function TechStack() {
  return (
    <div className="mb-8">
      <div className="mb-2 flex items-center border-2 border-[#aca899] bg-[#ece9d8] p-2">
        <div className="mr-2 h-4 w-4 bg-[#316ac5]"></div>
        <h2 className="text-lg font-bold">My Tech Stack</h2>
      </div>
      <div className="border-2 border-[#aca899] bg-[#ffffff] p-4">
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
