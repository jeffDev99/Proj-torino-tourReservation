import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Profile, SunFog, ConvertCard } from "iconsax-react";

export default function DashboardSidebar() {
  const path = usePathname();
  return (
    <aside className=" lg:w-[284px]  ">
      <ul className="text-darkGray text-sm bg-white border border-[#00000033] rounded-[10px] overflow-hidden transition-all">
        <li
          className={`group after:content-[''] after:block after:h-[1px] after:w-[92%] after:m-auto after:bg-[#00000033] cursor-pointer ${
            path === "/dashboard" ? "bg-[#28A74540] text-primary" : "hover:bg-[#28A74540] hover:text-primary"
          } transition-all `}
        >
          <Link href="/dashboard" className="flex items-center p-4  gap-x-2">
            <Profile size="20" variant="Bold" className={`fill-[#282828] group-hover:fill-primary transition-all  ${path === "/dashboard" && "fill-primary"}`} />
            پروفایل
          </Link>
        </li>
        <li
          className={`group after:content-[''] after:block after:h-[1px] after:w-[92%] after:m-auto after:bg-[#00000033] cursor-pointer ${
            path === "/dashboard/mytours" ? "bg-[#28A74540] text-primary" : "hover:bg-[#28A74540] hover:text-primary"
          } transition-all `}
        >
          <Link href="/dashboard/mytours" className="flex items-center p-4 gap-x-2">
            <SunFog size="20" variant="Bold" className={`fill-[#282828] group-hover:fill-primary transition-all  ${path === "/dashboard/mytours" && "fill-primary"}`} />
            تور های من
          </Link>
        </li>
        <li
          className={`group after:content-['']  cursor-pointer ${
            path === "/dashboard/transactions" ? "bg-[#28A74540] text-primary" : "hover:bg-[#28A74540] hover:text-primary"
          } transition-all `}
        >
          <Link href="/dashboard/transactions" className="flex items-center p-4 gap-x-2 ">
            <ConvertCard size="20" variant="Bold" className={`fill-[#282828] group-hover:fill-primary transition-all  ${path === "/dashboard/transactions" && "fill-primary"}`} />
            تراکنش ها
          </Link>
        </li>
      </ul>
    </aside>
  );
}
