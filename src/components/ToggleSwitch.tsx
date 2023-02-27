import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";

type PropsType = {
  name: string;
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    isToggle?: boolean
  ) => void;
  toggleValue: boolean;
};

const ToggleSwitch = ({ name, onChangeHandler, toggleValue }: PropsType) => {
  const [checked, setChecked] = useState<boolean>(toggleValue);
  const id = nanoid();

  return (
    <label
      htmlFor={id}
      className={`w-11 transition-all h-6 overflow-hidden rounded-full relative p-1 cursor-pointer ${
        checked ? "bg-primary-600" : "bg-zinc-300"
      }`}
    >
      <input
        id={id}
        onChange={(e) => {
          setChecked((prev) => !prev);
          onChangeHandler(e, true);
        }}
        name={name}
        checked={toggleValue}
        type="checkbox"
        className="hidden"
      />
      <span
        className={`w-4 h-4 rounded-full transition-all bg-white block relative ${
          checked && "translate-x-5"
        }`}
      ></span>
    </label>
  );
};

export default ToggleSwitch;
