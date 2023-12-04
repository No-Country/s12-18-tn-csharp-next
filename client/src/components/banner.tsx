import Link from "next/link";
import Image from "next/image";

import ImageBanner from "../../public/image-banner-home.svg";

import { Button } from "@/components/ui/button";

const Banner = () => {
    return (
        <div className="px-4 pb-5 md:flex md:py-6 ">
            <div className="md:flex md:w-1/2 md:justify-end">
                <div className="md:w-[85%] lg:w-[70%]">
                    <h2 className="py-5 text-left text-3xl font-bold md:text-[30px] lg:text-[42px]">
                        Your donation can transform lives: Humanitarian Aid is the way.
                    </h2>
                    <p className="text-left">
                        Your generosity can make a difference. Turn your contributions
                        into tangible actions of humanitarian aid. Join this noble cause
                        and make a significant impact possible!
                    </p>
                    <div className="grid justify-start">
                        <Link href="/">
                            <Button
                                variant="outline"
                                className="my-5 ml-[0px] rounded-lg bg-[#00798A] px-4 py-2 text-[16px] text-[white] dark:hover:bg-gray-400"
                            >
                                Join Humanitarian Aid
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center md:w-1/2">
                { " " }
                {/* Opcional md:justify-start en esta clase */ }
                <Image
                    src={ ImageBanner }
                    alt="Image Banner"
                    priority
                    className="w-1/2 md:w-[280px] lg:w-[380px]"
                />
            </div>
        </div>
    );
};

export default Banner;
