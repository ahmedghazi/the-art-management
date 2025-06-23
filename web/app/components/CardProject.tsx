import { Link } from "next-view-transitions";
import React, { Fragment } from "react";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import { Project } from "../types/schema";
import Figure from "./ui/Figure";
import AOS from "./ui/AOS";

type Props = {
  input: Project;
};

const CardProject = ({ input }: Props) => {
  // console.log(input);

  return (
    <div className='card--project mb-lg'>
      <Link href={_linkResolver(input)}>
        <h2>{_localizeField(input.title)}</h2>
        <div className='flex grid--8'>
          {input.media?.map((item, i) => (
            <Fragment key={item._key}>
              {item._type === "figure" && (
                <AOS delay={i * 0.5}>
                  <div className='project-media'>
                    <Figure
                      asset={item.image?.asset}
                      width={600}
                      alt={_localizeField(input.title) || ""}
                    />
                  </div>
                </AOS>
              )}
            </Fragment>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default CardProject;
