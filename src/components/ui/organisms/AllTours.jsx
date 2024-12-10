
import React from "react";
import Container from "../../templates/Container";
import ProductCard from "../molecules/ProductCard";
import { useFetchAllTours } from "@/core/hooks/tour";
export const dynamic = "force-dynamic";

export default async function AllTours() {
  const tours = await useFetchAllTours();
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
