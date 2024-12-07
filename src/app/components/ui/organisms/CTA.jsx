import React from "react";
import Image from "next/image";
import Button from "../atoms/Button";
import { Call } from "iconsax-react";
import Container from "../../templates/Container";
export default function CTA() {
  return (
    <Container className="my-28">
      <div className="flex flex-col lg:flex-row border border-[#00000040] lg:border-r-0 rounded-xl">
        <div className="flex justify-around w-full lg:w-[70%] bg-primary rounded-xl pt-7 overflow-visible h-[128px] lg:h-auto relative">
          <div className="text-2xl lg:text-5xl  pt-5 text-white font-bold absolute right-3 top-0 lg:static">
            <h4 className="mb-3">خرید تلفنی از <span className="text-secondary">تورینو</span></h4>
            <h5 className="text-[14px] lg:text-[32px]">به هرکجا که میخواهید!</h5>
          </div>
          <Image src="/contactus.png" width={308} height={225} alt="contact us" className="w-[195px] lg:w-[308px] h-[158px] lg:h-[225px] absolute bottom-0 left-0 lg:static"/>
        </div>
        <div className="flex lg:flex-col gap-x-3 justify-center items-center w-full lg:w-[30%] p-3 ">
          <p className="flex gap-3 items-center text-xl lg:text-[28px] lg:mb-4">
            021-1840
            <Call size="24" color="#171717" variant="Bold" />
          </p>
          <Button varient="containd" color="#ffffff" bgColor="#10411B" className="px-7 lg:px-10">اطلاعات بیشتر</Button>
        </div>
      </div>
    </Container>
  );
}
