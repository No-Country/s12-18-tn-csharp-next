import React from "react";
import Image from "next/image";

import Container from "./shared/container";
import { Button } from "./ui";

import { Heart, MapPin } from "lucide-react";
import EventProgress from "./event-progress";

interface Props {
  title: string;
  creator: string;
  content: string;
  geo: {
    country: string;
    provice: string;
    city: string;
    lat: number;
    long: number;
  };
  collected: number;
  goal: number;
  media: { type: string; url: string }[];
  // banner: string;
  // tags: string[];
  // topDonators: { name: string; image: string }[];
  // images: string[];
  // creator: { name: string; image: string };
}

const EventDetail = ({
  title,
  creator,
  content,
  geo,
  collected,
  goal,
  media,
}: Props) => {
  return (
    <>
      <div className="border-b border-t border-[#e6e8e9] dark:border-none dark:bg-[#000000]">
        <Container className="py-6">
          <h1>{title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-red-600">
              {/* <Image
                src={creator.image}
                alt="creator image"
                fill
                className="object-cover"
              /> */}
            </div>
            <div>
              <p>Created by</p>
              <p className="font-bold">{creator}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative min-h-screen">
        <Container className="grid grid-cols-3 gap-16 py-8">
          <div className="col-span-2">
            <Image
              src={media[0].url}
              alt="creator image"
              height={480}
              width={851}
              className="object-contain"
            />
            <h2 className="mt-6 font-bold">Details</h2>
            <p className="mt-4">
              {/* {content} */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A earum
              asperiores rem, eaque delectus deleniti ducimus voluptate
              provident labore deserunt laboriosam quasi explicabo ratione non
              quas autem ipsum quos beatae cumque unde minima distinctio impedit
              totam? Eos perspiciatis reiciendis pariatur delectus temporibus
              neque repellendus laudantium dolores eaque libero amet sunt
              praesentium, illo nemo eum minus? Quia repellendus aliquam hic nam
              assumenda nobis. Nesciunt eaque sequi dolore rerum veritatis minus
              corporis magnam, quod consectetur iste deleniti aspernatur
              officiis accusamus cumque vitae provident optio corrupti assumenda
              voluptates repudiandae quidem libero. Quas beatae dicta asperiores
              voluptates saepe distinctio non! Nihil eveniet natus officia
              incidunt molestias tempora, inventore vel nobis maxime culpa saepe
              modi? Dolorum architecto voluptas ducimus aut officia numquam,
              atque quisquam exercitationem!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              consectetur soluta ducimus necessitatibus quam, quia blanditiis
              autem dicta ipsum deserunt libero corrupti assumenda, tempora vero
              rerum. Aliquid assumenda quo nostrum excepturi quos. Praesentium
              iste, optio aspernatur dolore non, ullam dolor harum accusantium
              qui iusto, ducimus officia incidunt error nihil obcaecati
              veritatis dignissimos. Consequuntur reiciendis atque laudantium
              rerum reprehenderit, odit asperiores!
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
              maxime enim, ea officiis atque ipsam aliquam iusto possimus
              molestiae, doloribus similique aut provident aperiam adipisci eos
              officia facilis quasi fuga? Sunt molestiae molestias enim debitis?
              Magni beatae atque quo, mollitia, perspiciatis quia dignissimos
              nulla voluptatum facilis quidem cumque vitae accusantium cum amet
              explicabo sunt. Nemo quasi, dolor quos ipsum omnis maiores nam.
              Laudantium neque eos nesciunt voluptate labore facilis ut
              repudiandae aperiam ipsa vel similique, ad officiis assumenda aut
              dolorum?
            </p>
          </div>
          <div>
            <div>
              <h2 className="mb-3">
                Event Goal: <span className="font-bold">${goal}</span>
              </h2>
              <EventProgress collected={collected} goal={goal} />
            </div>
            <div className="mt-10 flex w-full flex-col gap-6 rounded-sm bg-black px-3 py-3 dark:bg-white">
              <div className="flex items-center gap-3 text-white dark:text-slate-800">
                <MapPin size={20} />
                <p>{`${geo.country}, ${geo.provice}, ${geo.city}`}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="sticky bottom-0 z-10 border-t border-[#e6e8e9] bg-white dark:border-none dark:bg-[#000000]">
        <Container className="flex items-center justify-between py-6">
          <p>
            Collaborate with <span className="font-bold">{creator}</span> and
            contribute to this cause?
          </p>
          <div className="flex items-center gap-6">
            <Heart className="cursor-pointer" />
            <Button>Share</Button>
            <Button>Donate</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EventDetail;
