import { createInjector, inject, mergeProps } from "unstateless";
import {UniversalClothingComponent} from "./UniversalClothing.component";
import {IUniversalClothingInputProps, UniversalClothingProps, IUniversalClothingProps} from "./UniversalClothing.d";

const injectUniversalClothingProps = createInjector(({}:IUniversalClothingInputProps):IUniversalClothingProps => {
    return {};
});

const connect = inject<IUniversalClothingInputProps, UniversalClothingProps>(mergeProps(
    injectUniversalClothingProps,
));

export const UniversalClothing = connect(UniversalClothingComponent);
