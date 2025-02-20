import { createInjector, inject, mergeProps } from "unstateless";
import {TutorialsComponent} from "./Tutorials.component";
import {ITutorialsInputProps, TutorialsProps, ITutorialsProps} from "./Tutorials.d";

const injectTutorialsProps = createInjector(({}:ITutorialsInputProps):ITutorialsProps => {
    return {};
});

const connect = inject<ITutorialsInputProps, TutorialsProps>(mergeProps(
    injectTutorialsProps,
));

export const Tutorials = connect(TutorialsComponent);
