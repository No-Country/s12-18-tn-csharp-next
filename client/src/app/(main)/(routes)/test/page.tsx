"use client";

import { useAppSelector } from "@/hooks";

const TestPage = () => {
    const user = useAppSelector((store) => store.auth);
    console.log({ user });
    return (
        <>Test</>
    );
};

export default TestPage;