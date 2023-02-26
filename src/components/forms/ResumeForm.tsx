import { useState, useEffect } from "react";

import FormSaveButton from "../FormSaveButton";
import SkillCheckBox from "../resume/SkillCheckBox";
import { technologies } from "@/constants/technologies";
import { useResumeContext, ResumeContextType } from "@/contexts/Resume.context";
import UnSavedDialogBox from "../UnSavedDialogBox";
import { findTechStackValue } from "@/utils/findTechStackValue";
import toast from "react-hot-toast";

const ResumeForm = () => {
  const { resumeData, setResumeData } = useResumeContext() as ResumeContextType;
  const [resumeFormData, setResumeFormData] = useState(resumeData);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged =
      JSON.stringify(resumeFormData) !== JSON.stringify(resumeData);
    setIsFormChanged(isChanged);
  }, [resumeFormData, resumeData]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setResumeData(resumeFormData);
    setIsFormChanged(false);
    toast.success("Saved Successfully!");
  };

  const onChangeSkillHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = findTechStackValue(e.target.value);
    if (e.target.checked) {
      value &&
        setResumeFormData((prev) => ({
          ...prev,
          techSkills: [...prev.techSkills, { ...value }],
        }));
    } else if (!e.target.checked) {
      setResumeFormData((prev) => ({
        ...prev,
        techSkills: prev.techSkills.filter(
          (skill) => skill.id !== e.target.value
        ),
      }));
    }
  };

  const onChangeTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeFormData((prev) => ({ ...prev, description: e.target.value }));
  };

  const hasTechSkill = (compareSkill: string): boolean => {
    let hasSkill = false;
    resumeFormData.techSkills.forEach((skill) => {
      if (skill.id === compareSkill) {
        hasSkill = true;
      }
    });
    return hasSkill;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold">Resume Information</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="about" className="block font-semibold text-sm">
            About
          </label>
          <textarea
            onChange={onChangeTextHandler}
            name="about"
            id="about"
            value={resumeFormData.description}
            className="block w-full h-24 px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-zinc-900"
            rows={10}
          ></textarea>
          <span className="text-zinc-500">Tell us about yourself</span>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Manage Tech Skills</h2>
          <div className="flex flex-wrap gap-1">
            {technologies.map((skill) => (
              <SkillCheckBox
                key={skill.id}
                skillId={skill.id}
                skillName={skill.displayName}
                hasTechSkill={hasTechSkill}
                onChangeSkillHandler={onChangeSkillHandler}
              />
            ))}
          </div>
        </div>
        <FormSaveButton isFormChanged={isFormChanged} />
        {isFormChanged && <UnSavedDialogBox />}
      </form>
    </div>
  );
};

export default ResumeForm;
