import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ClipboardCopy,
  Facebook,
  Linkedin,
  Share,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib";

interface Props {
  title: string;
  author: string;
  link: string;
  handleCopy: () => void;
}

const EventShareButton = ({ title, author, link, handleCopy }: Props) => {
  const text = `Colaborá con ${author} y contribuí a la causa: ${title}`;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className={cn("mt-1 px-3 py-1")}>
          <Share size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white dark:bg-black sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">
            Compartí este evento
          </DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-3">
          <li>
            {/* TODO: update app id with env */}
            <Link
              href={`https://www.facebook.com/dialog/feed?app_id=completar&display=popup&link=${link}`}
              target="_blank"
            >
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start gap-4"
              >
                <Facebook size={20} />
                Facebook
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href={`https://twitter.com/intent/tweet?url=${link}&text=${text}`}
              target="_blank"
            >
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start gap-4"
              >
                <Twitter size={20} />
                Twitter
              </Button>
            </Link>
          </li>
          <li>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}&summary=${text}`}
              target="_blank"
            >
              <Button
                variant="ghost"
                className="flex w-full items-center justify-start gap-4"
              >
                <Linkedin size={20} />
                LinkedIn
              </Button>
            </Link>
          </li>
          <li>
            <DialogClose asChild>
              <Button
                onClick={handleCopy}
                variant="ghost"
                className="flex w-full items-center justify-start gap-4"
              >
                <ClipboardCopy size={20} />
                Copiá al portapapeles
              </Button>
            </DialogClose>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default EventShareButton;
