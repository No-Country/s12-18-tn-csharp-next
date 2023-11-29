import type { FC, PropsWithChildren, JSX } from "react";

const MainLayout: FC<PropsWithChildren> = async ({ children }: PropsWithChildren): Promise<JSX.Element> => {
    return (
        <div className="h-full">
            <main className="h-full">
                { children }
            </main>
        </div>
    );
};

export default MainLayout;