import home from './singletons/home'
import pageModulaire from './documents/pageModulaire'
import infos from './singletons/infos'
import project from './documents/project'
import tag from './documents/tag'
// import production from './documents/production'
import artist from './documents/artist'

import settings from './singletons/settings'

import localeString from './locale/localeString'
import localeBlockContent from './locale/localeBlockContent'

import blockContent from './objects/blockContent'
import linkExternal from './objects/linkExternal'
import linkInternal from './objects/linkInternal'
// import linkModal from './objects/linkModal'
// import tagGroup from './objects/tagGroup'
import seo from './objects/seo'
import embed from './objects/embed'
import keyVal from './objects/keyVal'
import keyValGroup from './objects/keyValGroup'
// import video from './objects/video'
// import interTitre from './objects/interTitre'
import productionItem from './objects/productionItem'
import figures from './objects/figures'
import figure from './objects/figure'
import videoMux from './objects/videoMux'
import projectFeatured from './objects/projectFeatured'

import artistsGrid from './objects/artistsGrid'

// import imagesUI from './objects/modules/imagesUI'
import artistsGridUI from './objects/modules/artistsGridUI'
import editionsUI from './objects/modules/editionsUI'
import imageUI from './objects/modules/imageUI'
import projectsUI from './objects/modules/projectsUI'
import textUI from './objects/modules/textUI'
import videoUI from './objects/modules/videoUI'
import projectsFeaturedUI from './objects/modules/projectsFeaturedUI'
import productionsUI from './objects/modules/productionsUI'

export const schemaTypes = [
  home,

  infos,
  settings,
  pageModulaire,
  project,
  // production,
  tag,
  artist,

  localeString,
  localeBlockContent,

  blockContent,
  linkExternal,
  linkInternal,
  seo,
  embed,
  keyVal,
  keyValGroup,
  figure,
  figures,
  productionItem,
  videoMux,
  projectFeatured,
  artistsGrid,

  // imagesUI,
  artistsGridUI,
  editionsUI,
  imageUI,
  projectsUI,
  textUI,
  videoUI,
  projectsFeaturedUI,
  productionsUI,
]
export default schemaTypes
