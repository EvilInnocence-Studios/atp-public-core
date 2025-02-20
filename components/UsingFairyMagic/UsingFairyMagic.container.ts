import { createInjector, inject, mergeProps } from "unstateless";
import {UsingFairyMagicComponent} from "./UsingFairyMagic.component";
import {IUsingFairyMagicInputProps, UsingFairyMagicProps, IUsingFairyMagicProps} from "./UsingFairyMagic.d";

const injectUsingFairyMagicProps = createInjector(({}:IUsingFairyMagicInputProps):IUsingFairyMagicProps => {
    return {};
});

const connect = inject<IUsingFairyMagicInputProps, UsingFairyMagicProps>(mergeProps(
    injectUsingFairyMagicProps,
));

export const UsingFairyMagic = connect(UsingFairyMagicComponent);
