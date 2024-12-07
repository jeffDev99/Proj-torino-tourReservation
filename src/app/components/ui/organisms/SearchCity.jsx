"use client";
import React, { useState } from "react";
import Button from "../atoms/Button";
import DropDown from "../molecules/DropDown";
import { Location, GlobalSearch, Calendar } from "iconsax-react";
import { Calendar as CalendarComponent } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "./SearchCity.css";
import Container from "../../templates/Container";

export default function SearchCity({ className }) {
  const searchHandler = () => {
    console.log("hi");
  };
  return (
    <Container>
      <div className="flex items-center justify-center pt-6 lg:pt-7 pb-12 lg:pb-20">
        <div className={`flex items-center justify-between gap-x-2 w-[874px] lg:p-3 lg:border border-[#00000026] rounded-[20px] flex-wrap lg:flex-nowrap  ${className}`}>
          <div className="w-[48%] lg:w-1/4 border border-[#00000026] lg:border-none mb-3 lg:mb-0 rounded-xl border-l border-[#00000026]">
            <div className="w-full py-2 ">
              <DropDown title="مبدا" icon={<Location size="20" color="#2C2C2C" />} id="source">
                <p className="block p-2  text-sm font-semibold text-gray bg-[#F8F8F8]">پرتردد</p>
                <p className=" py-4 px-5 flex gap-2 items-center text-sm font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer border-b border-[#0000001F] hover:transition-all">
                  <Location size="20" color="#2C2C2C" />
                  تهران
                </p>
                <p className=" py-4 px-5 flex gap-2 items-center text-sm font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer border-b border-[#0000001F] hover:transition-all">
                  <Location size="20" color="#2C2C2C" />
                  تهران
                </p>
              </DropDown>
            </div>
          </div>
          <div className="w-[48%] lg:w-1/4 border border-[#00000026] lg:border-none mb-3 lg:mb-0 rounded-xl  border-l border-[#00000026]">
            <div className="w-full py-2 ">
              <DropDown title="مقصد" icon={<GlobalSearch size="20" color="#2C2C2C" />} id="dest">
                <p className="block p-2  text-sm font-semibold text-gray bg-[#F8F8F8]">پرتردد</p>
                <p className=" py-4 px-5 flex gap-2 items-center text-sm font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer border-b border-[#0000001F] hover:transition-all">
                  <Location size="20" color="#2C2C2C" />
                  تهران
                </p>
                <p className=" py-4 px-5 flex gap-2 items-center text-sm font-semibold text-body-color hover:bg-primary hover:bg-opacity-5 hover:cursor-pointer border-b border-[#0000001F] hover:transition-all">
                  <Location size="20" color="#2C2C2C" />
                  تهران
                </p>
              </DropDown>
            </div>
          </div>
          <div className="w-full lg:w-1/4 border border-[#00000026] lg:border-none mb-3 lg:mb-0 rounded-xl ">
            <div className="w-full py-2 ">
              <DropDown title="تاریخ" dropClassName="!w-full lg:!w-[268px] right-0" icon={<Calendar size="20" color="#2C2C2C" />} id="dest">
                <CalendarComponent calendar={persian} arrow={false} locale={persian_fa} className="w-full" />
              </DropDown>
            </div>
          </div>

          <div className="w-full lg:w-1/4 border border-[#00000026] lg:border-none mb-3 lg:mb-0 rounded-xl">
            <Button type="button" onClick={searchHandler} varient="containd" color="#ffffff" bgColor="#28A745" hoverBgColor="#28A745" className="w-full justify-center text-2xl rounded-2xl py-3">
              جستجو
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
