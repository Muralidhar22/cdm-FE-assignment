import { nanoid } from "nanoid";
import { useState } from "react";
import Link from "next/link";

import { technologies } from "@/constants/technologies";
import FormInputBox from "../FormInputBox";
import { findTechStackValue } from "@/utils/findTechStackValue";
import { CertificateType, CertType } from "@/types/portfolio";
import {
  usePortfolioContext,
  PortfolioContextType,
} from "@/contexts/Portfolio.context";

import toast from "react-hot-toast";

const INITIAL_FORM_DATA: CertificateType = {
  hasDisplayed: false,
  id: nanoid(),
  issueDate: "",
  certType: "technology",
  technology: { id: "", displayName: "", imageSrc: "" },
  title: "",
  certUrl: "",
};

const NewCertificateForm = () => {
  const { setPortfolioData } = usePortfolioContext() as PortfolioContextType;
  const [formData, setFormData] = useState<CertificateType>(INITIAL_FORM_DATA);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onChangeSelectHandler = (
    e: React.ChangeEvent<HTMLSelectElement>,
    type: "techStack" | "certType"
  ) => {
    if (type === "techStack") {
      const value = findTechStackValue(e.target.value);
      value && setFormData((prev) => ({ ...prev, technology: { ...value } }));
    } else if (type === "certType") {
      setFormData((prev) => ({
        ...prev,
        certType: e.target.value as CertType,
      }));
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      setPortfolioData((prev) => ({
        ...prev,
        certificates: [...prev.certificates, { ...formData }],
      }));
    }
    setFormData(INITIAL_FORM_DATA);
    toast.success("Saved Successfully!");
  };

  return (
    <div className="rounded-md bg-primary-50 p-6">
      <form onSubmit={onSubmitHandler}>
        <FormInputBox
          name="title"
          type="text"
          label="certificate title"
          id="title"
          onChangeHandler={onChangeHandler}
          value={formData.title}
          required={true}
          focusBorderClr="border-primary-600"
        />
        <FormInputBox
          type="date"
          label="Select issue date"
          name="issueDate"
          id="issueDate"
          onChangeHandler={onChangeHandler}
          value={formData.issueDate}
          required={true}
          focusBorderClr="border-primary-600"
        />
        <FormInputBox
          type="url"
          label="certificate url"
          name="certUrl"
          id="certUrl"
          placeholder="paste/type certificate your URL"
          onChangeHandler={onChangeHandler}
          required={true}
          focusBorderClr="border-primary-600"
          value={formData.certUrl}
        />
        <label htmlFor="techStack" className="block font-semibold text-sm">
          Select tech stack for playground:
        </label>
        <select
          onChange={(e) => onChangeSelectHandler(e, "certType")}
          value={formData.certType}
          className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:outline-none focus:border-primary-600 cursor-pointer mb-4"
          id="techStack"
        >
          <option value="" disabled>
            --choose option--
          </option>
          <option value="technology">Technology (Technical)</option>
          <option value="achievement">Achievement</option>
        </select>
        {formData.certType === "technology" && (
          <>
            <label htmlFor="techStack" className="block font-semibold text-sm">
              Select tech stack for playground:
            </label>
            <select
              required
              onChange={(e) => onChangeSelectHandler(e, "techStack")}
              name="techStack"
              value={formData.technology?.id}
              className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-primary-600 cursor-pointer focus:outline-none border-2 border-zinc-200"
              id="techStack"
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
          </>
        )}
        <div className="flex gap-2 justify-end mt-3">
          <Link
            shallow
            href="/edit?details=portfolio"
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

export default NewCertificateForm;
