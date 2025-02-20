import { createInjector, inject, mergeProps } from "unstateless";
import {Poser5FurComponent} from "./Poser5Fur.component";
import {IPoser5FurInputProps, Poser5FurProps, IPoser5FurProps} from "./Poser5Fur.d";

const injectPoser5FurProps = createInjector(({}:IPoser5FurInputProps):IPoser5FurProps => {
    return {};
});

const connect = inject<IPoser5FurInputProps, Poser5FurProps>(mergeProps(
    injectPoser5FurProps,
));

export const Poser5Fur = connect(Poser5FurComponent);
