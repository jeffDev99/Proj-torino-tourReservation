"use client";
import { useState } from "react";
import Modal from "../ui/organisms/Modal";

export default function Authforms() {
  const [step, setStep] = useState(1);
  const [modal, setModal] = useState(false);
  const [phone, setPhone] = useState("");

  const sendOtpHandler = (e)=>{
    e.preventDefault()
    console.log("hi")
  }
  return (
    <>
      {step === 1 && "send otp"}
      {step === 2 && "check otp"}
    </>
  );
}

function SendOtpForm() {
  <Modal modal={modal} setModal={setModal}>
    <h3 className="text-xl lg:text-[28px] mb-9">ورود به تورینو</h3>
    <div className="self-start mb-10 w-full">
      <Input
        label="شماره موبایل خود را وارد کنید"
        type="number"
        placeholder="0912***4253"
        classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-4 "
        name="phone"
        id="phone"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
    </div>
    <Button varient="containd" color="#fff" bgColor="#28A745" className="w-full justify-center text-[18px] py-4 rounded-[6px]">
      ارسال کد تایید
    </Button>
  </Modal>;
}
