import React from "react";
import Container from "../../templates/Container";
import ProductCard from "../molecules/ProductCard";
export default function AllTours() {
  return (
    <Container>
      <h3 className="text-xl lg:text-3xl mb-2">همه تور ها</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-x-6 gap-y-8 mb-6">
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
        <ProductCard className="" title="اربیل" imgSrc="/arbil.jpeg" desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا" price="17500000"/>
      </div>
    </Container>
  );
}
