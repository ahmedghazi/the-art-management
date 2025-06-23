import { SanityKeyed } from "sanity-codegen";
import {
  ArtistsGridUI,
  EditionsUI,
  ImageUI,
  ProductionsUI,
  ProjectsFeaturedUI,
  ProjectsUI,
  TextUI,
  VideoUI,
} from "./schema";

export interface ModulesList {
  modules: Array<
    | SanityKeyed<ProjectsFeaturedUI>
    | SanityKeyed<ArtistsGridUI>
    | SanityKeyed<EditionsUI>
    | SanityKeyed<VideoUI>
    | SanityKeyed<ImageUI>
    | SanityKeyed<TextUI>
    | SanityKeyed<ProjectsUI>
    | SanityKeyed<ProductionsUI>
  >;
}
