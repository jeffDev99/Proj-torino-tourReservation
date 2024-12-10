import Link from "next/link";
import Container from "../components/templates/Container";
import Image from "next/image";
export default function NotFoundPage() {
  return (
    <Container>
      <figure className="flex flex-col-reverse lg:flex-row mb-36 lg:mb-0">
        <figcaption className="lg:w-1/2 flex flex-col items-center justify-center">
          <h1 className=" text-2xl lg:text-4xl text-gray mb-7">صفحه مورد نظر یافت نشد!</h1>
          <Link href="/" className="bg-[#D8FFE1] text-primary rounded-2xl py-3 lg:py-4 px-5 lg:px-11 text-xl lg:text-[28px]">بازگشت به صفحه اصلی</Link>
        </figcaption>
        <Image width={555} height={555} src="/Error TV.svg" alt="error 404 page not found"  className="lg:w-1/2" />
      </figure>
    </Container>
  );
}
