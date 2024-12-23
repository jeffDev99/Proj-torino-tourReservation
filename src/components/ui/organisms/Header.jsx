"use client";
// next components
import Image from "next/image";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
// custom components
import Container from "../../templates/Container";
import Button from "../atoms/Button";
import MainMenu from "../molecules/MainMenu";
import Authforms from "@/components/templates/AuthForm";
import { deleteCookie } from "@/core/utils/cookies";
import DropDown from "../molecules/DropDown";
import { useGetUserData } from "@/core/services/queries";
// icons
import { Logout, Profile, Login, HambergerMenu } from "iconsax-react";

export default function Header() {
  const { data , refetch  } = useGetUserData();
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();

  const logOutHandler = async () => {
    deleteCookie("accessToken");
    deleteCookie("userMobile");
    deleteCookie("refreshToken");
      queryClient.clear();
      await refetch();
      window.location.pathname= "/";
  };
  return (
    <>
      <header className="py-4 sticky z-10 top-0 bg-white ">
        <Container>
          <div className="flex gap-20 items-center justify-between">
            <Image src="/logo.svg" width={146} height={44} alt="logo" className="hidden lg:block" />
            <HambergerMenu size={24} color="#10411B" className="lg:hidden" onClick={() => setMenu(true)} />
            <MainMenu className={`lg:opacity-100 lg:visible transition-all ${menu ? "opacity-100 visible" : "opacity-0 invisible"}`} menu={menu} setMenu={setMenu}></MainMenu>
            {data?.data ? (
              <DropDown
                title={data?.data?.mobile}
                dropClassName="w-[246px] right-0"
                titleClassName="text-primary text-lg gap-x-1"
                icon={<Profile size="24" color="#28A745" variant="Bold" />}
                isIconDropDown={true}
                id="dest"
              >
                <ul>
                  <li className="flex gap-x-2 px-3 py-3 items-center bg-[#F4F4F4]">
                    <div className="bg-[#D9D9D9] rounded-full w-7 h-7 flex items-center justify-center">
                      <Profile size="16" color="#696969" variant="Bold" />
                    </div>
                    {data?.data?.mobile}
                  </li>
                  <li className=" text-darkGray text-sm cursor-pointer">
                    <Link href="/dashboard" className="flex gap-x-2  items-center p-3">
                      <Profile size="20" color="#282828" variant="Bold" />
                      اطلاعات حساب کاربری
                    </Link>
                  </li>
                  <li className="flex gap-x-2 mx-3 py-3 items-center text-[#D40000]  text-sm border-t border-[#0000001F] cursor-pointer" onClick={() => logOutHandler()}>
                    <Logout size="20" color="#D40000" />
                    خروج از حساب کاربری
                  </li>
                </ul>
              </DropDown>
            ) : (
              <Button varient="outline" color="#28A745" bgColor="#28A745" hoverBgColor="#28A745" hoverTextColor="#ffffff">
                <div className="hidden lg:flex" onClick={() => setIsOpen(true)}>
                  <Profile size="24" color="#28A745" variant="Bold" />
                  ورود | ثبت نام
                </div>
                <div className="flex lg:hidden" onClick={() => setIsOpen(true)}>
                  <Login size="24" color="#28A745" />
                </div>
              </Button>
            )}
          </div>
        </Container>
      </header>
      <Authforms isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
