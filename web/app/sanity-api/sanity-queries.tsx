import { groq } from "next-sanity";
import { sanityFetch } from "./sanity.client";
import {
  Artist,
  Home,
  Infos,
  PageModulaire,
  Project,
  Settings,
} from "../types/schema";
import { media, modules, seo } from "./fragments";
// import { revalidatePath } from "next/cache";

/*****************************************************************************************************
 * SETTINGS
 */
export const SETTINGS_QUERY = groq`*[_type == "settings"][0]{
  ...,

  navPrimary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
      },
    },

  },
  navSecondary[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
      },
    },
  },

}`;

export async function getSettings(): Promise<Settings> {
  return sanityFetch({
    query: SETTINGS_QUERY,
    tags: ["settings"],
  });
  // return client.fetch(

  // );
}

/*****************************************************************************************************
 * Home
 */

export const HOME_QUERY = groq`*[_type == "pageModulaire" && homePage == true][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  },

}`;

export async function getHome(): Promise<PageModulaire> {
  return sanityFetch({
    query: HOME_QUERY,
    tags: ["home"],
  });
}

/*****************************************************************************************************
 * INFOS
 */
export const INFOS_QUERY = groq`*[_type == "infos"][0]{
  ...,
  seo{
    ${seo}
  },
  // modules[]{
  //   ${modules}
  // }
}`;

export async function getInfos(): Promise<Infos> {
  return sanityFetch({
    query: INFOS_QUERY,
    tags: ["infos"],
  });
}

/*****************************************************************************************************
 * PAGE MODULAIRE
 */
export const PAGE_MODULAIRE_QUERY = groq`*[_type == "pageModulaire" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  modules[]{
    ${modules}
  }
}`;

export async function getPageModulaire(slug: string): Promise<PageModulaire> {
  return sanityFetch({
    query: PAGE_MODULAIRE_QUERY,
    tags: ["pageModulaire"],
    qParams: { slug: slug },
  });
  // return cachedClient(pageModulaireQuery, { slug: slug });
}

/*****************************************************************************************************
 * ARTIST
 */
export const ARTIST_QUERY = groq`*[_type == "artist" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  projects[]->{
    _type,
    slug,
    title,
    media[]{
      ${media}
    }
  },
  links[]{
    ...,
    _type == 'linkInternal' => {
      ...,
      link->{
        _type,
        slug,
      },
    },
    _type == 'linkExternal' => {
      ...,
      link,
    },
  },

}`;

export async function getArtist(slug: string): Promise<Artist> {
  return sanityFetch({
    query: ARTIST_QUERY,
    tags: ["artist"],
    qParams: { slug: slug },
  });
}

/*****************************************************************************************************
 * PROJECT
 */
export const PROJECT_QUERY = groq`*[_type == "project" && slug.current == $slug][0]{
  ...,
  seo{
    ${seo}
  },
  artist->{
    _type,
    slug,
    name
  },
  media[]{
    ${media}
  }
}`;

export async function getProject(slug: string): Promise<Project> {
  return sanityFetch({
    query: PROJECT_QUERY,
    tags: ["project"],
    qParams: { slug: slug },
  });
}
