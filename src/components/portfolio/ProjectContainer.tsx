import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

import { PortfolioDataType, ProjectType } from "@/types/portfolio";

type ProjectComponentPropsType = {
  data: ProjectType;
  isOption?: boolean;
  setData?: Dispatch<SetStateAction<PortfolioDataType>>;
};

const ProjectLayout = ({ data, isOption }: ProjectComponentPropsType) => {
  return (
    <div
      className={`${
        !isOption && "p-4 border-2 rounded-lg border-zinc-100 bg-zinc-50"
      }`}
    >
      <div className="h-44 bg-[#C4C4C4] rounded">
        {data.imageSrc && (
          <Image
            className="w-full h-full block"
            src={data.imageSrc}
            alt={data.title}
            width={320}
            height={170}
          />
        )}
      </div>
      <h3 className="font-bold mt-5 text-lg">{data.title}</h3>
      <div className="flex gap-1.5 pt-2.5 overflow-hidden text-ellipsis">
        {data.techStack.map((tech, idx) => {
          return (
            <span key={tech.id} className="flex gap-1.5 items-center">
              <span className="flex gap-0.5 items-center">
                <Image
                  src={tech.imageSrc}
                  alt={tech.displayName}
                  width={20}
                  height={20}
                />
                <span className="text-zinc-500 text-sm font-xl flex item-center">
                  {tech.displayName}
                </span>
              </span>
              {idx < data.techStack.length - 1 && (
                <span className="text-zinc-500 font-bold text-base">
                  &bull;
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const ProjectContainer = ({
  data,
  isOption,
  setData,
}: ProjectComponentPropsType) => {
  const onClickHandler = () => {
    if (setData) {
      setData((prev) => ({
        ...prev,
        projects: prev.projects.map((project) =>
          project.id === data.id
            ? { ...project, hasDisplayed: !project.hasDisplayed }
            : project
        ),
      }));
    }
  };

  if (isOption) {
    return (
      <div
        onClick={onClickHandler}
        role="option"
        aria-selected={data.hasDisplayed}
        className={`cursor-pointer p-4 border-2 rounded-lg
                ${
                  data.hasDisplayed
                    ? "border-primary-600 bg-primary-50"
                    : "border-zinc-100 bg-zinc-50"
                }
            `}
      >
        <ProjectLayout data={data} isOption={isOption} />
      </div>
    );
  }

  return <ProjectLayout data={data} isOption={isOption} />;
};

export default ProjectContainer;
