import { HomePage } from "@public/components/HomePage";
import { Faq } from "./components/Faq";
import { AboutUs } from "./components/AboutUs";
import { ContentLicense } from "./components/ContentLicense";
import { SoftwareLicense } from "./components/SoftwareLicense";
import { Policies } from "./components/Policies";
import { ContactUs } from "./components/ContactUs";
import { Tutorials } from "./components/Tutorials";
import { InstallingUniversalClothing } from "./components/InstallingUniversalClothing";
import { CreatingUniversalClothing } from "./components/CreatingUniversalClothing";
import { InstallingCrossDresser } from "./components/InstallingCrossDresser";
import { InstallingCrossDresserVideo } from "./components/InstallingCrossDresserVideo";
import { ConvertingWithXD } from "./components/ConvertingWithXD";
import { ConvertingWithXDVideo } from "./components/ConvertingWithXDVideo";
import { UsingXDWithGenesis } from "./components/UsingXDWithGenesis";
import { FixingPokethrough } from "./components/FixingPokethrough";
import { XDSkirtTutorial } from "./components/XDSkirtTutorial";
import { XDLocationTutorial } from "./components/XDLocationTutorial";
import { XDLicenseTutorial } from "./components/XDLicenseTutorial";
import { XDPoseFix } from "./components/XDPoseFix";
import { XDRuntimeTutorial } from "./components/XDRuntimeTutorial";
import { UsingTnT } from "./components/UsingTnT";
import { UsingFairyMagic } from "./components/UsingFairyMagic";
import { DazStudioFurShaders } from "./components/DazStudioFurShaders";
import { Poser5Fur } from "./components/Poser5Fur";
import { CrossDresser } from "./components/CrossDresser";
import { UniversalClothing } from "./components/UniversalClothing";
import { XDConverter } from "./components/XDConverter";
import { XDMorpher } from "./components/XDMorpher";
import { BackstagePass } from "./components/BackstagePass";

export const publicRoutes = {
    public: [
        {path: "/",                                component: HomePage                   },
        {path: "/faq",                             component: Faq                        },
        {path: "/about",                           component: AboutUs                    },
        {path: "/3d-content-license",              component: ContentLicense             },
        {path: "/software-license",                component: SoftwareLicense            },
        {path: "/policies",                        component: Policies                   },
        {path: "/contacts",                        component: ContactUs                  },
        {path: "/tutorials",                       component: Tutorials                  },
        {path: "/installing-universal-clothing",   component: InstallingUniversalClothing},
        {path: "/creating-universal-clothing",     component: CreatingUniversalClothing  },
        {path: "/xd-setup-tutorial",               component: InstallingCrossDresser     },
        {path: "/install-crossdresser-video",      component: InstallingCrossDresserVideo},
        {path: "/xd-conversion-tutorial",          component: ConvertingWithXD           },
        {path: "/using-crossdresser-video",        component: ConvertingWithXDVideo      },
        {path: "/using-crossdresser-with-genesis", component: UsingXDWithGenesis         },
        {path: "/xd-pose-tutorial",                component: FixingPokethrough          },
        {path: "/xd-skirt-tutorial",               component: XDSkirtTutorial            },
        {path: "/xd-location-tutorial",            component: XDLocationTutorial         },
        {path: "/xd-license-tutorial",             component: XDLicenseTutorial          },
        {path: "/xd-pose-fix-tutorial",            component: XDPoseFix                  },
        {path: "/xd-runtime-tutorial",             component: XDRuntimeTutorial          },
        {path: "/using-tnt",                       component: UsingTnT                   },
        {path: "/using-fairy-magic",               component: UsingFairyMagic            },
        {path: "/daz-studio-fur-shaders",          component: DazStudioFurShaders        },
        {path: "/rendering-fur-in-poser-5",        component: Poser5Fur                  },
        {path: "/crossdresser",                    component: CrossDresser               },
        {path: "/universal-clothing",              component: UniversalClothing          },
        {path: "/crossdresser-converter",          component: XDConverter                },
        {path: "/xd-morpher",                      component: XDMorpher                  },
        {path: "/backstage-pass",                  component: BackstagePass              },
    ]
}
