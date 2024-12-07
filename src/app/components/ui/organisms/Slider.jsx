"use client";
import Container from "../../templates/Container";
import Image from "next/image";
// icons
import { ArrowRight, ArrowLeft } from "iconsax-react";
// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import { Pagination, Navigation, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

export default function Slider() {
  let swiper = useSwiper();

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-x-24 mb-4">
        <div className="lg:w-1/2">
          <h3 className="text-[40px] flex items-center gap-4 mb-6">
            <span className="flex items-center justify-center w-[59px] h-[59px] text-4xl text-white rounded-full bg-gradient-to-b from-primary to-secondary">؟</span>
            <p>
              چرا <span className="text-primary">تورینو</span> ؟
            </p>
          </h3>
          <div className="hidden lg:block">
            <h4 className="text-2xl mb-4">تور طبیعت گردی و تاریخی</h4>
            <p className="text-xl text-gray leading-10 text-justify">
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از
              جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Swiper
            modules={[Pagination, EffectCards, Navigation]}
            pagination={{
              type: "fraction",
              el: ".custom-pagination", // اشاره به عنصر دلخواه
            }}
            navigation={{
              nextEl: ".custom-next", // المنت دلخواه برای دکمه بعدی
              prevEl: ".custom-prev", // المنت دلخواه برای دکمه قبلی
            }}
            effect={"cards"}
            spaceBetween={20}
            slidesPerView={1.5}
            centeredSlides={true}
            grabCursor={true}
          >
            <SwiperSlide>
              <Image src="/geli.jpeg" width={389} height={479} alt="geli" className="rounded-[35px] w-full lg:w-[389px] h-[284px] lg:h-[479px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/tour.jpeg" width={389} height={479} alt="tour" className="rounded-[35px] w-full lg:w-[389px] h-[284px] lg:h-[479px] object-cover" />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Image src="/geli.jpeg" width={389} height={479} alt="geli" className="rounded-[35px] w-full lg:w-[389px] h-[284px] lg:h-[479px] object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/geli.jpeg" width={389} height={479} alt="geli" className="rounded-[35px] w-full lg:w-[389px] h-[284px] lg:h-[479px] object-cover" />
            </SwiperSlide>
          </Swiper>
          <div className="flex items-center justify-center gap-x-10 mt-5">
            {/* دکمه‌های دلخواه */}
            <button className="custom-next">
              <ArrowRight size="25" color="#10411B80" />
            </button>
            <div className="custom-pagination !w-max" style={{ direction: "ltr" }} />
            <button className="custom-prev">
              <ArrowLeft size="25" color="#10411B80" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
