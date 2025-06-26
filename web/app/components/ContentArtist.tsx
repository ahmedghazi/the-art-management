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
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  input: Artist;
};

const ContentArtist = ({ input }: Props) => {
  const { name, text, editions, projectsTagged, projects, links } = input;
  const hasEditions = editions && editions?.length > 0;

  const ref = useRef<HTMLDivElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      return;
      // Check if we can find the template element
      const scroller = document.querySelector("main .template");
      if (!scroller) {
        console.error("scroller element not found!");
        return;
      }
      console.log("scroller element found:", scroller);

      // Get all elements with the animation class
      const elements = document.querySelectorAll(
        "h2, .card, .text, .project-media, .edition figure"
      );
      // Create a timeline for all elements
      const masterTimeline = gsap.timeline();

      elements.forEach(function (element, index) {
        console.log("Animating element:", element);

        // Create individual animation for each element
        masterTimeline.from(
          element,
          {
            y: 10,
            opacity: 0,
            // ease: "power2.out",
            duration: 0.3,
            stagger: 0.05,
            scrollTrigger: {
              trigger: element,
              scroller: scroller,
              start: "top 80%",
              end: "top 20%",
            },
          }
          // ">-=0.001"
        ); // Reduced stagger timing for super fast animation
      });

      // Return the master timeline
      return masterTimeline;
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
      {links && (
        <section className='links py-lg mb-2xl'>
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
      )}
      <div></div>
      <BackToTop />
    </div>
  );
};

export default ContentArtist;
