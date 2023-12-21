import type { FC, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageBanner from "../../../public/create-event.svg";

import { Button } from "@/components/ui/button";

/**
 * Banner de información acerca de crear eventos.
 * 
 * @returns { JSX.Element }
 */
export const CreateEventBanner: FC = (): JSX.Element => {
    return (
        <div className="px-4 pb-5 flex flex-col-reverse md:flex-row md:py-6 ">
            <div className="flex items-center justify-center md:w-1/2">
                { " " }
                {/* Opcional md:justify-start en esta clase */ }
                <Image
                    src={ImageBanner}
                    alt="Image Banner"
                    priority
                    className="w-1/2 md:w-[280px] lg:w-[380px]"
                />
            </div>
            <div className="md:flex md:w-1/2 md:justify-end">
                <div className="md:w-[85%] lg:w-[70%]">
                    <h2 className="py-5 text-left text-3xl font-bold md:text-[30px] lg:text-[42px]">
                        Si estas en una situación de emergencia: Ayuda Humanitaria es la solución.
                    </h2>
                    <p className="text-left">
                        Estamos seguros que nuestra comunidad te será de ayuda. ¡Estamos aquí para ayudarnos entre todos!
                    </p>
                    <div className="grid justify-start">
                        <Link href="/create-event">
                            <Button
                                variant="outline"
                                className="
                                    my-5 ml-[0px] rounded-lg bg-[#0075DE] px-4 py-2 text-[16px] text-[white]
                                    hover:bg-gray-600 hover:text-white dark:hover:bg-gray-400
                                "
                            >
                                Crear un evento
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};