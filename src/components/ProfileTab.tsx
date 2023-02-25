import { useState } from "react";

import Portfolio from "./portfolio/Portfolio";
import Resume from "./resume/Resume";

const ProfileTab = () => {
    const [tab, setTab] = useState<"portfolio" | "resume">("portfolio")

    return (
        <>
        <div className="border-2 border-zinc-200 flex justify-start gap-10 py-2 px-6 rounded-xl">
        <button className={`font-medium rounded-lg py-2 px-4 ${tab === "portfolio" ? "text-primary-700 bg-primary-50 " : "bg-zinc-100 text-zinc-700"}`} onClick={() => setTab("portfolio")}>Portfolio</button>
        <button className={`font-medium rounded-lg py-2 px-4 ${tab === "resume" ? "text-primary-700 bg-primary-50" : "bg-zinc-100 text-zinc-700"}`} onClick={() => setTab("resume")}>Resume</button>
      </div>
        {tab === "portfolio"
            && <Portfolio />
        }
        {tab === "resume"
            && <Resume />
        }
        </>
    )
}

export default ProfileTab;