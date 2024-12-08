import Container from "../components/templates/Container";
import Image from "next/image";
import Button from "../components/ui/atoms/Button";
// Icons
import { UserTick, Map, MedalStar, Routing2, Calendar, Calendar2, Bus, Profile2User, Security } from "iconsax-react";
export default function TourDetail() {
  return (
    <div className=" bg-[#F3F3F3] py-9">
      <Container>
        <div className="w-full bg-white border border-[#00000033] rounded-[10px] px-5 py-[30px] ">
          <figure className="flex flex-col lg:flex-row gap-x-6 mb-7">
            <Image src={"/arbil.jpeg"} width={397} height={265} alt="title" className="rounded-xl overflow-hidden  lg:w-4/12 mb-4 lg:mb-0" />
            <figcaption className="flex flex-col  lg:w-8/12">
              <div className="flex flex-row lg:flex-col  items-center lg:items-start justify-between mb-3 lg:mb-0">
                <h1 className="lg:mb-4 text-[22px] lg:text-3xl">تور هولیر</h1>
                <h3 className="lg:mb-6 text-[15px] lg:text-xl text-gray">5 روز و 4 شب</h3>
              </div>
              <div className="flex gap-x-6 justify-between lg:justify-start items-center mb-[26px]">
                <p className="flex gap-x-2  items-center text-[#7D7D7D] text-xs lg:text-xl">
                  <UserTick size={24} color="#7D7D7D" className="w-[14px] lg:w-6" />
                  تورلیدر از مبدا
                </p>
                <p className="flex gap-x-2  items-center  text-[#7D7D7D] text-xs lg:text-xl">
                  <Map size={24} color="#7D7D7D" className="w-[14px] lg:w-6" />
                  برنامه سفر
                </p>
                <p className="flex gap-x-2  items-center  text-[#7D7D7D] text-xs lg:text-xl">
                  <MedalStar size={24} color="#7D7D7D" className="w-[14px] lg:w-6" />
                  تضمین کیفیت
                </p>
              </div>
              <div className="flex flex-row-reverse lg:flex-row justify-between gap-x-6 items-center w-full ">
                <p className="text-[#282828CC] text-[10px] lg:text-sm">
                  <span className="text-lightGreen text-2xl lg:text-[28px]">17,500,000 </span>
                  تومان
                </p>
                <Button className="text-xl lg:text-2xl  py-1 lg:py-2 px-5 lg:px-10" color="#fff" bgColor="#28A745" varient="containd">
                  رزرو و خرید
                </Button>
              </div>
            </figcaption>
          </figure>
          <div className="flex gap-x-11">
            <div className=" lg:border-l border-[#00000040] lg:pl-11">
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Routing2 size={20} color="#444444" variant="Bold" />
                مبدا
              </h5>
              <p className="text-sm lg:text-base">سنندج</p>
            </div>
            <div className=" lg:border-l border-[#00000040] lg:pl-11 text-center">
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Calendar size={20} color="#444444" variant="Bold" />
                تاریخ رفت
              </h5>
              <p className="text-sm lg:text-base">23 مهر 1403</p>
            </div>
            <div className=" lg:border-l border-[#00000040] lg:pl-11 text-center">
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Calendar2 size={20} color="#444444" variant="Bold" />
                تاریخ برگشت
              </h5>
              <p className="text-sm lg:text-base">23 مهر 1403</p>
            </div>
            <div className=" lg:border-l border-[#00000040] lg:pl-11 text-center">
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Bus size={20} color="#444444" variant="Bold" />
                حمل و نقل
              </h5>
              <p className="text-sm lg:text-base">اتوبوس</p>
            </div>
            <div className=" lg:border-l border-[#00000040] lg:pl-11 text-center">
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Profile2User size={20} color="#444444" variant="Bold" />
                ظرفیت
              </h5>
              <p className="text-sm lg:text-base">حداکثر 30 نفر</p>
            </div>
            <div>
              <h5 className="flex gap-x-2 text-nowrap text-[#444444] text-base lg:text-lg mb-2">
                <Security size={20} color="#444444" variant="Bold" />
                بیمه
              </h5>
              <p className="text-sm lg:text-base">بیمه 50 هزار دیناری</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
