"use client";
import React from "react";
import Container from "../Container";
import DashboardSidebar from "@/components/ui/organisms/DashboardSidebar";
import { useRouter } from "next/navigation";
import { getCookies } from "@/core/utils/cookies";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const accessToken = getCookies("accessToken");
    if (!accessToken) {
      router.push("/");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div className="animate-pulse flex justify-center text-primary">Loading...</div>;
  }

  return (
    <Container>
      <div className="flex  justify-center gap-x-8 pt-[37px] pb-[48px]">
        <DashboardSidebar />
        <main className="lg:w-[872px]">{children}</main>
      </div>
    </Container>
  );
}
