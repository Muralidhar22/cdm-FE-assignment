import { technologies } from "@/constants/technologies";
import { TechType } from "@/types/technologies";
import { findTechStackValueFrom } from "./findTechStackValue";

export const fetchRandomTech = (): TechType => {
        return technologies[Math.floor(Math.random() * technologies.length)]
}

export const fetchMultipleTech = (length = 1) => {
    const randomTech:TechType[] = []
    while(length) {
        const value = technologies[Math.floor(Math.random() * technologies.length)]
        if(!findTechStackValueFrom(randomTech, value.id)) {
            randomTech.push(value)
            length--
        }
    }
    return randomTech
}