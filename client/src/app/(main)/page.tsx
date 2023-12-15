import type { FC, JSX } from "react";

import { CardSection } from "@/components/sections/card-section-lading-page/card-section";
import Banner from "@/components/banner";
import { CreateEventBanner } from "@/components/create-event-banner";

const MainPage: FC = (): JSX.Element => {
    return (
        <main>
            <Banner />
            <CreateEventBanner />
            <section className="container flex flex-col gap-3">
                <CardSection />
            </section>
        </main>
    );
};

export default MainPage;