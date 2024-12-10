import React from "react";
import Container from "../components/templates/Container";
import { Profile } from "iconsax-react";
import Input from "../components/ui/atoms/Input";
import Button from "../components/ui/atoms/Button";

export default function Checkout() {
  return (
    <div className=" bg-[#F3F3F3] py-9 min-h-[500px]">
      <Container>
        <div className="flex gap-x-4 flex-col lg:flex-row justify-between ">
          <div className="bg-white rounded-[10px] p-4 lg:p-5 border border-[#00000033] lg:w-9/12 lg:mb-0 mb-9 ">
            <h1 className="flex gap-x-4 mb-4 text-2xl items-center">
              <Profile size={24} color="#171717" variant="Bold"/>
              مشخصات مسافر
            </h1>
            <form action="" className="flex flex-wrap gap-x-4 gap-y-6">
              <Input type="text" placeholder="نام و نام خانوادگی" classNameWrapper="w-full lg:w-[31.333333%]" classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-3 " name="phone" id="phone" value="" onChange="" />
              <Input type="text" placeholder="نام و نام خانوادگی" classNameWrapper="w-full lg:w-[31.333333%]" classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-3 " name="phone" id="phone" value="" onChange="" />
              <Input type="text" placeholder="نام و نام خانوادگی" classNameWrapper="w-full lg:w-[31.333333%]" classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-3 " name="phone" id="phone" value="" onChange="" />
              <Input type="text" placeholder="نام و نام خانوادگی" classNameWrapper="w-full lg:w-[31.333333%]" classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-3 " name="phone" id="phone" value="" onChange="" />
            </form>
          </div>
          <div className="bg-white rounded-[10px] pt-4 pb-3 px-3 lg:p-5  lg:w-3/12">
            <div className="pb-6 border-b border-dashed border-[#00000033] flex justify-between items-center"> 
                <h2 className="text-2xl">تور هولیر</h2>
                <p className="text-gray text-base">5 روز و 4 شب</p>
            </div>
            <div className="py-5 flex justify-between items-center">
                <span className="text-gray">قیمت نهایی</span>
                <p className="text-gray text-sm"><span className="text-lightGreen text-[28px]">1750000</span> تومان</p>
            </div>
            <Button className="text-2xl  py-2 px-10 w-full justify-center" color="#fff" bgColor="#28A745" varient="containd">
              ثبت و خرید نهایی
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
