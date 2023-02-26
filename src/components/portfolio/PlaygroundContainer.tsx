import Image from "next/image";

import {
  useProfileContext,
  ProfileContextType,
} from "@/contexts/Profile.context";
import { formatDistanceToNow } from "date-fns";
import { PlaygroundType, PortfolioDataType } from "@/types/portfolio";
import { Dispatch, SetStateAction } from "react";

type PropsType = {
  isOption?: boolean;
  setData?: Dispatch<SetStateAction<PortfolioDataType>>;
  data: PlaygroundType;
};

const PlaygroundLayout = ({
  data,
  isOption,
}: {
  data: PlaygroundType;
  isOption?: boolean;
}) => {
  const { profileData } = useProfileContext() as ProfileContextType;

  return (
    <div
      className={`${
        !isOption && "border-2 border-zinc-100 bg-zinc-50 rounded-lg"
      } flex p-4 items-start gap-2`}
    >
      <Image
        src={data.techStack.imageSrc}
        alt={data.techStack.displayName}
        width={45}
        height={45}
      />
      <div className="flex justify-between flex-col">
        <h3 className="font-semibold text-lg">
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
        </h3>
        <div className="flex items-center gap-1">
          <span className="text-zinc-500 text-sm font-xl">
            {data.techStack.displayName}&nbsp;
          </span>
          <span className="text-zinc-500 font-bold text-base">&bull;</span>
          <span className="text-zinc-500 text-sm font-xl">
            &nbsp;
            {formatDistanceToNow(data.createDateTime, { addSuffix: true })}
          </span>
        </div>
        <div>
          <span className="flex gap-5">
            <span className="flex items-center">
              <Image
                className="relative z-0 shrink-0 -mr-2"
                src="/assets/random-avatar.svg"
                width={24}
                height={24}
                alt="playground participant avatar"
              />
              <span className="block relative z-10 shrink-0 w-6 h-6 rounded-full overflow-hidden">
                <Image
                  src={profileData.avatar}
                  width={24}
                  height={24}
                  alt="plaground participant avatar"
                />
              </span>
            </span>
            <span className="text-zinc-500 text-xs">
              Shared with&nbsp;
              <span className="font-semibold text-zinc-600">
                Adam, {profileData.displayName}
              </span>
              .. +7 more
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

const PlaygroundContainer = ({ data, isOption, setData }: PropsType) => {
  const onClickHandler = () => {
    if (setData) {
      setData((prev) => ({
        ...prev,
        playgrounds: prev.playgrounds.map((pg) =>
          pg.id === data.id ? { ...pg, hasDisplayed: !pg.hasDisplayed } : pg
        ),
      }));
    }
  };

  if (isOption) {
    return (
      <div
        onClick={onClickHandler}
        aria-selected={data.hasDisplayed}
        role="option"
        className={`border-2 rounded-lg cursor-pointer ${
          data.hasDisplayed
            ? "border-primary-600 bg-primary-50"
            : "border-zinc-100 bg-zinc-50"
        }`}
      >
        <PlaygroundLayout data={data} isOption={isOption} />
      </div>
    );
  }

  return <PlaygroundLayout data={data} isOption={isOption} />;
};

export default PlaygroundContainer;
