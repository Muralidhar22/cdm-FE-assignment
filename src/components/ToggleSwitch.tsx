import { ChangeEvent } from "react";

type PropsType = {
  name: string;
  onChangeHandler: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    isToggle?: boolean
  ) => void;
  toggleValue: boolean;
};

const ToggleSwitch = ({ name, onChangeHandler, toggleValue }: PropsType) => {
  console.log(toggleValue);
  return (
    <label className="switch">
      <input
        onChange={(e) => onChangeHandler(e, true)}
        name={name}
        checked={toggleValue}
        type="checkbox"
      />
      <span className="slider"></span>
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 55px;
          height: 30px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          -webkit-transition: 0.4s;
          border-radius: 50%;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: #4f46e5;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #4f46e5;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }
      `}</style>
    </label>
  );
};

export default ToggleSwitch;
