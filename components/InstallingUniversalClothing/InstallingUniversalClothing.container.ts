import { createInjector, inject, mergeProps } from "unstateless";
import {InstallingUniversalClothingComponent} from "./InstallingUniversalClothing.component";
import {IInstallingUniversalClothingInputProps, InstallingUniversalClothingProps, IInstallingUniversalClothingProps} from "./InstallingUniversalClothing.d";

const injectInstallingUniversalClothingProps = createInjector(({}:IInstallingUniversalClothingInputProps):IInstallingUniversalClothingProps => {
    return {};
});

const connect = inject<IInstallingUniversalClothingInputProps, InstallingUniversalClothingProps>(mergeProps(
    injectInstallingUniversalClothingProps,
));

export const InstallingUniversalClothing = connect(InstallingUniversalClothingComponent);
