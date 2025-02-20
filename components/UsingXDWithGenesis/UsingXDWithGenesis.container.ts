import { createInjector, inject, mergeProps } from "unstateless";
import {UsingXDWithGenesisComponent} from "./UsingXDWithGenesis.component";
import {IUsingXDWithGenesisInputProps, UsingXDWithGenesisProps, IUsingXDWithGenesisProps} from "./UsingXDWithGenesis.d";

const injectUsingXDWithGenesisProps = createInjector(({}:IUsingXDWithGenesisInputProps):IUsingXDWithGenesisProps => {
    return {};
});

const connect = inject<IUsingXDWithGenesisInputProps, UsingXDWithGenesisProps>(mergeProps(
    injectUsingXDWithGenesisProps,
));

export const UsingXDWithGenesis = connect(UsingXDWithGenesisComponent);
