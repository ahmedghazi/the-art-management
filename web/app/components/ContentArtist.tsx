"use client";
import React, { Fragment, useRef } from "react";
import { Artist } from "../types/schema";
import { PortableText } from "next-sanity";
import portableTextComponents from "../sanity-api/portableTextComponents";
import { _localizeField } from "../sanity-api/utils";
import CardProject from "./CardProject";
import CardsProject from "./CardsProject";
import clsx from "clsx";
import ProjectEdition from "./ProjectEdition";
import BackToTop from "./ui/BackToTop";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {
  input: Artist;
};

const ContentArtist = ({ input }: Props) => {
  const { name, text, editions, projectsTagged, projects, links } = input;
  console.log(input);
  const hasEditions = editions && editions?.length > 0;

  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from("h2, .card, .project-media", {
        opacity: 0,
        y: "10",
        stagger: 0.1,
      });
    },
    { scope: ref }
  );
  return (
    <div className='content--artist px-sm' ref={ref}>
      {text && (
        <section className='presentation mb-2xl'>
          <div className='md:grid md:grid-cols-8'>
            <div className='md:col-start-3 md:col-span-4'>
              <div className='text text-md-alt md:text-lg'>
                <PortableText
                  value={_localizeField(text)}
                  components={portableTextComponents}
                />
              </div>
            </div>
          </div>
        </section>
      )}
      {hasEditions && <h2 className='sans'>Editions</h2>}
      {hasEditions && (
        <section className='editions mb-2xl'>
          {editions?.map((item, i) => (
            <ProjectEdition key={i} input={item} />
          ))}
        </section>
      )}

      {hasEditions && <h2 className='sans'>Works</h2>}

      <section className='projects projects-tagged mb-2xl'>
        <div
          className={clsx(
            "flex justify-center gap-sm",
            `len-${projectsTagged?.length}`
          )}>
          {/* <pre>{JSON.stringify(projectsTagged, null, 2)}</pre> */}
          {projectsTagged?.map((item, i) => (
            <div key={i} className={"w-1/2 md:w-2/8"}>
              {item && item.slug && <CardProject input={item} />}
            </div>
          ))}
        </div>
      </section>
      <section className='projects projects mb-2xl'>
        {projects?.map((item, i) => (
          <Fragment key={i}>
            {item && item.slug && <CardsProject input={item} />}
          </Fragment>
        ))}
      </section>
      <section className='links py-lg mb-2xl'>
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
      <BackToTop />
    </div>
  );
};

export default ContentArtist;
