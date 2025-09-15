"use client";
import React, { useEffect, useState } from "react";
import { Settings } from "../types/schema";
import Logo from "./Logo";
import { PortableText } from "next-sanity";
import { _localizeField } from "../sanity-api/utils";
import portableTextComponents from "../sanity-api/portableTextComponents";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { usePageContext } from "../context/PageContext";

type Props = {
  settings: Settings;
};

const Splash = ({ settings }: Props) => {
  const pathname = usePathname();
  const [collapse, setCollapse] = useState(false);
  const { userHistory } = usePageContext();
  const canDisplay = userHistory.length === 1 && pathname === "/";

  useEffect(() => {
    if (!canDisplay) return;
    console.log("here");
    setTimeout(() => {
      setCollapse(true);
    }, 2000);
  }, [canDisplay]);

  return (
    <div
      className={clsx(
        "splash",
        { "is-collapsed": collapse },
        { hidden: !canDisplay }
      )}
      onMouseMove={() => setCollapse(true)}
      onClick={() => setCollapse(true)}>
      <div className='flex'>
        <div className='text text-lg-alt--mobile md:text-2xl'>
          <PortableText
            value={_localizeField(settings.description)}
            components={portableTextComponents}
          />
        </div>
        <Logo />
      </div>
    </div>
  );
};

export default Splash;
