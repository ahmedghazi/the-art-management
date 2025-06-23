"use client";
import React from "react";
import { Settings } from "../types/schema";
import Logo from "./Logo";
import Link from "next/link";
import { _linkResolver, _localizeField } from "../sanity-api/utils";

type Props = {
  settings: Settings;
};

const Header = ({ settings }: Props) => {
  return (
    <header>
      <div className='grid md: grid-cols-3 '>
        <div className='site-name'>
          <Link href='/'>
            <Logo />
          </Link>
        </div>
        <nav>
          <ul className='flex justify-center sans gap-sm'>
            {settings.navPrimary?.map((item, index) => (
              <li key={index}>
                <Link href={_linkResolver(item.link)}>
                  {_localizeField(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
