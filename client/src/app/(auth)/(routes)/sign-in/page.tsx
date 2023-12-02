import type { FC, JSX } from "react";

import { SignInForm } from "@/app/(auth)/(routes)/sign-in/components";

const SignInPage: FC = (): JSX.Element => {
    return (
        <SignInForm />
    );
}

export default SignInPage;