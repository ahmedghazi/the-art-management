import { SanityKeyed } from "sanity-codegen";
import {
  ArtistsGridUI,
  ProductionsUI,
  ProjectsFeaturedUI,
  ProjectsUI,
  VideoUI,
} from "./schema";

export interface ModulesList {
  modules: Array<
    | SanityKeyed<ProjectsFeaturedUI>
    | SanityKeyed<ArtistsGridUI>
    | SanityKeyed<VideoUI>
    | SanityKeyed<ProjectsUI>
    | SanityKeyed<ProductionsUI>
  >;
}
