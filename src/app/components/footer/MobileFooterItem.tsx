'use client'

import clsx from "clsx";
import Link from "next/link";

interface MobileFooterItemProps {
    label: string;
    icon: any;
    href: string;
    active?: boolean;
}

const MobileFooterItem: React.FC<MobileFooterItemProps> = ({
    label,
    icon: Icon,
    href,
    active,
}) => {
    return (
        <Link href={href} className={clsx("group gap-x-3 text-md leading-6 m-2")}>
            <div className={clsx("font-semibold text-lightGray hover:text-white hover:bg-lighterBlue py-4 px-8 rounded-lg text-center flex flex-col justify-evenly items-center", active && "bg-lightBlue")}>
                <Icon className="h-6 w-6"/>
                {label}
            </div>
        </Link>
    )
};

export default MobileFooterItem;
