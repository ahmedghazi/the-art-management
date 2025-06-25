import React from "react";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import Figure from "../ui/Figure";
import { ArtistsGridUI } from "@/app/types/schema";
import CardArtist from "../CardArtist";
import AOS from "../ui/AOS";
import { _localizeField } from "@/app/sanity-api/utils";
import "./ModuleArtistsGridUI.scss";

interface Props {
  input: ArtistsGridUI;
}

const ModuleArtistsGridUI = ({ input }: Props) => {
  const { items = [] } = input;
  return (
    <section className='module module--artists-grid-ui'>
      <div className='grid grid--8'>
        {items.map((item, index) => (
          <div
            key={index}
            className={clsx("artist-goup", `col-span-${item.items?.length}`)}>
            <AOS delay={index * 0.05}>
              <h2 className='md:text-xl'>{_localizeField(item.tag?.title)}</h2>
            </AOS>
            <div className='items'>
              <ul
                className={clsx("grid", `md:grid-cols-${item.items?.length}`)}>
                {item.items?.map((item, _index) => (
                  <li key={_index}>
                    <AOS delay={_index * 0.05}>
                      <CardArtist input={item} />
                    </AOS>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ModuleArtistsGridUI;
