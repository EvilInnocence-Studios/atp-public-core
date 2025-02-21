import { createInjector, inject, mergeProps } from "unstateless";
import {CrossDresserComponent} from "./CrossDresser.component";
import {ICrossDresserInputProps, CrossDresserProps, ICrossDresserProps} from "./CrossDresser.d";

const injectCrossDresserProps = createInjector(({}:ICrossDresserInputProps):ICrossDresserProps => {
    return {};
});

const connect = inject<ICrossDresserInputProps, CrossDresserProps>(mergeProps(
    injectCrossDresserProps,
));

export const CrossDresser = connect(CrossDresserComponent);
