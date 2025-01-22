import { createInjector, inject, mergeProps } from "unstateless";
import {FaqComponent} from "./Faq.component";
import {IFaqInputProps, FaqProps, IFaqProps} from "./Faq.d";

const injectFaqProps = createInjector(({}:IFaqInputProps):IFaqProps => {
    return {};
});

const connect = inject<IFaqInputProps, FaqProps>(mergeProps(
    injectFaqProps,
));

export const Faq = connect(FaqComponent);
