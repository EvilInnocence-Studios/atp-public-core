import { config } from "@config";
import { NotFoundPage } from "../NotFoundPage";
import { LoginModal } from "@uac/components/LoginModal";
import { Layout } from "antd";
import { Route, Routes } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./Layout.d";
import styles from './Layout.module.scss';

export const LayoutComponent = ({loginModal}:LayoutProps) =>
    <Layout>
            <LoginModal modal={loginModal} />
            <Layout.Header>
            {/* This is a hidden input field to stop the browser from autofilling the search field in the header*/}
            <div style={{width: 0, position: "absolute", right: 999999, top: 0}}>
                <input />
                <input type="password" />
            </div>
            <Header />
        </Layout.Header>
        <Layout.Content className={styles.content}>
            <Routes>
                {config().routes.map((route, index) => (
                    <Route key={index} path={route.path} Component={route.component} />
                ))}
                <Route path="*" Component={NotFoundPage} />
            </Routes>
        </Layout.Content>
        <Layout.Footer>
            <Footer />
        </Layout.Footer>
    </Layout>;
