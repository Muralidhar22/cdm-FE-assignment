import { useState, useEffect } from "react";

import FormInputBox from "../FormInputBox";
import FormSaveButton from "../FormSaveButton";
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
    <div className="min-w-3xl mx-auto">
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
        <FormSaveButton isFormChanged={isFormChanged} />
        {isFormChanged && <UnSavedDialogBox />}
      </form>
    </div>
  );
};

export default SocialsForm;
