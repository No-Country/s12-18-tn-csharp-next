import type { FC, JSX } from "react";

import { SignUpForm } from "@/app/(auth)/(routes)/sign-up/components"

const SignUpPage: FC = (): JSX.Element => {
    return (
        <section>
            <SignUpForm />
        </section>
    );
}

export default SignUpPage;