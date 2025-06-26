"use client";
import React from "react";
import { Settings } from "../types/schema";
import Logo from "./Logo";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import LinkTransition from "./ui/LinkTransition";
import { usePathname } from "next/navigation";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const pathname = usePathname();
  const direction =
    pathname.indexOf("artist/") > -1 || pathname.indexOf("project/") > -1
      ? "n"
      : "s";
  return (
    <header>
      <div className='grid grid-cols-2 md:grid-cols-3 '>
        <div className='site-name'>
          <LinkTransition direction={direction} href='/'>
            <Logo />
          </LinkTransition>
        </div>
        <nav>
          <ul className='flex justify-end md:justify-center sans gap-sm'>
            {settings.navPrimary?.map((item, index) => (
              <li key={index}>
                <LinkTransition
                  direction={direction}
                  href={_linkResolver(item.link)}>
                  {_localizeField(item.label)}
                </LinkTransition>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
