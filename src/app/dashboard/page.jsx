import React from "react";
import DashboardLayout from "@/components/templates/layout/DashboardLayout";
import { Edit2 } from "iconsax-react";
export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="border border-[#00000033] rounded-[10px] p-3 pb-7 pe-4 mb-6">
        <h3 className="mb-7">اطلاعات حساب کاربری</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex gap-x-8 items-center ">
            <p>شماره موبایل</p>
            <p>0912***4253</p>
          </div>
          <div className="flex gap-x-16  items-center ">
            <div className="flex gap-x-8 items-center ">
              <p>ایمیل</p>
              <p>-</p>
            </div>
            <button className="text-lightGreen flex gap-x-2 items-center mr-16">
              <Edit2 size={16} className="fill-lightGreen" variant="Outline"></Edit2>
              افزودن
            </button>
          </div>
        </div>
      </div>
      <div className="border border-[#00000033] rounded-[10px] p-3 pb-7 pe-4 mb-6">
        <div className="flex justify-between items-center mb-7">
          <h3>اطلاعات شخصی</h3>
          <button className="text-lightGreen flex gap-x-2 items-center mr-16">
            <Edit2 size={16} className="fill-lightGreen" variant="Outline" />
            ویرایش اطلاعات
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex gap-x-8 items-center ">
            <p>نام و نام خانوادگی</p>
            <p className="text-darkGray">مانیا رحیمی</p>
          </div>
          <div className="flex gap-x-8 items-center ">
            <p>کد ملی</p>
            <p className="text-darkGray">3721156232</p>
          </div>
          <div className="flex gap-x-8 items-center ">
            <p>جنسیت</p>
            <p className="text-darkGray">زن</p>
          </div>
          <div className="flex gap-x-8 items-center ">
            <p>تاریخ تولد</p>
            <p className="text-darkGray">1383/10/17</p>
          </div>
        </div>
      </div>
      
      <div className="border border-[#00000033] rounded-[10px] p-3 pb-7 pe-4 mb-6">
        <div className="flex justify-between items-center mb-7">
          <h3>اطلاعات حساب بانکی</h3>
          <button className="text-lightGreen flex gap-x-2 items-center mr-16">
            <Edit2 size={16} className="fill-lightGreen" variant="Outline" />
            ویرایش اطلاعات
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex gap-x-8 items-center ">
            <p>شماره شبا</p>
            <p className="text-darkGray">-</p>
          </div>
          <div className="flex gap-x-8 items-center ">
            <p>شماره کارت</p>
            <p className="text-darkGray">6037991752468520</p>
          </div>
          <div className="flex gap-x-8 items-center ">
            <p>شماره حساب</p>
            <p className="text-darkGray">-</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
