import { Copyright } from "@common/components/Copyright";
import { LinkList } from "@common/components/LinkList";
import { MailchimpForm } from "@common/components/MailchimpForm";
import { SocialLinks } from "@common/components/SocialLinks";
import { Col, Row } from "antd";
import { FooterProps } from "./Footer.d";
import styles from './Footer.module.scss';
import { overridable } from "@core/lib/overridable";

export const FooterComponent = overridable(({}:FooterProps) =>
    <Row gutter={16} className={styles.footer}>
        <Col xs={24} sm={6}>
            <div className={styles.socialLinksContainer}>
                <SocialLinks />
            </div>
        </Col>
        <Col xs={24} sm={9} lg={12}>
            <LinkList id="footer" />
        </Col>
        <Col xs={24} sm={6} className={styles.newsletter}>
            <MailchimpForm />
        </Col>
        <Col xs={24}>
            <p><Copyright /></p>
        </Col>
    </Row>
);
