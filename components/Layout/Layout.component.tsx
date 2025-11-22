import { Content } from "@core/components/Content";
import { LoginModal } from "@uac/components/LoginModal";
import { Layout } from "antd";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./Layout.d";
import styles from './Layout.module.scss';
import { overridable } from "@core/lib/overridable";

export const LayoutComponent = overridable(({ loginModal, classes = styles }: LayoutProps) =>
    <Layout className={classes.layout}>
        <LoginModal modal={loginModal} />
        <div className={classes.header}>
            {/* This is a hidden input field to stop the browser from autofilling the search field in the header*/}
            <div style={{ width: 0, position: "absolute", right: 999999, top: 0 }}>
                <input />
                <input type="password" />
            </div>
            <Header />
        </div>
        <Layout.Content className={classes.content}>
            <Content />
        </Layout.Content>
        <Layout.Footer className={classes.footer}>
            <Footer />
        </Layout.Footer>
    </Layout>
);
