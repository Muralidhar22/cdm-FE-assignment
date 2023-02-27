import { technologies } from "@/constants/technologies";
import { TechType } from "@/types/technologies";

// export const fetchRandomTech = (): TechType => {
//   return technologies[Math.floor(Math.random() * technologies.length)];
// };

export const fetchMultipleTech = (length = 1): TechType | TechType[] => {
  if (length === 1) {
    return technologies[0];
  }
  const tech: TechType[] = technologies.slice(0, length);
  // while (length) {
  //   const value = technologies[Math.floor(Math.random() * technologies.length)];
  //   if (!findTechStackValueFrom(randomTech, value.id)) {
  //     randomTech.push(value);
  //     length--;
  //   }
  // }
  return tech;
};
