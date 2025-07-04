"use client";
import React, { useState } from "react";

type Props = {};

const Credits = (props: Props) => {
  const designer = {
    name: "Laand studio",
    url: "https://laandstudio.com/",
  };
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div
      className='credits flex items-baseline uppercase- gap-[39px] sans'
      // onMouseEnter={() => setOpen(true)}
      // onMouseLeave={() => setOpen(false)}
    >
      <div
        className='label cursor-pointer '
        onClick={() => setOpen(!open)}
        // onMouseEnter={() => setOpen(!open)}
      >
        Credits
      </div>

      {open && (
        <div
        // className='absolute -top-full whitespace-nowrap text-left md:text-right md:right-0 '
        // style={{
        //   top: "-200%",
        // }}
        >
          <span className='sans'>Design</span>{" "}
          <a
            href={designer.url}
            target='_blank'
            className='p-0 mr-1e- text-gray'
            rel='noopener noreferrer'>
            {designer.name}
          </a>
          {", "}
          <span className=''>Code</span>{" "}
          <a
            href='https://ahmedghazi.com/'
            target='_blank'
            className='p-0 text-gray'
            rel='noopener noreferrer'>
            AHMED GHAZI
          </a>
        </div>
      )}
    </div>
  );
};

export default Credits;
