import { createInjector, inject, mergeProps } from "unstateless";
import {InstallingCrossDresserComponent} from "./InstallingCrossDresser.component";
import {IInstallingCrossDresserInputProps, InstallingCrossDresserProps, IInstallingCrossDresserProps} from "./InstallingCrossDresser.d";

const injectInstallingCrossDresserProps = createInjector(({}:IInstallingCrossDresserInputProps):IInstallingCrossDresserProps => {
    return {};
});

const connect = inject<IInstallingCrossDresserInputProps, InstallingCrossDresserProps>(mergeProps(
    injectInstallingCrossDresserProps,
));

export const InstallingCrossDresser = connect(InstallingCrossDresserComponent);
