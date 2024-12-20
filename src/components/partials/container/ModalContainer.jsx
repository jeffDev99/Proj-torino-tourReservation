"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function ModalContainer({ children, isOpen, setIsOpen }) {
    // if (!isOpen) return ;    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.dataset.modal === "modal") {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className={`${isOpen ? ` opacity-100 visible` : " invisible opacity-0"} transition-all `}>
      <div className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[#0000006e] backdrop-blur-sm z-50" data-modal="modal">
        <div className="bg-white w-[358px] lg:w-[571px] rounded-[20px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] px-5 pb-5 pt-2 flex flex-col  items-center mx-4 lg:mx-0">
          <Image src="/cross.svg" width={30} height={30} alt="cross icon" className="self-end w-7 h-7" onClick={() => setIsOpen(false)} />
          {children}
        </div>
      </div>
    </div>
  );
}
