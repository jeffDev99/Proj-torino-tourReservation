"use client";
import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";
import { useSp } from "@/app/hooks/utils";

export default function ProductCard({ tourId, imgSrc, title, desc, price, className }) {
  const route = useRouter();
  return (
    <figure className={`bg-white shadow-cus-1 rounded-[10px] overflow-hidden ${className}`}>
      <Image src={imgSrc} alt={title} width={278} height={160} className="w-full object-contain" />
      <figcaption>
        <h4 className="text-xl p-2 pb-0">{title}</h4>
        <p className="text-gray p-2 truncate">{desc}</p>
        <div className="flex items-center justify-between p-2 border-t border-[#D9D9D9]">
          <Button onClick={() =>route.push(`/tours/${tourId}`)} type="button" varient="containd" color="#ffffff" bgColor="#28A745" hoverBgColor="#28A745" className="justify-center text-base rounded px-2 py-1">
            رزرو
          </Button>
          <p className="text-gray text-xs">
            <span className="text-lightGreen text-base">{useSp(price)}</span>تومان 
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
