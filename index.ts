import { IModule } from "@core/lib/module";
import { publicRoutes } from "./routes";
import { rendererPlugins } from "@core/lib/plugins/renderer";

export const module:IModule = {
    name: "public",
    routes: publicRoutes,
};

export const sitePlugins = {
    homepage: rendererPlugins(),
};