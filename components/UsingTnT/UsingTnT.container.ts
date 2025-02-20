import { createInjector, inject, mergeProps } from "unstateless";
import {UsingTnTComponent} from "./UsingTnT.component";
import {IUsingTnTInputProps, UsingTnTProps, IUsingTnTProps} from "./UsingTnT.d";

const injectUsingTnTProps = createInjector(({}:IUsingTnTInputProps):IUsingTnTProps => {
    return {};
});

const connect = inject<IUsingTnTInputProps, UsingTnTProps>(mergeProps(
    injectUsingTnTProps,
));

export const UsingTnT = connect(UsingTnTComponent);
