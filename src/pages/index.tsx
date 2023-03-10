import Head from "next/head";

import Profile from "@/components/profile";
import ProfileTab from "@/components/profile/ProfileTab";

export default function Home() {
  return (
    <>
      <Head>
        <title>CDM Portfolio</title>
        <meta name="description" content="Codedamn profile for assignment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="max-w-3xl mx-auto mt-12">
        <Profile />
        <ProfileTab />
      </div>
    </>
  );
}
