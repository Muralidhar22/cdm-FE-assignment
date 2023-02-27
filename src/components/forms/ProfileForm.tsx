import { useState, useRef, useEffect, ChangeEvent } from "react";
import Image from "next/image";

import UnSavedDialogBox from "../UnSavedDialogBox";
import FormInputBox from "@/components/FormInputBox";
import FormSaveButton from "../FormSaveButton";
import ToggleSwitch from "@/components/ToggleSwitch";
import {
  useProfileContext,
  ProfileContextType,
} from "@/contexts/Profile.context";
import { ProfileDataType } from "@/types/profile";

import toast from "react-hot-toast";

const ProfileForm = () => {
  const { profileData, setProfileData } =
    useProfileContext() as ProfileContextType;
  const [profileFormData, setProfileFormData] = useState(profileData);
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const isChanged =
      JSON.stringify(profileFormData) !== JSON.stringify(profileData);
    setIsFormChanged(isChanged);
  }, [profileFormData, profileData]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setProfileData(profileFormData);
    setIsFormChanged(false);
    toast.success("Saved Successfully!");
  };

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    isToggle?: boolean
  ) => {
    const key = e.target.name as keyof ProfileDataType;
    const value = isToggle ? !profileFormData[key] : e.target.value;
    setProfileFormData((prev) => ({ ...prev, [key]: value }));
  };

  const removeProfilePicture = () => {
    setProfileFormData((prev) => ({
      ...prev,
      avatar: "/assets/add-profile.svg",
    }));
  };

  const uploadProfilePicture = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const onProfileChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileFormData((prev) => ({
          ...prev,
          avatar: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex gap-4 items-center">
        <span className="rounded-full overflow-hidden w-20 h-20">
          <Image
            src={profileFormData.avatar}
            width={80}
            height={80}
            alt="profile picture"
          />
        </span>
        <button
          onClick={uploadProfilePicture}
          className="bg-primary-600 text-white p-2.5 rounded-lg text-sm"
        >
          Upload new picture
        </button>
        <input
          id="file-input"
          ref={inputFileRef}
          type="file"
          className="hidden"
          onChange={onProfileChangeHandler}
        />
        <button
          className="text-sm font-semibold p-2.5 rounded-lg bg-zinc-100"
          onClick={removeProfilePicture}
        >
          Delete
        </button>
        <div className="flex items-center gap-1">
          <span className="text-zinc-500">Looking for job</span>
          <ToggleSwitch
            name="isOpenForJob"
            onChangeHandler={onChangeHandler}
            toggleValue={profileFormData.isOpenForJob}
          />
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <FormInputBox
          value={profileFormData.displayName}
          type="text"
          name="displayName"
          id="displayName"
          label="display name"
          onChangeHandler={onChangeHandler}
          placeholder="enter your full name"
          note="Name entered above will be used for all issued certificates"
          required={true}
        />
        <FormInputBox
          value={profileFormData.profession}
          type="text"
          name="profession"
          id="profession"
          label="profession"
          onChangeHandler={onChangeHandler}
          placeholder="Enter your current profession"
          required={true}
        />
        <FormInputBox
          value={profileFormData.dob}
          type="date"
          name="dob"
          id="dob"
          label="date of birth"
          onChangeHandler={onChangeHandler}
          placeholder="DD/MM/YYYY"
          required={true}
        />
        <label htmlFor="gender" className="block font-semibold text-sm">
          Gender
        </label>
        <select
          name="gender"
          value={profileFormData.gender ?? ""}
          onChange={onChangeHandler}
          id="gender"
          className="w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:border-zinc-900 cursor-pointer"
          placeholder="what is your gender?"
        >
          <option value="" disabled>
            --choose option--
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <h2 className="font-bold text-xl">Section Visibility</h2>
        <span className="text-zinc-500">
          Select which sections and content should show on your profile page.
        </span>
        <section className="bg-zinc-50 rounded-2xl p-6 flex flex-col gap-3">
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-semibold">
                Followers and following
              </h3>
              <span className="text-zinc-500">
                Shows your followers and the users you follow on codedamn
              </span>
            </div>
            <ToggleSwitch
              name="visibilityFollowers"
              onChangeHandler={onChangeHandler}
              toggleValue={profileFormData.visibilityFollowers}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-semibold">XP</h3>
              <span className="text-zinc-500">
                Shows the XP you have earned
              </span>
            </div>
            <ToggleSwitch
              name="visibilityXP"
              onChangeHandler={onChangeHandler}
              toggleValue={profileFormData.visibilityXP}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h3 className="text-base font-semibold">Achievement badges</h3>
              <span className="text-zinc-500">
                Shows your relative percentile and proficiency
              </span>
            </div>
            <ToggleSwitch
              name="visibilityBadges"
              onChangeHandler={onChangeHandler}
              toggleValue={profileFormData.visibilityBadges}
            />
          </div>
        </section>

        <FormSaveButton isFormChanged={isFormChanged} />
        {isFormChanged && <UnSavedDialogBox />}
      </form>
    </div>
  );
};

export default ProfileForm;
