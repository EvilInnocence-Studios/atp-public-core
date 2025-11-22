import { Setting } from "@common/components/Setting";
import { overridable } from "@core/lib/overridable";
import { Link } from "react-router";
import { BrandLinkProps } from "./BrandLink.d";
import styles from './BrandLink.module.scss';

export const BrandLinkComponent = overridable<BrandLinkProps>(({ showBrandLink, classes = styles }: BrandLinkProps) =>
    <Link to="/" className={classes.homepageLink}>
        {showBrandLink && <span><Setting id="siteName" /></span>}
    </Link>
);
