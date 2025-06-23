import React from "react";
import { ProductionItem } from "../types/schema";
import Figure from "./ui/Figure";
import { _localizeField } from "../sanity-api/utils";

type Props = {
  input: ProductionItem;
  className?: string;
};

const ProductionItemComponent = ({ input, className }: Props) => {
  return (
    <article className={className || ""}>
      <Figure asset={input.image?.asset} alt={_localizeField(input.title)} />
      <div className='header'>
        <h2>{_localizeField(input.title)}</h2>
        <span className='subtitle sans'>{_localizeField(input.subtitle)}</span>
      </div>
    </article>
  );
};

export default ProductionItemComponent;
