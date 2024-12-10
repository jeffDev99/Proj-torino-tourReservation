import Link from "next/link";
import Image from "next/image";
import Container from "../../templates/Container";
import FooterWidget from "../molecules/FooterWidget";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <section className={`flex flex-col lg:flex-row  border-t border-[#00000033] pt-6 lg:py-6 justify-between border-dashed lg:border-solid`}>
          <div className="flex justify-between lg:justify-start gap-24 mb-9">
            <FooterWidget title="تورینو">
              <ul className="text-darkGray">
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    درباره ما
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    تماس با ما
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    چرا تورینو
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    بیمه مسافرتی
                  </Link>
                </li>
              </ul>
            </FooterWidget>
            <FooterWidget title="خدمات مشتریان">
              <ul className="text-darkGray">
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    پشتیبانی آنلاین
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    راهنمای خرید
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    راهنمای استرداد
                  </Link>
                </li>
                <li>
                  <Link href="/" className="mb-2  text-base lg:text-lg font-light block">
                    پرسش و پاسخ
                  </Link>
                </li>
              </ul>
            </FooterWidget>
          </div>
          <div className="text-left flex flex-row-reverse lg:flex-col">
            <div className="flex flex-col w-11/12 lg:w-full justify-center">
              <Image src={"/logo.svg"} width={146} height={44} alt="logo torino" className="mb-3 lg:mb-5 max-w-28 lg:max-w-max mr-auto block" />
              <p className="lg:mb-9 text-sm">
                تلفن پشتیبانی : <span>8574 - 021</span>
              </p>
            </div>
            <ul className="flex  flex-row-reverse gap-x-4 lg:gap-x-8 flex-wrap justify-center items-center">
              <li>
                <Image src={"/aira-682b7c43.svg"} width={78} height={78} alt="logo torino" className="mb-5 w-9 lg:w-20 h-9 lg:h-20" />
              </li>
              <li>
                <Image src={"/samandehi-6e2b448a.svg"} width={78} height={78} alt="logo torino" className="mb-5 w-9 lg:w-20 h-9 lg:h-20" />
              </li>
              <li>
                <Image src={"/ecunion-35c3c933.svg"} width={78} height={78} alt="logo torino" className="mb-5 w-9 lg:w-20 h-9 lg:h-20" />
              </li>
              <li>
                <Image src={"/passenger-rights-48368f81 1.svg"} width={78} height={78} alt="logo torino" className="mb-5 w-9 lg:w-20 h-9 lg:h-20" />
              </li>
              <li>
                <Image src={"/state-airline-f45c55b2 1.svg"} width={78} height={78} alt="logo torino" className="mb-5 w-9 lg:w-20 h-9 lg:h-20" />
              </li>
            </ul>
          </div>
        </section>
      </Container>
      <section className="border-t border-[#00000033] text-center py-3 text-xs lg:text-sm">کلیه حقوق این وب سایت متعلق به تورینو میباشد.</section>
    </footer>
  );
}
