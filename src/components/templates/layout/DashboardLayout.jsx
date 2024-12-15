"use client";
import React from "react";
import Container from "../Container";
import DashboardSidebar from "@/components/ui/organisms/DashboardSidebar";

export default function DashboardLayout({ children }) {
  return (
    <Container>
      <div className="flex  justify-center gap-x-8 pt-[37px] pb-[48px]">
        <DashboardSidebar />
        <main className="lg:w-[872px]">{children}</main>
      </div>
    </Container>
  );
}
