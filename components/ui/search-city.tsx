import React from "react";

export default function SearchCity() {
  return (
    <div className="w-full flex gap-2 ">
      <div className="flex gap-4  w-full items-center">
        <input
          className=" input  border input-ghost-primary"
          placeholder="Search city..."
        />
        <button className="btn btn-solid-primary ">Go</button>
      </div>
    </div>
  );
}
