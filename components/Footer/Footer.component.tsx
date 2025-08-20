import { Setting } from "@common/components/Setting";
import { SocialLinks } from "@common/components/SocialLinks";
import { Col, Row } from "antd";
import Mailchimp from 'react-mailchimp-form';
import { Link } from "react-router";
import { FooterProps } from "./Footer.d";
import styles from './Footer.module.scss';

export const FooterComponent = ({}:FooterProps) =>
    <Row gutter={16} className={styles.footer}>
        <Col xs={24} sm={6}>
            <div className={styles.socialLinksContainer}>
                <SocialLinks />
            </div>
        </Col>
        <Col xs={24} sm={9} lg={12}>
            <ul>
                <li><Link to="/products?tags=1048455126644686849&page=1">Brokered Products</Link></li>
                <li><Link to="/products?page=1&tags=1046081212363571201">Original Figures</Link></li>
                <li><Link to="/products?tags=1046081212363046913&page=1">Clothing</Link></li>
                <li><Link to="/products?page=1&tags=1046081212363603969&q=license">XD Licenses</Link></li>
                <li><Link to="/products?page=1&tags=1046081212363603969&q=morph">XD Morph Packs</Link></li>
                <li><Link to="/products?tags=1046081212363472897&page=1">Utilities</Link></li>
                <li><Link to="/products?tags=1046081212364324865&page=1">Freebies</Link></li>
                <li><Link to="/products?page=1&tags=1046081212363440129">Morphs</Link></li>
                <li><Link to="/backstage-pass">Backstage Pass</Link></li>
                <li><Link to="/crossdresser">XD Clothing Converter</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contact Us</Link></li>
                <li><Link to="/3d-content-license">3D Content Licensing</Link></li>
                <li><Link to="/software-license">Software Licensing</Link></li>
                <li><Link to="/policies">Policies</Link></li>
            </ul>
        </Col>
        <Col xs={24} sm={6} className={styles.newsletter}>
            <h2>Subscribe to our Newsletter!</h2>
            <h3>Get notified when we have new products and sales!</h3>
            <Mailchimp
                action="https://evilinnocence.us2.list-manage.com/subscribe/post?u=013c705dc4ca956f29786a8a6&id=db5c0569da&f_id=0010fce3f0"
                fields={[{
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                }]}
            />
        </Col>
        <Col xs={24}>
            <p>&copy; {new Date().getFullYear()} <Setting id="siteName" />, all rights reserved.</p>
        </Col>
    </Row>;
