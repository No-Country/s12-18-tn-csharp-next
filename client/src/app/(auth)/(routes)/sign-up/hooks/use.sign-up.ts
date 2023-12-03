import { SignUpSchema } from "@/app/(auth)/(routes)/sign-up/models";

export const useSignUp = () => {

    const handleSignUp = (values: SignUpSchema) => {
        console.log({values});
    };

    return { handleSignUp };
};