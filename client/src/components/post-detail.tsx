import React from "react";
import Image from "next/image";

import Container from "./shared/container";
import { Button } from "./ui";

import { Heart } from "lucide-react";

interface Props {
  title: string;
  creator: { name: string; image: string };
  banner: string;
  content: string;
  tags: string[];
  topDonators: { name: string; image: string }[];
  images: string[];
}

const PostDetail = ({
  title,
  creator,
  banner,
  content,
  tags,
  topDonators,
  images,
}: Props) => {
  return (
    <>
      <div className="border-b border-t border-[#e6e8e9] bg-[#000000]">
        <Container className="py-6">
          <h1>{title}</h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={creator.image}
                alt="creator image"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p>Created by</p>
              <p className="font-bold">{creator.name}</p>
            </div>
          </div>
        </Container>
      </div>
      <div className="relative">
        <Container className="grid grid-cols-3 gap-4 py-8">
          <div className="col-span-2">
            <Image
              src={banner}
              alt="creator image"
              height={480}
              width={851}
              className="object-contain"
            />
            <h2 className="mt-6 font-bold">Details</h2>
            <p className="mt-4">
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
          <div></div>
        </Container>
      </div>
      <div className="sticky bottom-0 z-10 bg-[#000000]">
        <Container className="flex items-center justify-between py-6">
          <p>
            Collaborate with <span className="font-bold">{creator.name}</span>{" "}
            and contribute to this cause?
          </p>
          <div className="flex items-center gap-6">
            <Heart />
            <Button>Share</Button>
            <Button>Donate</Button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PostDetail;
