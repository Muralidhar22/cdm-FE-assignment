import Image from "next/image";
import Link from "next/link";

import { CertificateType, PortfolioDataType } from "@/types/portfolio";
import { format } from "date-fns";
import { SetStateAction } from "react";

type PropsType = {
    data:CertificateType
    isOption?: boolean
    setData?: React.Dispatch<SetStateAction<PortfolioDataType>>
}

const CertificateContainer = ({ data, isOption , setData }: PropsType) => {
    
    const onClickHandler = () => {
        if(setData) {     
            setData(prev => (
                {
                    ...prev,
                    certificates: prev.certificates.map((cert) => (
                        cert.id === data.id ?
                        { ...cert, hasDisplayed: !cert.hasDisplayed }
                        : cert
                        ))
                }
            ))
        }
    }
    
    
    const contentImage = () => {
        if(data.certType === "achievement") {
            return (<Image
                className="block"
                width={40}
                height={40}
                alt={data.title}
                src="/assets/achievement.svg"
                />)
            } else if (data.certType === "technology" && data.technology) {
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
    
    if(isOption) {
        return(
            <div onClick={onClickHandler} role="option" className={`border-2 rounded-lg cursor-pointer p-4 ${data.hasDisplayed ? "border-primary-600 bg-primary-50" : "border-zinc-100 bg-zinc-50"}`}>
                        <div className="justify-between flex flex-col gap-2">
            {contentImage()}
            <h3>{data.title}</h3>
            <div>Issued on {format(new Date(data.issueDate), 'MMM do, yyyy')}</div>
            <Link href={data.certUrl} target={"_blank"} rel="noreferrer noopener">See credentials</Link>
        </div>
                
            </div>
        )
    }
    
    return (
        <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 justify-between flex-col gap-2">
            {contentImage()}
            <h3>{data.title}</h3>
            <div>Issued on {format(new Date(data.issueDate), 'MMM do, yyyy')}</div>
            <Link href={data.certUrl} target={"_blank"} rel="noreferrer noopener">See credentials</Link>
        </div>
    )
}

export default CertificateContainer;