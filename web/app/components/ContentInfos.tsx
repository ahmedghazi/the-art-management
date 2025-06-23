"use client";
import React from "react";
import { Infos } from "../types/schema";
import { PortableText } from "next-sanity";
import portableTextComponents from "../sanity-api/portableTextComponents";
import { _localizeField } from "../sanity-api/utils";

type Props = {
  input: Infos;
};

const ContentInfos = ({ input }: Props) => {
  return (
    <div className='content content--infos p-sm'>
      <div className='grid md:grid-cols-2'>
        <div className='text md:text-xl'>
          <PortableText
            value={_localizeField(input.text)}
            components={portableTextComponents}
          />
        </div>
        <div>
          <div className='grid md:grid-cols-2'>
            <div className=''>
              <h2 className='sans mb-1e'>
                {_localizeField(input.contacts?.title)}
              </h2>
              <ul>
                {input.contacts?.items?.map((contact, i) => (
                  <li key={i} className='mb-1e'>
                    <div className='key text-sm'>{contact.key}</div>
                    <div className='val'>
                      <PortableText
                        value={_localizeField(contact.val)}
                        components={portableTextComponents}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className=''>
              <ul className=''>
                {input.infosItems?.map((info, i) => (
                  <li key={i} className='item mb-2e'>
                    <div className='key sans'>{info.key}</div>
                    <div className='val'>
                      <PortableText
                        value={_localizeField(info.val)}
                        components={portableTextComponents}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='credits'>credits</div>
    </div>
  );
};

export default ContentInfos;
