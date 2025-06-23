import React from "react";
import website from "@/app/config/website";
import { getClient } from "@/app/sanity-api/sanity-client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import ContentArtist from "@/app/components/ContentArtist";
import { Artist } from "@/app/types/schema";
import { ARTIST_QUERY, getArtist } from "@/app/sanity-api/sanity-queries";
import { notFound } from "next/navigation";
// import { getArtist, Artist_QUERY } from "@/app/sanity-api/sanity-queries";
// import { Artist } from "@/app/types/schema";
// import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArtist(slug);
  return {
    title: `${data?.seo?.metaTitle || data?.name || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const ArtistPage: NextPage<PageProps> = async ({ params }) => {
  let data: Artist;
  const { slug } = await params;
  const { isEnabled } = await draftMode();
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      ARTIST_QUERY,
      params
    );
  } else {
    data = (await getArtist(slug)) as Artist;
  }

  if (!data) return notFound();
  return (
    <div className='template template--artist' data-template='artist'>
      <ContentArtist input={data} />
    </div>
  );
};

export default ArtistPage;
