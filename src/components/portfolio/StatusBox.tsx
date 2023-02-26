import Image from "next/image";

const StatusBox = ({
  label,
  img,
  data,
}: {
  label: string;
  img: string;
  data: string | number;
}) => {
  return (
    <div className="flex gap-1 items-center bg-zinc-50 border-2 border-zinc-100 py-3 px-5 rounded-xl">
      <Image width={55} height={55} src={img} alt={label} />
      <div className="flex flex-col gap-1">
        <span className="text-xl font-bold">{data}</span>
        <span className="text-zinc-500">
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </span>
      </div>
    </div>
  );
};

export default StatusBox;
