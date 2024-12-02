import React from "react";
import Link from "next/link";
import { Home2, VolumeLow, Call, AirplaneSquare } from "iconsax-react";

export default function MainMenu({ className, setMenu }) {
  return (
    <div
      className={`menuWrapper fixed lg:static left-0 right-0 top-0 bottom-0 bg-red bg-[#00000038] lg:bg-white flex flex-1 items-center ${className}`}
      onClick={(e) => {
        if (e.target.className.includes("menuWrapper")) {
          setMenu(false);
        }
      }}
    >
      <ul className={`flex lg:items-center gap-7 flex-col lg:flex-row fixed right-0 top-0 bottom-0 rounded-e-xl w-[209px] lg:w-full  lg:static bg-white pt-8 lg:pt-0 ps-3 flex-1`}>
        <li>
          <Link href="/" className="hover:text-primary transition flex  items-center gap-2">
            <Home2 size="16" className="lg:hidden" color="#28A745" />
            صفحه اصلی
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary transition flex  items-center gap-2">
            <AirplaneSquare size="16" className="lg:hidden" color="#28A745" />
            خدمات گردشگری
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary transition flex  items-center gap-2">
            <VolumeLow size="16" className="lg:hidden" color="#28A745" />
            درباره ما
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-primary transition flex  items-center gap-2">
            <Call size="16" className="lg:hidden" color="#28A745" />
            تماس با ما
          </Link>
        </li>
      </ul>
    </div>
  );
}
