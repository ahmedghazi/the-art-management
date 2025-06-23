import React from "react";
import { PageModulaire } from "../types/schema";
import Modules from "./modules";

type Props = {
  input: PageModulaire;
};

const ContentModulaire = ({ input }: Props) => {
  return (
    <div className='content--modulaire'>
      {/* <pre>{JSON.stringify(input, null, 2)}</pre> */}
      {input.modules && <Modules modules={input.modules} />}
    </div>
  );
};

export default ContentModulaire;
