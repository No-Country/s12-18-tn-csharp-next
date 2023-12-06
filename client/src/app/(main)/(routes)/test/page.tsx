"use client";

import { selectAuth } from "@/app/(auth)/store";
import { useAppSelector } from "@/hooks";

const TestPage = () => {
    const auth = useAppSelector(selectAuth);

    console.log({ auth });

    const handleLogOut = () => {

    };
    return (
        <>
            <h1>TestPage</h1>
            <button onClick={handleLogOut}> Cerrar sesión. </button>
        </>
    );
};

export default TestPage;