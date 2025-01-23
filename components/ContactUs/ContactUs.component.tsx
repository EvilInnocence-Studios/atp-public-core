import {ContactUsProps} from "./ContactUs.d";
import styles from './ContactUs.module.scss';

export const ContactUsComponent = ({}:ContactUsProps) =>
    <div className={styles.contactUs}>
        <h1>Contact Us</h1>

        <p>For questions, concerns, or order problems, please contact us at <a href="mailto:support@evilinnocence.com">support@evilinnocence.com</a>.</p>
    </div>;
