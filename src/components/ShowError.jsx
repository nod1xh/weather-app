import React from "react";

export default function ShowError({ errorInfo }) {
  return (
    <div className="w-2/4 h-96 text-[#CA0B00] rounded-md bg-opacity-30 bg-[#fdfdfd] flex items-center justify-center">
      <p className="text-3xl uppercase">{errorInfo}!</p>
    </div>
  );
}
