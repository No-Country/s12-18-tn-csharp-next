import type { FC, JSX } from "react";

import { UserForm } from "@/app/(main)/(routes)/me/components";

/**
 * Página del usuario en sesión, donde esta toda su información.
 * 
 * @returns { JSX.Element } Componente de la página de usuario.
 */
const MyProfilePage: FC = (): JSX.Element => {

  return (
    <div className="container py-6">
      <UserForm />
    </div>
  );
};

export default MyProfilePage;
