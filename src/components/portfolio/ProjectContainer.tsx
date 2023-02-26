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
      <div className="w-80 h-44 bg-[#C4C4C4] rounded">
        {data.imageSrc && (
          <Image
            className="w-full h-full"
            src={data.imageSrc}
            alt={data.title}
            width={320}
            height={170}
          />
        )}
      </div>
      <h3 className="font-bold text-lg">{data.title}</h3>
      {data.techStack.map((tech) => {
        return (
          <span key={tech.id}>
            <Image
              src={tech.imageSrc}
              alt={tech.displayName}
              width={45}
              height={45}
            />
            <span>{tech.displayName}</span>
          </span>
        );
      })}
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
