import React from "react";
import website from "@/app/config/website";
import { getClient } from "@/app/sanity-api/sanity-client";
import { Metadata, NextPage } from "next";
import { draftMode } from "next/headers";
import {
  getPageModulaire,
  PAGE_MODULAIRE_QUERY,
} from "@/app/sanity-api/sanity-queries";
import { PageModulaire } from "@/app/types/schema";
import { notFound } from "next/navigation";
import ContentModulaire from "@/app/components/ContentModulaire";

type Params = Promise<{ slug: string }>;

type PageProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getPageModulaire(slug);
  return {
    title: `${data?.seo?.metaTitle || data?.title?.fr || ""}`,
    description: data?.seo?.metaDescription,
    openGraph: {
      images: data?.seo?.metaImage?.asset.url || website.image,
    },
  };
}

const TemplatePageModulaire: NextPage<PageProps> = async ({ params }) => {
  let data: PageModulaire;
  const { slug } = await params;

  const { isEnabled } = await draftMode();
  if (isEnabled) {
    data = await getClient({ token: process.env.SANITY_API_READ_TOKEN }).fetch(
      PAGE_MODULAIRE_QUERY,
      { slug: slug }
    );
  } else {
    data = (await getPageModulaire(slug)) as PageModulaire;
  }

  if (!data) return notFound();

  return (
    <div
      className='template template--page'
      data-template={`page`}
      data-slug={`${slug}`}>
      <ContentModulaire input={data} />
    </div>
  );
};

export default TemplatePageModulaire;
