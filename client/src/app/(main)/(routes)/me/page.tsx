import type { FC, JSX } from "react";

import { FormLayout } from "@/components/layouts";
import { UserForm } from "@/app/(main)/(routes)/me/components";

/**
 * Página del usuario en sesión, donde esta toda su información.
 * 
 * @returns { JSX.Element } Componente de la página de usuario.
 */
const MyProfilePage: FC = (): JSX.Element => {

  return (
    <div className="container py-6">
      <h1 className="text-4xl text-center"> Mi Perfil </h1>
      <FormLayout>
        <UserForm />
      </FormLayout>
      <FormLayout></FormLayout>
    </div>
  );
};

export default MyProfilePage;
