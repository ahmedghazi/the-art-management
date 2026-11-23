// import createImageUrlBuilder from "@sanity/image-url";
// import { definePreview } from 'next-sanity/preview'
import { sanityConfig } from "./sanity.client";
import { SanityImageAsset } from "sanity-codegen";
// import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { buildSrc, buildSrcSet } from "@sanity-image/url-builder";

// const imageBuilder = createImageUrlBuilder(sanityConfig);

// type SanityImage = {
//   _type: "image";
//   assetId: string;
//   asset: SanityImageAsset;
//   crop?: SanityImageCrop;
//   hotspot?: SanityImageHotspot;
// };

export function urlFor(source: any, maxWidth: number = 2000): any {
  // Handle both SanityImageAsset and SanityImage types
  // const assetId = source?.assetId || source?.asset?.assetId;

  // if (!assetId) {
  //   console.log("No asset ID found:", source);
  //   return "/placeholder.png";
  // }
  if (!source._id) {
    console.log("No asset ID found:", source);
    return "/placeholder.png";
  }
  try {
    const { src, width, height } = buildSrc({
      id: source._id,
      width: maxWidth,
      baseUrl: `https://cdn.sanity.io/images/${sanityConfig.projectId}/production/`,
    });
    return src;
  } catch (e) {
    console.log(e);
  }
}

// srcset entries come straight from the Sanity CDN at the requested width
export const sanityLoader = ({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  if (!src.startsWith("https://cdn.sanity.io")) return src;
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality || 75));
  url.searchParams.delete("dpr");
  return url.toString();
};
