import { Content } from "@core/components/Content";
import { LoginModal } from "@uac/components/LoginModal";
import { Layout } from "antd";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { LayoutProps } from "./Layout.d";
import styles from './Layout.module.scss';

export const LayoutComponent = ({loginModal}:LayoutProps) =>
    <Layout className={styles.layout}>
        <LoginModal modal={loginModal} />
        <div className={styles.header}>
            {/* This is a hidden input field to stop the browser from autofilling the search field in the header*/}
            <div style={{width: 0, position: "absolute", right: 999999, top: 0}}>
                <input />
                <input type="password" />
            </div>
            <Header />
        </div>
        <Layout.Content className={styles.content}>
            <Content />
        </Layout.Content>
        <Layout.Footer className={styles.footer}>
            <Footer />
        </Layout.Footer>
    </Layout>;
