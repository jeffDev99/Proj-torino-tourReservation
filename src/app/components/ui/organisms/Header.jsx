"use client";
// next components
import Image from "next/image";
import { useState } from "react";
// custom components
import Container from "../../templates/Container";
import Button from "../atoms/Button";
import MainMenu from "../molecules/MainMenu";
// icons
import { Profile } from "iconsax-react";
import { HambergerMenu } from "iconsax-react";
import { Login } from "iconsax-react";
// styles
import styles from "./Header.module.css";

export default function Header() {
  const [menu , setMenu] = useState(false)
  return (
    <header className="py-4 sticky z-10 top-0 bg-white ">
      <Container>
        <div className="flex gap-20 items-center justify-between">
          <Image src="/logo.svg" width={146} height={44} alt="logo" className="hidden lg:block" />
          <HambergerMenu size={24} color="#10411B" className="lg:hidden" onClick={()=>setMenu(true)}/>
          <MainMenu className={`lg:block ${menu ? "block" : "hidden"}`} menu={menu} setMenu={setMenu}></MainMenu>
          <Button varient="outline">
            <div className="hidden lg:flex">
              <Profile size="24" color="#28A745" variant="Bold" />
              ورود | ثبت نام
            </div>
            <div className="flex lg:hidden">
              <Login size="24" color="#28A745"  />
            </div>
          </Button>
        </div>
      </Container>
    </header>
  );
}
