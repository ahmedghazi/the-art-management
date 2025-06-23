"use client";
import React from "react";
import { Project } from "../types/schema";
import { Link } from "next-view-transitions";
import { _linkResolver, _localizeField } from "../sanity-api/utils";

import ProjectSlider from "./ProjectSlider";
import { useScroll } from "../hooks/useScroll";
import CursorCustom from "./ui/CursorCustom";
import clsx from "clsx";
type Props = {
  input: Project;
};

const ContentProject = ({ input }: Props) => {
  const { artist, media, title } = input;
  const { isBottom } = useScroll("main");
  console.log(isBottom);
  return (
    <div className={clsx("content--project", { "is-bottom": isBottom })}>
      {media && <ProjectSlider input={media} />}

      <div className='footer'>
        {artist && (
          <div className='artist'>
            <span className='label mr-sm'>Artist page</span>
            <Link href={_linkResolver(artist)} className='sans'>
              {artist.name}
            </Link>
          </div>
        )}
        <h1>{_localizeField(title)}</h1>
      </div>

      {isBottom && (
        <CursorCustom>
          <Link href='/' className='sans pointer-events-auto'>
            Next Project
          </Link>
        </CursorCustom>
      )}
    </div>
  );
};

export default ContentProject;
