import Button from "@/components/ui/atoms/Button";
import Input from "../../ui/atoms/Input";
import { useState } from "react";
import { useSendOtp } from "@/core/services/mutations";
import { isValidMobile } from "@/core/utils/validation";
import toast from "react-hot-toast";

function SendOtpForm({ mobile, setMobile , setStep }) {
    const [error, setError] = useState("");

    const { isPending, mutate } = useSendOtp();
  
    const sendOtpHandler = (event) => {
      event.preventDefault();

      if (isPending) return;
      if (!isValidMobile(mobile)) return setError("شماره معتبر وارد کنید!");
      setError("");
  
      mutate(
        { mobile },
        {
          onSuccess: (data) => {
            toast.success(data?.data?.message,{ duration: 3000 });
            toast(data?.data?.code);
            setStep(2);
          },
          onError: (error) => {
            console.log(error);
          },
        }
      );
    };
  return (
    <>
      <h3 className="text-xl lg:text-[28px] mb-9">ورود به تورینو</h3>
      <form onSubmit={sendOtpHandler} className="self-start w-full">
        <Input
          label="شماره موبایل خود را وارد کنید"
          type="text"
          placeholder="0912***4253"
          classNameInp="border rounded-[6px] w-full border-[#00000040] px-2 py-4  mb-10"
          name="mobile"
          id="mobile"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        {!!error && <p className="text-red-500">{error}</p>}
        <Button varient="containd" color="#fff" bgColor="#28A745" className="w-full justify-center text-[18px] py-4 rounded-[6px]">
          ارسال کد تایید
        </Button>
      </form>
    </>
  );
}
export default SendOtpForm;
