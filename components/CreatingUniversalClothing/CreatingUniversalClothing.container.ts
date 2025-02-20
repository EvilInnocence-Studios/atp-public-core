import { createInjector, inject, mergeProps } from "unstateless";
import {CreatingUniversalClothingComponent} from "./CreatingUniversalClothing.component";
import {ICreatingUniversalClothingInputProps, CreatingUniversalClothingProps, ICreatingUniversalClothingProps} from "./CreatingUniversalClothing.d";

const injectCreatingUniversalClothingProps = createInjector(({}:ICreatingUniversalClothingInputProps):ICreatingUniversalClothingProps => {
    return {};
});

const connect = inject<ICreatingUniversalClothingInputProps, CreatingUniversalClothingProps>(mergeProps(
    injectCreatingUniversalClothingProps,
));

export const CreatingUniversalClothing = connect(CreatingUniversalClothingComponent);
