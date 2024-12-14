"use client";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm.jsx";
import CheckOtpForm from "./CheckOtpForm";
import ModalContainer from "@/components/partials/container/ModalContainer";


export default function Authforms({ isOpen, setIsOpen }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");

  return (
    <>
      {step === 1 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <SendOtpForm mobile={mobile} setMobile={setMobile} setStep={setStep} />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer isOpen={isOpen} setIsOpen={setIsOpen}>
          <CheckOtpForm mobile={mobile} setStep={setStep} setIsOpen={setIsOpen}/>
        </ModalContainer>
      )}
    </>
  );
}
