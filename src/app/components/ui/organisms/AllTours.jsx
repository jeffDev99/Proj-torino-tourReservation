import React from "react";
import Container from "../../templates/Container";
import ProductCard from "../molecules/ProductCard";

export const dynamic = "force-dynamic";

const fetchTours = async () => {
  let res = await fetch(`${process.env.BASE_URL}/tour`);
  let data = await res.json();
  return data;
};
export default async function AllTours() {
  const tours = await fetchTours();
  return (
    <Container>
      <h3 className="text-xl lg:text-3xl mb-2">همه تور ها</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-x-6 gap-y-8 mb-6">
        {tours.map((tour) => {
          return (
            <ProductCard
              key={tour.id}
              tourId={tour.id}
              className=""
              title={tour.title}
              imgSrc={tour.image}
              desc="مهر ماه . 3 روزه - پرواز - هتل 3 سی روزه خیلی خوبه هتلش بخدا به جون فریبرز عرب نیا"
              price={tour.price}
            />
          );
        })}
      </div>
    </Container>
  );
}
