"use client";
import React, { useEffect, useState } from "react";
import { LocaleString, Project } from "../types/schema";
import { Link } from "next-view-transitions";
import { _linkResolver, _localizeField } from "../sanity-api/utils";

import ProjectSlider from "./ProjectSlider";
import { useScroll } from "../hooks/useScroll";
import CursorCustom from "./ui/CursorCustom";
import clsx from "clsx";
import { subscribe, unsubscribe } from "pubsub-js";
import LinkTransition from "./ui/LinkTransition";
import { useRouter } from "next/navigation";
type Props = {
  input: Project;
};

const ContentProject = ({ input }: Props) => {
  const { artist, media, title, subTitle, nextProject } = input;
  const { isBottom } = useScroll();
  const [currentProject, setCurrentProject] = useState<LocaleString | string>(
    subTitle ? subTitle : title || ""
  );
  const router = useRouter();

  useEffect(() => {
    const subscription = subscribe("CURRENT_SLIDER_PROJECT", (e, data) => {
      setCurrentProject(data);
    });
    return () => {
      unsubscribe(subscription);
    };
  }, []);

  const _navigateToNextProject = () => {
    const nextProjectUrl = _linkResolver(nextProject);
    router.push(nextProjectUrl);
  };

  return (
    <div
      className={clsx("content--project", {
        "is-bottom": isBottom && nextProject !== null,
      })}>
      {media && <ProjectSlider input={media} onEnd={_navigateToNextProject} />}

      <div className='footer'>
        <div className='grid grid-cols-4 items-end'>
          {artist && (
            <div className='artist sans'>
              <LinkTransition
                direction='prev'
                href={_linkResolver(artist)}
                className=''>
                <span className='label mr-sm text-gray'>Artist page</span>
                <span className=' hidden-sm'>{artist.name}</span>
              </LinkTransition>
            </div>
          )}
          <div className='col-center col-span-2'>
            <h1 className='text-lg-alt--mobile md:text-xl'>
              {_localizeField(currentProject)}
            </h1>
            <LinkTransition
              direction='prev'
              href={_linkResolver(artist)}
              className='sans sm-only text-sm-alt--mobile'>
              {artist?.name}
            </LinkTransition>
          </div>
        </div>
      </div>

      {isBottom && nextProject && (
        <CursorCustom>
          <LinkTransition
            href={_linkResolver(nextProject)}
            className='sans pointer-events-auto cursor-none'>
            Next Project
          </LinkTransition>
        </CursorCustom>
      )}
    </div>
  );
};

export default ContentProject;
