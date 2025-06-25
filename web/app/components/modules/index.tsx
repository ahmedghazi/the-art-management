"use client";
import React from "react";
import ModuleVideoUI from "./ModuleVideoUI";
import ModuleProjectsUI from "./ModuleProjectsUI";
import ModuleProjectsFeaturedUI from "./ModuleProjectsFeaturedUI";
import ModuleArtistsGridUI from "./ModuleArtistsGridUI";
import ModuleProductionsUI from "./ModuleProductionsUI";
import { ModulesList } from "@/app/types/extra-types";
import "./index.scss";

const Modules = ({ modules }: ModulesList) => {
  const _renderModules = () => {
    return modules.map((module: any, i: number) => {
      switch (module._type) {
        case "projectsUI":
          return <ModuleProjectsUI key={module._key} input={module} />;
        case "projectsFeaturedUI":
          return <ModuleProjectsFeaturedUI key={module._key} input={module} />;
        case "artistsGridUI":
          return <ModuleArtistsGridUI key={module._key} input={module} />;

        case "videoUI":
          return <ModuleVideoUI key={module._key} input={module} />;

        case "productionsUI":
          return <ModuleProductionsUI key={module._key} input={module} />;
        default:
          return null;
      }
    });
  };

  return <div className='modules'>{_renderModules()}</div>;
};

export default Modules;
