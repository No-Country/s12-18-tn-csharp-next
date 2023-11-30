import React from "react";

import { CardSection } from "@/components/sections/card-section-lading-page/card-section";
import Banner from "@/components/banner";



export default function page() {
  return (
    <main>
      <Banner />
      <section className="container flex flex-col gap-3">
        <CardSection/>
      </section>
    </main>
  );
}
