import React from "react";
import FeatureBox from "../molecules/FeatureBox";
import Container from "../../templates/Container";
export default function Feature() {
  return (
    <div className="pt-11 pb-8 border-t border-[#00000033] ">
      <Container>
        <div className=" flex flex-col lg:flex-row gap-x-16 gap-y-8">
          <FeatureBox ImgSrc="/Group 16.svg" className="lg:w-1/3" title="بصرفه ترین قیمت" desc="بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید." />
          <FeatureBox ImgSrc="/Group 17.svg" className="lg:w-1/3" title="پشتیبانی" desc="پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما." />
          <FeatureBox ImgSrc="/Group 18.svg" className="lg:w-1/3" title="رضایت کاربران" desc="رضایت بیش از 10هزار کاربر از تور های ما. " />
        </div>
      </Container>
    </div>
  );
}
