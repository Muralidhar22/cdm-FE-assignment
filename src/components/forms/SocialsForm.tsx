import { useState, useEffect } from "react";
import Link from "next/link";

import FormInputBox from "../FormInputBox";
import {
  useSocialsContext,
  SocialsContextType,
} from "@/contexts/Socials.context";
import { SocialsDataType } from "@/types/socials";
import UnSavedDialogBox from "../UnSavedDialogBox";

import toast from "react-hot-toast";

const SocialsForm = () => {
  const { socialsData, setSocialsData } =
    useSocialsContext() as SocialsContextType;
  const [socialsFormData, setSocialsFormData] =
    useState<SocialsDataType>(socialsData);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged =
      JSON.stringify(socialsFormData) !== JSON.stringify(socialsData);
    setIsFormChanged(isChanged);
  }, [socialsFormData, socialsData]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setSocialsData(socialsFormData);
    setIsFormChanged(false);
    toast.success("Saved Successfully!");
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name;
    setSocialsFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="grow">
      <form onSubmit={onSubmitHandler}>
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.github}
          label="github"
          placeholder="github profile URL"
          id="github"
          name="github"
          type="url"
        />
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.linkedin}
          label="linkedin"
          placeholder="linkedin profile URL"
          id="linkedin"
          name="linkedin"
          type="url"
        />
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.facebook}
          label="facebook"
          placeholder="facebook profile URL"
          id="facebook"
          name="facebook"
          type="url"
        />
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.instagram}
          label="instagram"
          placeholder="instagram profile URL"
          id="instagram"
          name="instagram"
          type="url"
        />
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.dribble}
          label="dribble"
          placeholder="dribble profile URL"
          id="dribble"
          name="dribble"
          type="url"
        />
        <FormInputBox
          required={false}
          onChangeHandler={onChangeHandler}
          value={socialsFormData.behance}
          label="behance"
          placeholder="behance profile URL"
          id="behance"
          name="behance"
          type="url"
        />
        <div className="flex gap-2">
          <Link
            href="/"
            className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={isFormChanged}
            className={`text-white ${
              isFormChanged ? "bg-primary-600" : "bg-primary-600/50"
            } rounded-lg py-2.5 font-semibold px-4 text-sm`}
          >
            Save Changes
          </button>
        </div>
        {isFormChanged && <UnSavedDialogBox />}
      </form>
    </div>
  );
};

export default SocialsForm;
