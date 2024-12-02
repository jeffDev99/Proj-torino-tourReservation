import React from "react";
import Header from "../../ui/organisms/Header";
import Footer from "../../ui/organisms/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
}
