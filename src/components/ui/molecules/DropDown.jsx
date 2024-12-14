import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {  ArrowDown2, ArrowUp2 } from "iconsax-react";

export default function DropDown({ icon, title, id, children ,dropClassName , titleClassName , isIconDropDown}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(id);

  const showMenuHandler = (e) => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={(e) => showMenuHandler(e)} className={`overflow-hidden rounded-full w-full h-8 flex gap-x-2 items-center justify-center lg:justify-start hover:cursor-pointer select-none text-xl ${titleClassName}`}>
        {icon}
        {title}
        {isIconDropDown &&   <ArrowDown2 size="24" color="#28A745" variant="Linear" className={`transition-all ${dropdownOpen ? "rotate-180 transform-gpu":"rotate-0 "}`}/> } 
      </div>

      <div className={`${
          dropdownOpen ? `top-full opacity-100 visible` : "top-[110%] invisible opacity-0"
        } absolute left-0 z-40 mt-2 w-full rounded-xl border border-[#0000001F] bg-white overflow-hidden shadow-card transition-all ${dropClassName}`}>
        {children}
      </div>
    </div>
  );
}
