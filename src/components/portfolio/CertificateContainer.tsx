import Image from "next/image";
import Link from "next/link";

import { technologyIcons } from "@/constants/technologyIcons";
import { CertificateType } from "@/types/portfolio";

const CertificateContainer = ({ data }: { data: CertificateType }) => {
    return (
        <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 justify-between flex-col gap-2">
            <div>
            {
               data.type === "achievement"
               ?
               <Image 
                   width={40}
                   height={40}
                   alt={data.title}
                   src="/assets/achievement.svg"
               />
               :
               <Image 
                   width={40}
                   height={40}
                   alt={data.title}
                   src={technologyIcons[data.technology!]}
               />
            }
            </div>
            <h3>{data.title}</h3>
            <div>Issued on {data.issueDate}</div>
            <Link href="#">See credentials</Link>
        </div>
    )
}

export default CertificateContainer;