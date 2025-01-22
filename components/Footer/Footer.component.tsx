import { Col, Row } from "antd";
import {FooterProps} from "./Footer.d";
import styles from './Footer.module.scss';
import { Link } from "react-router";

export const FooterComponent = ({}:FooterProps) =>
    <Row gutter={16} className={styles.footer}>
        <Col xs={24} sm={12} md={6}>
            <h3>Store Links</h3>
            <ul>
                <li><Link to="/products">Brokered Products</Link></li>
                <li><Link to="/products">Original Figures</Link></li>
                <li><Link to="/products">Clothing</Link></li>
                <li><Link to="/products">XD Licenses</Link></li>
                <li><Link to="/products">XD Morph Packs</Link></li>
                <li><Link to="/products">Utilities</Link></li>
            </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
            <h3>Free Stuff</h3>
            <ul>
                <li><Link to="/products">Freebies</Link></li>
                <li><Link to="/products">XD Licenses</Link></li>
                <li><Link to="/freebies">Morphs</Link></li>
                <li><Link to="/freebies">Original Figures</Link></li>
            </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
            <h3>Other Sections</h3>
            <ul>
                <li><Link to="/backstage-pass">Backstage Pass</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/tutorials">Tutorials</Link></li>
                <li><Link to="/news">News</Link></li>
            </ul>
        </Col>
        <Col xs={24} sm={12} md={6}>
            <h3>About Us</h3>
            <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contacts">Contact Us</Link></li>
                <li><Link to="/3d-content-license">3D Content Licensing</Link></li>
                <li><Link to="/software-license">Software Licensing</Link></li>
                <li><Link to="/policies">Policies</Link></li>
            </ul>
        </Col>
    </Row>;
