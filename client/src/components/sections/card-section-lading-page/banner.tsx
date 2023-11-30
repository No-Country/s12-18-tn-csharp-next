import Image from "next/image";
import ImageBanner from "../../../../public/image-banner-home.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const Banner = () => {
    return (
      <>
        <div className="w-screen px-4 py-20 md:flex">
            <div className="md:w-1/2 md:flex md:justify-end">
                <div className="md:w-[85%] lg:w-[70%]">
                    <h2 className="py-5 text-left text-3xl font-bold md:text-[30px] lg:text-[42px]">La plataforma de las personas: donde los intereses se convierten en amistades</h2>
            
                    <p className="text-left">Cualquiera que sea tu interés (senderismo, leer, establecer contactos o compartir habilidades), hay miles de personas que lo comparten en Meetup. Hay eventos todos los días: regístrate para unirte a la diversión.</p>
                    
                    <div className="grid justify-start">
                        <Link href={"https://google.com"}>
                            {/* <button className="bg-[#00798A] text-[16px] py-2 px-4 rounded-lg text-[white] my-5 ml-[0px]">
                                Unirse a Ayuda Humanitaria
                            </button> */}
                            <Button variant="outline" className="bg-[#00798A] text-[16px] py-2 px-4 rounded-lg text-[white] my-5 ml-[0px] dark:hover:bg-gray-700">Unirse a Ayuda Humanitaria</Button>
                        </Link>

                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center md:w-1/2"> {/* Opcional md:justify-start en esta clase */}
                <Image
                src={ImageBanner}
                alt="Image Banner"
                className="w-1/2 md:w-[280px] lg:w-[380px]"
                />
            </div>
        </div>
      </>
    )
  }
  
  export default Banner;