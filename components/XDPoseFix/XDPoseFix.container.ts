import { createInjector, inject, mergeProps } from "unstateless";
import {XDPoseFixComponent} from "./XDPoseFix.component";
import {IXDPoseFixInputProps, XDPoseFixProps, IXDPoseFixProps} from "./XDPoseFix.d";

const injectXDPoseFixProps = createInjector(({}:IXDPoseFixInputProps):IXDPoseFixProps => {
    return {};
});

const connect = inject<IXDPoseFixInputProps, XDPoseFixProps>(mergeProps(
    injectXDPoseFixProps,
));

export const XDPoseFix = connect(XDPoseFixComponent);
