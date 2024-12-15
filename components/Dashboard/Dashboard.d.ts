export declare interface IDashboardProps {

}

// What gets passed into the component from the parent as attributes
export declare interface IDashboardInputProps {

}

export type DashboardProps = IDashboardInputProps & IDashboardProps;

export interface IRouteConfig {
    path: string;
    component: React.ComponentType<any>;
}

export interface DashboardProps {
    routes: RouteConfig[];
}