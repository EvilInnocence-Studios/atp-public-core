import { createInjector, inject, mergeProps } from "unstateless";
import {SoftwareLicenseComponent} from "./SoftwareLicense.component";
import {ISoftwareLicenseInputProps, SoftwareLicenseProps, ISoftwareLicenseProps} from "./SoftwareLicense.d";

const injectSoftwareLicenseProps = createInjector(({}:ISoftwareLicenseInputProps):ISoftwareLicenseProps => {
    return {};
});

const connect = inject<ISoftwareLicenseInputProps, SoftwareLicenseProps>(mergeProps(
    injectSoftwareLicenseProps,
));

export const SoftwareLicense = connect(SoftwareLicenseComponent);
