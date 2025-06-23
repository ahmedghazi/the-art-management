import React from "react";
import clsx from "clsx";
import { PortableText } from "@portabletext/react";
import { TextUI } from "@/app/types/schema";
import portableTextComponents from "@/app/sanity-api/portableTextComponents";
import { _localizeField } from "@/app/sanity-api/utils";
// import portableTextComponents from '@/app/utils/portableTextComponents';

interface Props {
  input: TextUI;
}

const ModuleTextUI = ({ input }: Props) => {
  const { text } = input;

  return (
    <section className={clsx("module module--text")}>
      <div className='text-container'>
        {text && (
          <PortableText
            value={_localizeField(text)}
            components={portableTextComponents}
          />
        )}
      </div>
    </section>
  );
};

export default ModuleTextUI;
