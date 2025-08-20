import { HomePage } from "@public/components/HomePage";
import { ContactUs } from "./components/ContactUs";

export const publicRoutes = {
    public: [
        {path: "/",                                component: HomePage                   },
        {path: "/contacts",                        component: ContactUs                  },
    ]
}
