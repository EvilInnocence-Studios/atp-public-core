import { IModule } from "@core/lib/module";
import { publicRoutes } from "./routes";

export const module:IModule = {
    name: "public",
    routes: publicRoutes,
};
