import Link from "next/link";
import Container from "@/components/templates/Container";
import Image from "next/image";
export default function ErrorPage({error}) {
  return (
    <Container>
      <figure className="flex flex-col-reverse lg:flex-row mb-36 lg:mb-0">
        <figcaption className="lg:w-1/2 flex flex-col justify-center">
          <h1 className=" text-2xl lg:text-4xl text-gray mb-7">صفحه مورد نظر یافت نشد!</h1>
          <p className="text-2xl">لطفا بعدا دوباره امتحان کنید.</p>
        </figcaption>
        <Image width={555} height={555} src="/Error Lamp Robot.svg" alt="error 404 page not found"  className="lg:w-1/2" />
      </figure>
    </Container>
  );
}
