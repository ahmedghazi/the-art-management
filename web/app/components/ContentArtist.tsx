"use client";
import React, { Fragment } from "react";
import { Artist } from "../types/schema";
import { PortableText } from "next-sanity";
import portableTextComponents from "../sanity-api/portableTextComponents";
import { _localizeField } from "../sanity-api/utils";
import CardProject from "./CardProject";

type Props = {
  input: Artist;
};

const ContentArtist = ({ input }: Props) => {
  const { name, text, projects, links } = input;
  return (
    <div className='content--artist px-sm'>
      <section className='presentation mb-xl'>
        <div className='grid grid--8'>
          <div className='md:col-start-3 md:col-span-4'>
            <div className='text md:text-lg'>
              <PortableText
                value={_localizeField(text)}
                components={portableTextComponents}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='projects mb-xl'>
        {projects?.map((item, i) => (
          <Fragment key={i}>
            {item && item.slug && <CardProject input={item} />}
          </Fragment>
        ))}
      </section>
      <section className='links mb-xl'>
        {/* <pre>{JSON.stringify(links, null, 2)}</pre> */}
        <ul>
          {links?.map((item, i) => (
            <li key={i} className='sans'>
              {item._type === "linkExternal"}
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ContentArtist;
