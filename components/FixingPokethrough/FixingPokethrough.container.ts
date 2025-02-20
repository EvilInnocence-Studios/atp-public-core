import { createInjector, inject, mergeProps } from "unstateless";
import {FixingPokethroughComponent} from "./FixingPokethrough.component";
import {IFixingPokethroughInputProps, FixingPokethroughProps, IFixingPokethroughProps} from "./FixingPokethrough.d";

const injectFixingPokethroughProps = createInjector(({}:IFixingPokethroughInputProps):IFixingPokethroughProps => {
    return {};
});

const connect = inject<IFixingPokethroughInputProps, FixingPokethroughProps>(mergeProps(
    injectFixingPokethroughProps,
));

export const FixingPokethrough = connect(FixingPokethroughComponent);
