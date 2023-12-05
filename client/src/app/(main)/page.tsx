import type { FC, JSX } from "react";

import { CardSection } from "@/components/sections/card-section-lading-page/card-section";
import Banner from "@/components/banner";

const MainPage: FC = (): JSX.Element => {
    return (
        <main>
            <Banner />
            <section className="container flex flex-col gap-3">
                <CardSection />
            </section>
        </main>
    );
};

export default MainPage;