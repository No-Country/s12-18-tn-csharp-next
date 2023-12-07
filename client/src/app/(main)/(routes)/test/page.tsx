"use client";

import { useAuthActions } from "@/app/(auth)/hooks";
import { selectAuth } from "@/app/(auth)/store";
import { useAppSelector } from "@/hooks";

const TestPage = () => {
    const { handleRemoveUser } = useAuthActions();
    const auth = useAppSelector(selectAuth);

    console.log({ auth });

    const handleLogOut = () => {
        console.log("Cerrar Sesión.")
        handleRemoveUser();
    };
    
    return (
        <>
            <h1>TestPage</h1>
            <button onClick={handleLogOut}> Cerrar sesión. </button>
        </>
    );
};

export default TestPage;