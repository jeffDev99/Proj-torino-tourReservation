import React from "react";
import Container from "../Container";
// icon
import { Profile, SunFog, ConvertCard } from "iconsax-react";
export default function DashboardLayout({ children }) {
  return (
    <Container>
      <div className="flex  justify-center gap-x-8">
        <aside className=" lg:w-[284px]  ">
          <ul className="text-darkGray text-sm bg-white border border-[#00000033] rounded-[10px] overflow-hidden transition-all">
            <li className="group flex flex-col p-4 pb-0  after:content-[''] after:block after:h-[1px] after:w-full after:bg-[#00000033] after:mt-4 cursor-pointer hover:bg-[#28A74540] hover:text-primary transition-all ">
              <div className="flex items-center  gap-x-2">
                <Profile size="20" variant="Bold" className="fill-[#282828] group-hover:fill-primary transition-all" />
                پروفایل
              </div>
            </li>{" "}
            <li className="group flex flex-col p-4 pb-0  after:content-[''] after:block after:h-[1px] after:w-full after:bg-[#00000033] after:mt-4 cursor-pointer hover:bg-[#28A74540] hover:text-primary transition-all ">
              <div className="flex items-center  gap-x-2">
                <SunFog size="20" className="fill-[#282828] group-hover:fill-primary transition-all" variant="Bold" />
                تور های من
              </div>
            </li>{" "}
            <li
              className="group flex flex-col p-4 pb-0  cursor-pointer hover:bg-[#28A74540] hover:text-primary transition-all after:content-['']
after:mt-4"
            >
              <div className="flex items-center  gap-x-2">
                <ConvertCard size="20" className="fill-[#282828] group-hover:fill-primary transition-all" />
                تراکنش ها
              </div>
            </li>
          </ul>
        </aside>
        <main className="bg-red-600 lg:w-[872px]">{children}</main>
      </div>
    </Container>
  );
}
