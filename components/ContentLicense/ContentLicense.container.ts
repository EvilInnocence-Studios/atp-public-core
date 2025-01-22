import { createInjector, inject, mergeProps } from "unstateless";
import {ContentLicenseComponent} from "./ContentLicense.component";
import {IContentLicenseInputProps, ContentLicenseProps, IContentLicenseProps} from "./ContentLicense.d";

const injectContentLicenseProps = createInjector(({}:IContentLicenseInputProps):IContentLicenseProps => {
    return {};
});

const connect = inject<IContentLicenseInputProps, ContentLicenseProps>(mergeProps(
    injectContentLicenseProps,
));

export const ContentLicense = connect(ContentLicenseComponent);
