import Image from "next/image";
import ImageBanner from "../../public/image-banner-home.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button"

const Banner = () => {
    return (
      <>
        <div className="w-screen px-4 pb-5 md:py-6 md:flex ">
            <div className="md:w-1/2 md:flex md:justify-end">
                <div className="md:w-[85%] lg:w-[70%]">
                    <h2 className="py-5 text-left text-3xl font-bold md:text-[30px] lg:text-[42px]">Your donation can transform lives: Humanitarian Aid is the way.</h2>
            
                    <p className="text-left">Your generosity can make a difference. Turn your contributions into tangible actions of humanitarian aid. Join this noble cause and make a significant impact possible!</p>
                    
                    <div className="grid justify-start">
                        <Link href={"https://google.com"}>
                            {/* <button className="bg-[#00798A] text-[16px] py-2 px-4 rounded-lg text-[white] my-5 ml-[0px]">
                                Unirse a Ayuda Humanitaria
                            </button> */}
                            <Button variant="outline" className="bg-[#00798A] text-[16px] py-2 px-4 rounded-lg text-[white] my-5 ml-[0px] dark:hover:bg-gray-400">Join Humanitarian Aid</Button>
                        </Link>

                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center md:w-1/2"> {/* Opcional md:justify-start en esta clase */}
                <Image
                src={ImageBanner}
                alt="Image Banner"
                priority
                className="w-1/2 md:w-[280px] lg:w-[380px]"
                />
            </div>
        </div>
      </>
    )
  }
  
  export default Banner;