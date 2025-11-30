import { Content } from "@core/components/Content";
import { Layout as LayoutRenderer } from "@core/components/Layout";
import { SlotRenderer } from "@core/components/SlotRenderer";
import { ComponentRegistry } from "@core/lib/layout/componentRegistry";
import { ILayoutComponent } from "@core/lib/layout/layout";
import { DarkwyndLayoutConfig } from "@darkwynd/layout";
import { Layout } from "antd";
import { Index } from "ts-functional/dist/types";
import styles from './StandardLayout.module.scss';

export const StandardLayout = ({ slots }: { slots: Index<ILayoutComponent[]> }) =>
    <Layout>
        <SlotRenderer slots={slots.header} />
        <Layout.Content className={styles.content}>
            <SlotRenderer slots={slots.content} />
        </Layout.Content>
        <Layout.Footer style={{ position: "relative" }}>
            <SlotRenderer slots={slots.footer} />
        </Layout.Footer>
    </Layout>;

export const SiteLayout = () => <LayoutRenderer theme={DarkwyndLayoutConfig} />;

ComponentRegistry.register("StandardLayout", StandardLayout, { category: "Layouts", displayName: "Standard Layout" });
ComponentRegistry.register("Content", Content, { category: "Layouts", displayName: "Content" });
