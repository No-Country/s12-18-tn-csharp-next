import React from "react";
import { CardSection } from "@/components/sections/card-section-lading-page/card-section";
import Banner from "@/components/banner";



export default function page() {
  return (
    <main>
      {/* Banner */}
      <Banner />
      
      {/* Cards */}
      <div className="container flex flex-col gap-3">
        <CardSection/>
      </div>
    </main>
  );
}
