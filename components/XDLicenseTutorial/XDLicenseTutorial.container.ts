import { createInjector, inject, mergeProps } from "unstateless";
import {XDLicenseTutorialComponent} from "./XDLicenseTutorial.component";
import {IXDLicenseTutorialInputProps, XDLicenseTutorialProps, IXDLicenseTutorialProps} from "./XDLicenseTutorial.d";

const injectXDLicenseTutorialProps = createInjector(({}:IXDLicenseTutorialInputProps):IXDLicenseTutorialProps => {
    return {};
});

const connect = inject<IXDLicenseTutorialInputProps, XDLicenseTutorialProps>(mergeProps(
    injectXDLicenseTutorialProps,
));

export const XDLicenseTutorial = connect(XDLicenseTutorialComponent);
