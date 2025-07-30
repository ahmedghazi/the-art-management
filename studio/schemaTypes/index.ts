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
import seo from './objects/seo'
import embed from './objects/embed'
import keyVal from './objects/keyVal'
import keyValGroup from './objects/keyValGroup'
import productionItem from './objects/productionItem'
import figures from './objects/figures'
import figure from './objects/figure'
import videoMux from './objects/videoMux'
import projectFeatured from './objects/projectFeatured'
import artistsGrid from './objects/artistsGrid'
import edition from './objects/edition'

import artistsGridUI from './objects/modules/artistsGridUI'
import projectsUI from './objects/modules/projectsUI'
import videoUI from './objects/modules/videoUI'
import projectsFeaturedUI from './objects/modules/projectsFeaturedUI'
import productionsUI from './objects/modules/productionsUI'
import artistsCard from './objects/artistsCard'

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
  artistsCard,
  edition,

  artistsGridUI,
  projectsUI,
  videoUI,
  projectsFeaturedUI,
  productionsUI,
]
export default schemaTypes
