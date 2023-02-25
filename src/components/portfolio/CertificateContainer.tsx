import Image from "next/image";
import Link from "next/link";

import { CertificateType } from "@/types/portfolio";

const CertificateContainer = ({ data }: { data: CertificateType }) => {
    
    
    const contentImage = () => {
        if(data.type === "achievement") {
            return (<Image
                className="block"
                width={40}
                height={40}
                alt={data.title}
                src="/assets/achievement.svg"
                />)
            } else if (data.type === "technology" && data.technology) {
            return(
                <Image 
                className="block"
                width={40}
                height={40}
                alt={data.title}
                src={data.technology.imageSrc}
            />  
            )
        }
        return null
    }
    
    return (
        <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 justify-between flex-col gap-2">
            {contentImage()}
            <h3>{data.title}</h3>
            <div>Issued on {data.issueDate}</div>
            <Link href="#">See credentials</Link>
        </div>
    )
}

export default CertificateContainer;