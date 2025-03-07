"use client";

import * as React from "react";

export function Counter() {
  const [count] = React.useState(0);

  return (
    <div className="inline-block bg-white border-2 border-[#aca899] px-2 py-1 text-sm">
      <span className="font-bold">Visitors:</span>{" "}
      {count.toString().padStart(5, "0")}
    </div>
  );
}
