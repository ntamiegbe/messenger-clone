'use client'

import clsx from "clsx"
import Link from "next/link"

interface DesktopIconProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
}

const DesktopSidebarItem: React.FC<DesktopIconProps> = ({
  label,
  icon: Icon,
  href,
  active
}) => {
  return (
    <li>
      <Link href={href} className={clsx("group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-lightGray hover:text-white hover:bg-lighterBlue", active && "bg-lightBlue")}>
        <Icon className="h-6 w-6 shrink-0" />
        <span className="hidden sr-omly">{label}</span>
      </Link>
    </li>
  )
}

export default DesktopSidebarItem