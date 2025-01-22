import { createInjector, inject, mergeProps } from "unstateless";
import {PoliciesComponent} from "./Policies.component";
import {IPoliciesInputProps, PoliciesProps, IPoliciesProps} from "./Policies.d";

const injectPoliciesProps = createInjector(({}:IPoliciesInputProps):IPoliciesProps => {
    return {};
});

const connect = inject<IPoliciesInputProps, PoliciesProps>(mergeProps(
    injectPoliciesProps,
));

export const Policies = connect(PoliciesComponent);
