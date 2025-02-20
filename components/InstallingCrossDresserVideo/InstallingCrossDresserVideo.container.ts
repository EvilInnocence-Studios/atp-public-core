import { createInjector, inject, mergeProps } from "unstateless";
import {InstallingCrossDresserVideoComponent} from "./InstallingCrossDresserVideo.component";
import {IInstallingCrossDresserVideoInputProps, InstallingCrossDresserVideoProps, IInstallingCrossDresserVideoProps} from "./InstallingCrossDresserVideo.d";

const injectInstallingCrossDresserVideoProps = createInjector(({}:IInstallingCrossDresserVideoInputProps):IInstallingCrossDresserVideoProps => {
    return {};
});

const connect = inject<IInstallingCrossDresserVideoInputProps, InstallingCrossDresserVideoProps>(mergeProps(
    injectInstallingCrossDresserVideoProps,
));

export const InstallingCrossDresserVideo = connect(InstallingCrossDresserVideoComponent);
