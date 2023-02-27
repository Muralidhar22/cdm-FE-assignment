import { nanoid } from "nanoid";
import { useState } from "react";
import Link from "next/link";

import { technologies } from "@/constants/technologies";
import FormInputBox from "../FormInputBox";
import { PlaygroundType } from "@/types/portfolio";
import { findTechStackValue } from "@/utils/findTechStackValue";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

import toast from "react-hot-toast";

const INITIAL_FORM_DATA: PlaygroundType = {
  hasDisplayed: false,
  participants: [],
  techStack: { id: "", displayName: "", imageSrc: "" },
  title: "",
  createDateTime: 0,
  id: "",
};

const NewPlaygroundForm = () => {
  const [formData, setFormData] = useState<PlaygroundType>(INITIAL_FORM_DATA);
  const { setPortfolioData } = usePortfolioContext() as PortfolioContextType;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log();
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeTechStackHandler = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = findTechStackValue(e.target.value);
    value && setFormData((prev) => ({ ...prev, techStack: { ...value } }));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      setPortfolioData((prev) => ({
        ...prev,
        playgrounds: [
          ...prev.playgrounds,
          { ...formData, id: nanoid(), createDateTime: new Date() },
        ],
      }));
    }
    toast.success("Saved Successfully!");
  };

  return (
    <div className="rounded-md bg-primary-50 p-6">
      <form onSubmit={onSubmitHandler}>
        <FormInputBox
          name="title"
          type="text"
          label="project title"
          id="title"
          onChangeHandler={onChangeHandler}
          value={formData.title}
          required={true}
          focusBorderClr="border-primary-600"
        />
        <label htmlFor="techStack" className="block font-semibold text-sm">
          Select tech stack for playground:
        </label>
        <select
          onChange={onChangeTechStackHandler}
          value={formData.techStack.id}
          id="techStack"
          className="w-full focus:outline-none  px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-primary-600 cursor-pointer"
        >
          <option value="" disabled>
            --choose option--
          </option>
          {technologies.map((tech) => (
            <option key={tech.id} value={tech.id}>
              {tech.displayName}
            </option>
          ))}
        </select>

        <div className="flex gap-2 justify-end mt-3">
          <Link
            shallow
            href="/edit?details=portfolio"
            className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4 border-2 border-zinc-200"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="cursor-pointer text-white bg-primary-600 rounded-lg py-2.5 font-semibold px-4 text-sm"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPlaygroundForm;
