import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { ProfileDataType } from "@/types/profile";

const INITIAL_PROFILE_DATA: ProfileDataType = {
  avatar: "/assets/default-pp.png",
  displayName: "Muralidhar Akkireddy",
  about:
    "Web Developer who's eager to learn and looking for opportunities to get hired as a developer.",
  profession: "Learner",
  dob: "2000-04-14",
  gender: "Male",
  visibilityFollowers: true,
  visibilityXP: true,
  visibilityBadges: true,
  isOpenForJob: true,
  location: "India",
  coverImage: "/assets/profile-default-bg.png",
};

export type ProfileContextType = {
  profileData: ProfileDataType;
  setProfileData: Dispatch<SetStateAction<ProfileDataType>>;
};

type ProfileProviderPropsType = {
  children: ReactNode;
};

const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: ProfileProviderPropsType) => {
  const [profileData, setProfileData] =
    useState<ProfileDataType>(INITIAL_PROFILE_DATA);
  const value = { profileData, setProfileData };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export const useProfileContext = () => useContext(ProfileContext);
