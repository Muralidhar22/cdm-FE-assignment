import { useContext, createContext, ReactNode, useState, Dispatch, SetStateAction } from "react"

import { SocialsDataType } from "@/types/socials"

const INITIAL_SOCIALS_DATA : SocialsDataType = {
        github: "https://github.com/Muralidhar22",
        linkedin: "",
        facebook: "",
        instagram: "",
        dribble: "",
        behance: ""
}

export type SocialsContextType = {
    socialsData: SocialsDataType
    setSocialsData: Dispatch<SocialsDataType>
}

type SocialsProviderPropsType = {
    children: ReactNode
}

const SocialsContext = createContext<SocialsContextType | undefined>(undefined)

export const SocialsProvider = ({ children }: SocialsProviderPropsType) => {
    const [socialsData, setSocialsData] = useState<SocialsDataType>(INITIAL_SOCIALS_DATA)
    const value = { socialsData, setSocialsData }
    return <SocialsContext.Provider value={value}>{children}</SocialsContext.Provider>
}

export const useSocialsContext = () => useContext(SocialsContext)