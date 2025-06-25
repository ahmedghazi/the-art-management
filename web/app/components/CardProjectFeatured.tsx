import React, { useEffect, useRef } from "react";
import { Project, ProjectFeatured, SanityKeyed } from "../types/schema";
import { _linkResolver, _localizeField, _slugify } from "../sanity-api/utils";
import Figure from "./ui/Figure";
import clsx from "clsx";
import useOnScreen from "../hooks/useOnScreen";
import { publish } from "pubsub-js";
import LinkTransition from "./ui/LinkTransition";

type Props = {
  input: SanityKeyed<ProjectFeatured>;
};

const CardProjectFeatured = ({ input }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isOnScreen) {
      publish("ARTIST_ON_SCREEN", input._key);
    }
  }, [isOnScreen, input._key]);

  return (
    <article
      className='card card--project_featured snap-start'
      ref={ref}
      id={`article-${input._key}`}>
      <LinkTransition href={_linkResolver(input.project)}>
        <div className={clsx("grid gap-0", `grid-cols-${input.media?.length}`)}>
          {input.media?.map((item, i) => (
            <div key={item.image?.asset._id}>
              {item.image && (
                <Figure
                  asset={item.image.asset}
                  width={2000}
                  alt={_localizeField(input.title) || ""}
                />
              )}
            </div>
          ))}
        </div>
      </LinkTransition>
    </article>
  );
};

export default CardProjectFeatured;
