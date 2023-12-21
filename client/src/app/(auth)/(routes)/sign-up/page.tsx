import type { FC, JSX } from "react";

import { SignUpForm } from "@/app/(auth)/(routes)/sign-up/components"

const SignUpPage: FC = (): JSX.Element => {
    return (
        <SignUpForm />
    );
}

export default SignUpPage;