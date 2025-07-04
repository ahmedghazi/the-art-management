export declare type SanityReference<T> = T & {
  _ref: string;
};

export declare type SanityKeyedReference<T> = T & {
  _key: string;
  _ref: string;
};

import type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  // SanityReference,
  // SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Home
 *
 *
 */
export interface Home extends SanityDocument {
  _type: "home";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Titre — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Project>>;
}

/**
 * Infos
 *
 *
 */
export interface Infos extends SanityDocument {
  _type: "infos";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL based on the title (no space, or char other than a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * Contacts — `keyValGroup`
   *
   *
   */
  contacts?: KeyValGroup;

  /**
   * Infos — `array`
   *
   *
   */
  infosItems?: Array<SanityKeyed<KeyVal>>;
}

/**
 * Réglages (header, footer, ...)
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * siteName — `string`
   *
   *
   */
  siteName?: string;

  /**
   * Description — `localeBlockContent`
   *
   * Text visible sur la landing page
   */
  description?: LocaleBlockContent;

  /**
   * Naviguation Primary — `array`
   *
   *
   */
  navPrimary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;

  /**
   * Naviguation Secondary — `array`
   *
   *
   */
  navSecondary?: Array<SanityKeyed<LinkInternal> | SanityKeyed<LinkExternal>>;

  /**
   * Message 404 — `blockContent`
   *
   *
   */
  message404?: BlockContent;

  /**
   * customCss — `text`
   *
   *
   */
  customCss?: string;
}

/**
 * Page Modulaire
 *
 *
 */
export interface PageModulaire extends SanityDocument {
  _type: "pageModulaire";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * homePage — `boolean`
   *
   *
   */
  homePage?: boolean;

  /**
   * Titre — `localeString`
   *
   * Le nom de la page
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Modules — `array`
   *
   * Zone de contenu Modulaire (images, textes, embed)
   */
  modules?: Array<
    | SanityKeyed<ProjectsFeaturedUI>
    | SanityKeyed<ArtistsGridUI>
    | SanityKeyed<VideoUI>
    | SanityKeyed<ProjectsUI>
    | SanityKeyed<ProductionsUI>
  >;
}

/**
 * Project
 *
 *
 */
export interface Project extends SanityDocument {
  _type: "project";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Sub Title — `localeString`
   *
   * Displayed in artist page's tagged projects
   */
  subTitle?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Artist — `reference`
   *
   *
   */
  artist?: SanityReference<Artist>;

  /**
   * tag — `reference`
   *
   *
   */
  tag?: SanityReference<Tag>;

  /**
   * Image cover — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Media — `array`
   *
   *
   */
  media?: Array<SanityKeyed<Figure> | SanityKeyed<VideoMux>>;

  /**
   * Projets suivant — `reference`
   *
   *
   */
  nextProject?: SanityReference<Project>;
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Title — `localeString`
   *
   * ex: Director
   */
  title?: LocaleString;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };
}

/**
 * Artist
 *
 *
 */
export interface Artist extends SanityDocument {
  _type: "artist";

  /**
   * seo — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   * URL basée sur le titre (sans espace ni caractère autre que a-z-0-9
   */
  slug?: { _type: "slug"; current: string };

  /**
   * tag — `reference`
   *
   * Visible sur la page d'acceuil
   */
  tag?: SanityReference<Tag>;

  /**
   * Image cover — `image`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Video cover — `videoMux`
   *
   * Visible on liste pages, project cards (largeur 1400px)
   */
  videoCover?: VideoMux;

  /**
   * Texte — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * Editions — `array`
   *
   * optionnel
   */
  editions?: Array<SanityKeyed<Edition>>;

  /**
   * projectsTagged — `array`
   *
   * Commisions, Personnal, Beauty, ..., créer un projet qui contient des media en fonction
   */
  projectsTagged?: Array<SanityKeyedReference<Project>>;

  /**
   * Projets — `array`
   *
   * Image ou Video
   */
  projects?: Array<SanityKeyedReference<Project>>;

  /**
   * Links — `array`
   *
   * Liens vers le site de l'artiste, ses réseaux, ...
   */
  links?: Array<SanityKeyed<LinkExternal>>;
}

export type LocaleString = {
  _type: "localeString";
  /**
   * English — `string`
   *
   *
   */
  en?: string;
};

export type LocaleBlockContent = {
  _type: "localeBlockContent";
  /**
   * English — `blockContent`
   *
   *
   */
  en?: BlockContent;
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type LinkExternal = {
  _type: "linkExternal";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
};

export type LinkInternal = {
  _type: "linkInternal";
  /**
   * label — `localeString`
   *
   *
   */
  label?: LocaleString;

  /**
   * link — `reference`
   *
   *
   */
  link?: SanityReference<Infos | PageModulaire | Home | Project>;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta title — `string`
   *
   *
   */
  metaTitle?: string;

  /**
   * Meta description — `string`
   *
   *
   */
  metaDescription?: string;

  /**
   * Meta image — `image`
   *
   *
   */
  metaImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Embed = {
  _type: "embed";
  /**
   * url — `url`
   *
   * url publique du media ex: https://www.youtube.com/watch?v=exTZ9vB6ZeE
   */
  url?: string;
};

export type KeyVal = {
  _type: "keyVal";
  /**
   * Clef — `string`
   *
   *
   */
  key?: string;

  /**
   * Valeur — `localeBlockContent`
   *
   *
   */
  val?: LocaleBlockContent;
};

export type KeyValGroup = {
  _type: "keyValGroup";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<KeyVal>>;
};

export type Figure = {
  _type: "figure";
  /**
   * Image — `image`
   *
   * jpg, 2000px de large, 72dpi
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Description (pour le référencent et l'accessibilité — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Image Mobile — `image`
   *
   * jpg, 1400px de large, 72dpi
   */
  imageMobile?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alt Description — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * project — `reference`
   *
   * will replace the title in the project page
   */
  project?: SanityReference<Project>;
};

export type Figures = {
  _type: "figures";
  /**
   * Figure(s) — `array`
   *
   * jpg, 1400px de large, 72dpi
   */
  items?: Array<SanityKeyed<Figure>>;

  /**
   * Caption — `string`
   *
   *
   */
  caption?: string;
};

export type ProductionItem = {
  _type: "productionItem";
  /**
   * Title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Subtitle — `localeString`
   *
   *
   */
  subtitle?: LocaleString;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Video — `videoMux`
   *
   *
   */
  video?: VideoMux;
};

export type VideoMux = {
  _type: "videoMux";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Avec de l'audio — `boolean`
   *
   * Avec de l'audio = avec les boutons play/pause, mute
   */
  withAudio?: boolean;

  /**
   * placeholder — `image`
   *
   * Image placeholder
   */
  placeholder?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * videoDesktop — `mux.video`
   *
   *
   */
  videoDesktop?: MuxVideo;

  /**
   * project — `reference`
   *
   * will replace the title in the project page
   */
  project?: SanityReference<Project>;
};

export type ProjectFeatured = {
  _type: "projectFeatured";
  /**
   * artist — `reference`
   *
   *
   */
  artist?: SanityReference<Artist>;

  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * project — `reference`
   *
   *
   */
  project?: SanityReference<Project>;

  /**
   * media — `array`
   *
   *
   */
  media?: Array<SanityKeyed<Figure> | SanityKeyed<VideoMux>>;

  /**
   * headerDark — `boolean`
   *
   * Passer le header (logo, nav) en noir si ce projet a un visuel clair. Default est false (blanc)
   */
  headerDark?: boolean;
};

export type ArtistsGrid = {
  _type: "artistsGrid";
  /**
   * tag — `reference`
   *
   *
   */
  tag?: SanityReference<Tag>;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Artist>>;
};

export type Edition = {
  _type: "edition";
  /**
   * title — `localeString`
   *
   *
   */
  title?: LocaleString;

  /**
   * Image — `image`
   *
   *
   */
  imageCover?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * isbn — `string`
   *
   *
   */
  isbn?: string;

  /**
   * Intro — `localeBlockContent`
   *
   *
   */
  intro?: LocaleBlockContent;

  /**
   * Images — `array`
   *
   * jpg, 1400px de large, 72dpi
   */
  images?: Array<
    SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  >;

  /**
   * Text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * link — `linkExternal`
   *
   *
   */
  link?: LinkExternal;

  /**
   * price — `number`
   *
   *
   */
  price?: number;
};

export type ArtistsGridUI = {
  _type: "artistsGridUI";
  /**
   * title — `localeString`
   *
   * internal
   */
  title?: LocaleString;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<ArtistsGrid>>;
};

export type ProjectsUI = {
  _type: "projectsUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyedReference<Project>>;
};

export type VideoUI = {
  _type: "videoUI";
  /**
   * Title — `string`
   *
   * Title
   */
  title?: string;

  /**
   * Video — `videoMux`
   *
   *
   */
  video?: VideoMux;
};

export type ProjectsFeaturedUI = {
  _type: "projectsFeaturedUI";
  /**
   * title — `string`
   *
   *
   */
  title?: string;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<ProjectFeatured>>;
};

export type ProductionsUI = {
  _type: "productionsUI";
  /**
   * title — `string`
   *
   * Internal title (displayed only in the admin)
   */
  title?: string;

  /**
   * text — `localeBlockContent`
   *
   *
   */
  text?: LocaleBlockContent;

  /**
   * Featured Production — `productionItem`
   *
   * Select a featured production item
   */
  featured?: ProductionItem;

  /**
   * items — `array`
   *
   *
   */
  items?: Array<SanityKeyed<ProductionItem>>;

  /**
   * footer — `localeBlockContent`
   *
   *
   */
  footer?: LocaleBlockContent;
};

export type Documents =
  | Home
  | Infos
  | Settings
  | PageModulaire
  | Project
  | Tag
  | Artist;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type MuxVideo = any;
