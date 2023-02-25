import Image from "next/image";

const StatusBox = ({ label, img, data }: { label: string, img: string, data: string | number }) => {
    return(
        <div className="flex gap-2 items-center bg-zinc-50 border-2 border-zinc-100">
            <Image
                className="w-10 h-10"
                width={32}
                height={32} 
                src={img}
                alt={label}
            />
            <div className="flex flex-col gap-1">
                <span className="text-sm font-bold">
                    {data}
                </span>
                <span>
                {label.charAt(0).toUpperCase() + label.slice(1)}
                </span>
            </div>
        </div>
    )
}

export default StatusBox;