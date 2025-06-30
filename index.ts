import { IModule } from "@core-shared/module";
import { publicRoutes } from "./routes";

export const module:IModule = {
    name: "public",
    routes: publicRoutes,
};
