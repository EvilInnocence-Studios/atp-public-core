import { createInjector, inject, mergeProps } from "unstateless";
import {ConvertingWithXDVideoComponent} from "./ConvertingWithXDVideo.component";
import {IConvertingWithXDVideoInputProps, ConvertingWithXDVideoProps, IConvertingWithXDVideoProps} from "./ConvertingWithXDVideo.d";

const injectConvertingWithXDVideoProps = createInjector(({}:IConvertingWithXDVideoInputProps):IConvertingWithXDVideoProps => {
    return {};
});

const connect = inject<IConvertingWithXDVideoInputProps, ConvertingWithXDVideoProps>(mergeProps(
    injectConvertingWithXDVideoProps,
));

export const ConvertingWithXDVideo = connect(ConvertingWithXDVideoComponent);
