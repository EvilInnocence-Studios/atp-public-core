import { createInjector, inject, mergeProps } from "unstateless";
import {ContactUsComponent} from "./ContactUs.component";
import {IContactUsInputProps, ContactUsProps, IContactUsProps} from "./ContactUs.d";

const injectContactUsProps = createInjector(({}:IContactUsInputProps):IContactUsProps => {
    return {};
});

const connect = inject<IContactUsInputProps, ContactUsProps>(mergeProps(
    injectContactUsProps,
));

export const ContactUs = connect(ContactUsComponent);
