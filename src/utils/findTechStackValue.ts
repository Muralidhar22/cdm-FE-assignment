import { technologies } from "@/constants/technologies"
import { TechType } from "@/types/technologies"

export const findTechStackValue = (fetchId: string) : TechType | null => {
    const value = technologies.find((tech) => tech.id === fetchId)
    return value ?? null
}

export const findTechStackValueFrom = (list: TechType[], checkId: string): boolean => {
    const isPresent = list.find((tech) => tech.id === checkId)
    return !!isPresent
}