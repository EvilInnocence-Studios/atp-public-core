import { createInjector, inject, mergeProps } from "unstateless";
import {DazStudioFurShadersComponent} from "./DazStudioFurShaders.component";
import {IDazStudioFurShadersInputProps, DazStudioFurShadersProps, IDazStudioFurShadersProps} from "./DazStudioFurShaders.d";

const injectDazStudioFurShadersProps = createInjector(({}:IDazStudioFurShadersInputProps):IDazStudioFurShadersProps => {
    return {};
});

const connect = inject<IDazStudioFurShadersInputProps, DazStudioFurShadersProps>(mergeProps(
    injectDazStudioFurShadersProps,
));

export const DazStudioFurShaders = connect(DazStudioFurShadersComponent);
