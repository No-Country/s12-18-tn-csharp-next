import { FC } from "react";

import Link from "next/link";

interface FooterLinkProps {
  href: string
  text: string
}

const FooterLink: FC<FooterLinkProps> = ({
  href,
  text
}) => {
  return (
    <li className="mb-2">
      <Link
        href={ href }
        className="inlink-block dark:text-gray-300  text-gray-300 hover:text-white focus:text-white">
        { text }
      </Link>
    </li>
  )
}

export default FooterLink