import React from "react";
import { Edition } from "../types/schema";
import { _localizeField } from "../sanity-api/utils";
import { PortableText } from "next-sanity";
import Figure from "./ui/Figure";

type Props = {
  input: Edition;
};

const ProjectEdition = ({ input }: Props) => {
  const { title, text, imageCover, images, intro, isbn, link, price } = input;
  return (
    <article className='edition'>
      <div className='grid grid-cols-4 md:grid-cols-8 mb-0'>
        <div className='col-start-2 col-span-2 md:col-start-4 md:col-span-2'>
          <Figure asset={imageCover?.asset} alt={_localizeField(title)} />
        </div>
      </div>
      <div className='md:grid grid-cols-4 md:grid-cols-8 mb-md'>
        <div className='md:col-start-4 md:col-span-2'>
          <h3 className='text-lg-alt--mobile md:text-xl uppercase'>
            {_localizeField(title)}
          </h3>
          <div className='isbn sans text-xs'>{isbn}</div>
        </div>
      </div>

      <div className='md:grid grid-cols-8 mb-md'>
        <div className='md:col-start-3 md:col-span-4'>
          <div className='text text-md-alt md:text-lg-alt'>
            <PortableText value={_localizeField(intro)} />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-sm mb-lg md:mb-md'>
        {images?.map((item, i) => (
          <Figure
            key={i}
            asset={item.asset}
            alt={_localizeField(item.asset.originalFilename)}
          />
        ))}
      </div>

      <div className='grid md:grid-cols-2 gap-y-lg md:gap-sm'>
        <div className='sans text-sm cta'>
          <a href={link?.link} target='_blank' rel='noopener noreferrer'>
            <div className='label'>{link?.label}</div>
            <div className='price'>({price}€)</div>
          </a>
        </div>
        <div className='text sans text-sm'>
          <PortableText value={_localizeField(text)} />
        </div>
      </div>
    </article>
  );
};

export default ProjectEdition;
