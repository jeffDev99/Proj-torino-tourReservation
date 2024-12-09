"use client";
// next components
import Image from "next/image";
import { useState } from "react";
// custom components
import Container from "../../templates/Container";
import Button from "../atoms/Button";
import MainMenu from "../molecules/MainMenu";
import Modal from "./Modal";
import Input from "../atoms/input";
// icons
import { Profile } from "iconsax-react";
import { HambergerMenu } from "iconsax-react";
import { Login } from "iconsax-react";
// styles
import styles from "./Header.module.css";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const [step,setStep ] = useState(1);
  const [phone, setPhone] = useState("");


  return (
    <>
      <header className="py-4 sticky z-10 top-0 bg-white ">
        <Container>
          <div className="flex gap-20 items-center justify-between">
            <Image src="/logo.svg" width={146} height={44} alt="logo" className="hidden lg:block" />
            <HambergerMenu size={24} color="#10411B" className="lg:hidden" onClick={() => setMenu(true)} />
            <MainMenu className={`lg:block ${menu ? "block" : "hidden"}`} menu={menu} setMenu={setMenu}></MainMenu>
            <Button varient="outline" color="#28A745" bgColor="#28A745" hoverBgColor="#28A745" hoverTextColor="#ffffff">
              <div className="hidden lg:flex" onClick={()=>setModal(true)}>
                <Profile size="24" color="#28A745" variant="Bold" />
                ورود | ثبت نام
              </div>
              <div className="flex lg:hidden" onClick={()=>setModal(true)}>
                <Login size="24" color="#28A745" />
              </div>
            </Button>
          </div>
        </Container>
      </header>
      <Modal modal={modal} setModal={setModal} >
        <h3 className="text-xl lg:text-[28px] mb-9">ورود به تورینو</h3>
        <div className="self-start mb-10 w-full">
          <Input label="شماره موبایل خود را وارد کنید" type="number" placeholder="0912***4253" classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-4 " name="phone" id="phone" value={phone} onChange={(e) => {setPhone(e.target.value)}} />
        </div>
        <Button varient="containd" color="#fff" bgColor="#28A745" className="w-full justify-center text-[18px] py-4 rounded-[6px]">
          ارسال کد تایید
        </Button>
      </Modal>
    </>
  );
}
