import { nanoid } from "nanoid";
import { useState } from "react";
import Link from "next/link";

import { technologies } from "@/constants/technologies";
import FormInputBox from "../FormInputBox";
import { ProjectType } from "@/types/portfolio";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

import toast from "react-hot-toast";

const INITIAL_FORM_DATA: ProjectType = {
  hasDisplayed: false,
  id: nanoid(),
  imageSrc: "",
  projectUrl: "",
  techStack: [],
  title: "",
};

const NewProjectForm = () => {
  const [formData, setFormData] = useState<ProjectType>(INITIAL_FORM_DATA);
  const { setPortfolioData } = usePortfolioContext() as PortfolioContextType;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    setFormData((prev) => ({ ...prev, [key]: [e.target.value] }));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      setPortfolioData((prev) => ({
        ...prev,
        projects: [...prev.projects, { ...formData }],
      }));
    }
    setFormData(INITIAL_FORM_DATA);
    toast.success("Saved Successfully!");
  };

  const addTech = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTech = technologies.find((tech) => tech.id === e.target.value);
    if (newTech) {
      setFormData((prev) => ({
        ...prev,
        techStack: prev.techStack
          ? [...prev.techStack, { ...newTech }]
          : [{ ...newTech }],
      }));
    }
  };

  const removeTech = (id: string) => {
    const filteredStack = formData.techStack?.filter((tech) => tech.id !== id);
    setFormData((prev) => ({ ...prev, techStack: [...filteredStack] }));
  };

  const isTechStackSelected = (verifyId: string) => {
    const isSelected = formData.techStack.find((tech) => tech.id === verifyId);
    return isSelected;
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
        <FormInputBox
          name="imageSrc"
          label="project snapshot URL"
          type="url"
          id="imageSrc"
          onChangeHandler={onChangeHandler}
          value={formData.imageSrc}
          required={true}
          focusBorderClr="border-primary-600"
        />
        <FormInputBox
          name="projectUrl"
          label="project URL"
          type="url"
          id="projectUrl"
          onChangeHandler={onChangeHandler}
          value={formData.projectUrl}
          required={true}
          focusBorderClr="border-primary-600"
        />

        <label htmlFor="techStack" className="font-semibold text-sm">
          Tech stack:
        </label>
        <div className="flex flex-wrap gap-1">
          {formData.techStack?.map((tech) => (
            <span
              key={tech.id}
              className="rounded-md border-2 bg-primary-600 p-1 text-white relative text-base"
            >
              {tech.displayName}
              <span
                className="text-base absolute bg-zinc-500 rounded-full -top-1 -right-1 w-4 h-4 p-0.5 rounded-full bg-zinc text-white cursor-pointer grid place-content-center"
                onClick={() => removeTech(tech.id)}
              >
                -
              </span>
            </span>
          ))}
        </div>
        <select
          value=""
          onChange={addTech}
          required={formData.techStack.length < 1}
          className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-primary-600 cursor-pointer"
          name="techStack"
          id="techStack"
        >
          <option value="" disabled>
            --choose option--
          </option>
          {technologies.map((tech) => (
            <>
              {!isTechStackSelected(tech.id) && (
                <option key={tech.id} value={tech.id}>
                  {tech.displayName}
                </option>
              )}
            </>
          ))}
        </select>
        <div className="flex gap-2">
          <Link
            href="/edit?details=portfolio"
            shallow
            className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4"
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

export default NewProjectForm;
