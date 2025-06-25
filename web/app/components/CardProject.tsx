import { Link } from "next-view-transitions";
import React, { Fragment } from "react";
import { _linkResolver, _localizeField } from "../sanity-api/utils";
import { Project } from "../types/schema";
import Figure from "./ui/Figure";
import AOS from "./ui/AOS";
import LinkTransition from "./ui/LinkTransition";

type Props = {
  input: Project;
};

const CardProject = ({ input }: Props) => {
  return (
    <div className='card--project mb-lg'>
      <LinkTransition href={_linkResolver(input)}>
        <Figure
          asset={input.imageCover?.asset}
          width={600}
          alt={_localizeField(input.title) || ""}
        />
        <h2 className='sans'>{_localizeField(input.subTitle)}</h2>
      </LinkTransition>
    </div>
  );
};

export default CardProject;
