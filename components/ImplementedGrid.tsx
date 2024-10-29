import Link from "next/link";
import features from "@/lib/features";

const ImplementedGrid = () => {
    return (
        <div className="w-full grid grid-cols-3 gap-3">
            {features.map(({name, link, Icon}) => (
                <Link href={link} key={name}>
                    <div className="border border-border-dark rounded-md w-full flex item-center justify-around py-6 hover:bg-border-dark duration-500">
                        <h4 className="font-bold text-xl">{name}</h4>
                        <Icon size={24}></Icon>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default ImplementedGrid;