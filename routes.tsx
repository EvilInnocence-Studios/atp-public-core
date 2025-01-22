import { HomePage } from "@public/components/HomePage";
import { Faq } from "./components/Faq";
import { AboutUs } from "./components/AboutUs";
import { ContentLicense } from "./components/ContentLicense";
import { SoftwareLicense } from "./components/SoftwareLicense";
import { Policies } from "./components/Policies";
import { ContactUs } from "./components/ContactUs";

export const publicRoutes = {
    public: [
        {path: "/",                   component: HomePage       },
        {path: "/faq",                component: Faq            },
        {path: "/about",              component: AboutUs        },
        {path: "/3d-content-license", component: ContentLicense },
        {path: "/software-license",   component: SoftwareLicense},
        {path: "/policies",           component: Policies       },
        {path: "/contacts",           component: ContactUs      },
    ]
}