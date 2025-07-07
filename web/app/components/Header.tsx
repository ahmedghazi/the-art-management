"use client";
import React, { useState } from "react";
import { Settings } from "../types/schema";
import Logo from "./Logo";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import LinkTransition from "./ui/LinkTransition";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  const pathname = usePathname();
  const direction =
    pathname.indexOf("artist/") > -1 || pathname.indexOf("project/") > -1
      ? "n"
      : "s";
  const [currentNavItem, setCurrentNavItem] = useState<string>("");
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
              <li
                key={index}
                onMouseEnter={() => setCurrentNavItem(item._key)}
                onMouseLeave={() => setCurrentNavItem("")}>
                <LinkTransition
                  className={clsx(
                    currentNavItem &&
                      currentNavItem !== item._key &&
                      "not-active"
                  )}
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
