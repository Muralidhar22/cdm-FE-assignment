import type { NextApiRequest, NextApiResponse } from "next";

const data = {
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
};
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(data);
};

export default handler;
