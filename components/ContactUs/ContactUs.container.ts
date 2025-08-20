import { createInjector, inject, mergeProps } from "unstateless";
import {ContactUsComponent} from "./ContactUs.component";
import {IContactUsInputProps, ContactUsProps, IContactUsProps} from "./ContactUs.d";
import { useSetting } from "@common/lib/setting/services";

const injectContactUsProps = createInjector(({}:IContactUsInputProps):IContactUsProps => {
    const email = useSetting("supportEmail");
    
    return {email};
});

const connect = inject<IContactUsInputProps, ContactUsProps>(mergeProps(
    injectContactUsProps,
));

export const ContactUs = connect(ContactUsComponent);
