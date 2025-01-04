import { config } from "@config";
import { Layout } from "antd";
import { Route, Routes } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./Layout.d";
import styles from './Layout.module.scss';

export const LayoutComponent = ({}:LayoutProps) =>
    <Layout>
        <Layout.Header>
            <Header />
        </Layout.Header>
        <Layout.Content className={styles.content}>
            <Routes>
                {config().routes.map((route, index) => (
                    <Route key={index} path={route.path} Component={route.component} />
                ))}
            </Routes>
        </Layout.Content>
        <Layout.Footer>
            <Footer />
        </Layout.Footer>
    </Layout>;
