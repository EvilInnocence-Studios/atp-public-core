import { Link } from "react-router";
import {ContentLicenseProps} from "./ContentLicense.d";
import styles from './ContentLicense.module.scss';

export const ContentLicenseComponent = ({}:ContentLicenseProps) =>
    <div className={styles.contentLicense}>
        <h1>Content Licensing Information</h1>

        <h2>About this License</h2>
        <p>This license covers all content items purchased or downloaded from our website. Content includes items such as clothing, figures, poses, hairs, and textures. Content does not include items such as utilties or XD licenses. Those are covered by our <Link to="/software-license">Software License.</Link></p>

        <p>In simple terms, the license says that you can use our content to make images or animations, both commercial and non-commercial, but you cannot otherwise redistribute our content in any other format. We also retain all rights to our content, and are only granting you the right to use it.</p>

        <p>The following are examples of projects which are allowed under this license.</p>

        <ul>
            <li>Create and sell posters using one of our figures.</li>
            <li>Create and sell an animated movie using our figures and/or clothing.</li>
        </ul>

        <p>The following are examples of pojects which are not allowed under this license.</p>

        <ul>
            <li>Creating a game using one of our sets since a user of the game could extract the set from the game assets.</li>
            <li>Selling a texture pack created by rendering one of our textures onto a flat plane.</li>
        </ul>

        <h3>Licence for 3D Content Purchased or Downloaded from EvilInnocence.com</h3>

        <p>This license applies to Poser and DAZ Studio content items purchased through The MarketPlace at EvilInnocence. It is the Buyers responsibility to read and understand this license. License files included with purchased products will supercede this license. If you are unsure about anything, please contact us.</p>

        <p>The Artist (EvilInnocence) retains all copyrights to the enclosed materials. The Buyer is not purchasing the contents, only the right to use the contents. The Buyer may not redistribute this archive file, in whole or in part. The Buyer may not store it any place on a network or on the Internet where it may be referenced by a third party. Buyer acquires the copyright to any derivative works created using this work, provided none of the original materials can be extracted from the derivative work by any means. If Artist can show that any of the original material can be extracted from Buyer's derivative work, Artist can demand both the original and derivative work, and all copies thereof be deleted. For example, Buyer cannot make an image of a texture map mapped to a flat plane, such that the original texture map can be cut & pasted from the image. This is designed to protect the Artist from Buyers releasing work, which lets other users obtain the copyrighted material, and is not meant to infringe upon the artistic endeavors of the Buyer. Buyer may not make any MetaStream animation files with the enclosed materials, until this format can protect the original materials from being extracted. Items sold at EvilInnocence may not be used for illegal purposes.</p>

        <p>In the event a Buyer is not satisfied with the product a refund may be issued. Issuing refunds is at the discretion of the Artist. Refunds will be issued only after the Buyer has worked with the Artist to fix the problem. When a refund is issued, the Buyer is responsible for deleting all files using the product and may not distribute the product.</p>

        <p>To protect the Buyer: Buyer is hereby granted a non-exclusive, non-transferable license to use all of the contents of the encapsulating archive file. Artist maintains that all items in the archive are their original work, or are derivative works from something found, and verified, to be in the public domain. Artist maintains they legally possess the power to grant the Buyer this license for all enclosed materials. Buyer may use the materials in any personal projects or commercial projects, as long as the Artist's work is protected from extraction and none of the items above have been violated. Buyer may make a single backup copy of this archive file, for personal archival purposes only. Buyer retains this license, even if the Artist stops selling this work at a later date, or decides to charge a different price. The Artist may only revoke this license, if it is shown that a Buyer has previously violated the terms and conditions above.</p>
    </div>;
