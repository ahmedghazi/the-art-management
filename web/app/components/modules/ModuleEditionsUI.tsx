import React from "react";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import Figure from "../ui/Figure";
import { EditionsUI } from "@/app/types/schema";

interface Props {
  input: EditionsUI;
}

const ModuleEditionsUI = ({ input }: Props) => {
  const { title, image, intro, images = [], text } = input;

  return (
    <section className='module module--editions'>
      <h2 className='module__title'>{title}</h2>

      {/* <div className="editions__header">
        <Figure asset={image.image.asset} caption={image.caption} />
        <div className="editions__intro">
          <PortableText value={intro.fr} components={portableTextComponents} />
        </div>
      </div>

      <div className="editions__gallery">
        {images.map((figure, index) => (
          <div key={index} className="editions__image">
            <Figure asset={figure.image.asset} caption={figure.caption} />
          </div>
        ))}
      </div>

      <div className="editions__content">
        <PortableText value={text.fr} components={portableTextComponents} />
      </div> */}
    </section>
  );
};

export default ModuleEditionsUI;
