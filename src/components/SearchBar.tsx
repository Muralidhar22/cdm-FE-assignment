/* eslint-disable @typescript-eslint/no-empty-function */
import { useState } from "react";
import Image from "next/image";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`flex border-2 rounded-xl p-1 ${
        focus ? "border-slate-900" : "border-zinc-200"
      }`}
    >
      <Image
        src="/assets/search.svg"
        width="20"
        height="20"
        alt="search icon"
        className="cursor-pointer mr-1"
      />
      <input
        onChange={() => {}}
        type="search"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholder="Search"
        className="outline-none bg-transparent"
      />
      <span className="bg-zinc-100 rounded-lg px-1 py-2">
        <select
          className="text-zinc-500 bg-transparent outline-none cursor-pointer"
          name="search-selection"
          id=""
        >
          <option value="courses">courses</option>
        </select>
      </span>
    </div>
  );
};

export default SearchBar;
