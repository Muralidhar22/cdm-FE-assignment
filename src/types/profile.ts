export type ProfileDataType = {
  avatar: string;
  displayName: string;
  about: string;
  profession: string;
  dob: string;
  gender: "Male" | "Female" | "Other";
  visibilityFollowers: boolean;
  visibilityXP: boolean;
  visibilityBadges: boolean;
  isOpenForJob: boolean;
  location: string;
};
