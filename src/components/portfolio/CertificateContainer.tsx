import Image from "next/image";
import Link from "next/link";

import { CertificateType, PortfolioDataType } from "@/types/portfolio";
import { format } from "date-fns";
import { SetStateAction } from "react";

type PropsType = {
  data: CertificateType;
  isOption?: boolean;
  setData?: React.Dispatch<SetStateAction<PortfolioDataType>>;
};

const CertificateContainer = ({ data, isOption, setData }: PropsType) => {
  const onClickHandler = () => {
    if (setData) {
      setData((prev) => ({
        ...prev,
        certificates: prev.certificates.map((cert) =>
          cert.id === data.id
            ? { ...cert, hasDisplayed: !cert.hasDisplayed }
            : cert
        ),
      }));
    }
  };

  const contentImage = () => {
    if (data.certType === "achievement") {
      return (
        <Image
          className="w-10 h-10 block"
          width={40}
          height={40}
          alt={data.title}
          src="/assets/achievement.svg"
        />
      );
    } else if (data.certType === "technology" && data.technology) {
      return (
        <Image
          className="w-10 h-10 block"
          width={40}
          height={40}
          alt={data.title}
          src={data.technology.imageSrc}
        />
      );
    }
    return null;
  };

  if (isOption) {
    return (
      <div
        onClick={onClickHandler}
        aria-selected={data.hasDisplayed}
        role="option"
        className={`border-2 rounded-lg cursor-pointer p-4 ${
          data.hasDisplayed
            ? "border-primary-600 bg-primary-50"
            : "border-zinc-100 bg-zinc-50"
        }`}
      >
        <div className="flex flex-col gap-5">
          {contentImage()}
          <div>
            <h3 className="text-zinc-900 font-semibold">{data.title}</h3>
            <div className="text-sm text-zinc-500 mb-2">
              Issued on {format(new Date(data.issueDate), "MMM do, yyyy")}
            </div>
            <Link
              href={data.certUrl}
              className="text-sm font-semibold text-zinc-500"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              See credentials
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-2 border-zinc-100 bg-zinc-50 flex rounded-lg p-4 flex-col gap-5">
      {contentImage()}
      <div>
        <h3 className="text-zinc-900 font-semibold">{data.title}</h3>
        <div className="text-sm text-zinc-500 mb-2">
          Issued on {format(new Date(data.issueDate), "MMM do, yyyy")}
        </div>
        <Link
          href={data.certUrl}
          className="text-sm font-semibold text-zinc-500"
          target={"_blank"}
          rel="noreferrer noopener"
        >
          See credentials
        </Link>
      </div>
    </div>
  );
};

export default CertificateContainer;
