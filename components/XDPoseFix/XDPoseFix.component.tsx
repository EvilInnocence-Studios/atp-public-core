import { XDPoseFixProps } from "./XDPoseFix.d";
import styles from './XDPoseFix.module.scss';
import badFalloffImg from './bad_falloff.jpg';
import jointEditorMenuImg from './joint_editor_menu.jpg';
import jointEditorImg from './joint_editor.jpg';
import goodFalloffImg from './good_falloff.jpg';
import regroupInitialImg from './regroup_initial.jpg';
import regroupPaletteImg from './regroup_palette.jpg';
import regroupPanelImg from './regroup_panel.jpg';
import regroupBadImg from './regroup_bad.jpg';
import regroupGoodImg from './regroup_good.jpg';
import regroupFinalImg from './regroup_final.jpg';

export const XDPoseFixComponent = ({}: XDPoseFixProps) => (
    <div className={styles.cmsPage}>
        <h1>Why is my converted clothing breaking when I pose it?</h1>
        <div className="cms-page-content">
            <p>There are two main reasons that converted clothing items break when you try to pose them:</p>
            <ul>
                <li><a href="#falloff">The spherical falloff zones are not optimal for the clothing.</a></li>
                <li><a href="#regroup">The clothing groups are incorrect.</a></li>
            </ul>
            <h2>Falloff Zones:</h2>
            <a id="falloff"></a>
            <p>Sometimes, when you convert a clothing with XD, it will conform to the target figure nicely, until you try to pose the figure. Then, you may get some areas of the clothing which "break" such as in the picture below. This occurs most often on the forearms of clothing.</p>
            <img src={badFalloffImg} alt="Bad Falloff Example" />
            <p>This kind of issue means that the falloff zones for the joints are not quite right for that particular clothing. It's very tricky to make general cr2 files that will work for the majority of clothing, so there will always be some clothing that will need falloff zone fixes. Fixing this usually doesn't require more than a slight tweaking of the falloff zones.</p>
            <p>You can edit the falloff zones for a joint by opening the <strong>Joint Editor</strong> window, which is under the Windows menu in Poser.</p>
            <img src={jointEditorMenuImg} alt="Joint Editor Menu" />
            <p>Once you have the joint editor open, you should select the bone which caused the problem when you posed it. For example, in the picture above, bending the left shoulder caused the issue. Then, you should select the problem rotation direction in the white dropdown box ("Bend" in this particular instance). In the main Poser window, you should see two oval shapes appear. These are the inner (green) and outer (red) influence spheres for that joint and rotation direction.</p>
            <img src={jointEditorImg} alt="Joint Editor" />
            <p>Select the green sphere (it can be tricky to select sometimes), and the parameter window should now show the parameters for the innerMatSphere. Now, you can fix the joint problems. For this dress, increasing the z-scale for the innerMatSphere from 1 to 2 fixes the problem (as seen below). Slight scaling fixes like this are usually enough to fix such posing issues. If no amount of tweaking works, then another option is to turn off the falloff zones completely by unchecking the "Use spherical falloff zones" checkbox in the Joint Editor.</p>
            <img src={goodFalloffImg} alt="Good Falloff Example" />
            <h2>Regrouping</h2>
            <a id="regroup"></a>
            <p>If a converted clothing breaks like it's been cut with a scissors when you try to pose it, then the likely cause of this is that the clothing was regrouped badly by XD. XD tries to make the groupings as accurate as possible, but this can fail for some clothings and/or figures. Apollo is particularily vulnerable to this problem in the armpit area, since his arms are so close to his body.</p>
            <img src={regroupInitialImg} alt="Initial Regrouping Example" />
            <p>To fix this, first go to the Setup room in Poser and click on the Grouping tool in the Editing Tools palette.</p>
            <img src={regroupPaletteImg} alt="Regrouping Palette" />
            <p>This will bring up the Group Editor panel, as shown below. You can use the arrow buttons near the top to show how the clothing is grouped.</p>
            <img src={regroupPanelImg} alt="Regrouping Panel" />
            <p>The key to a properly grouped clothing is that groups should <em>only</em> touch other groups if their bones are directly connected. Thus, for Apollo, the chest should touch the collar bones, but not the shoulders, or upper arms. As you can see in the image below, when the M2 default shirt is converted to Apollo, all of these groups are touching under the armpit due to the bad grouping.</p>
            <img src={regroupBadImg} alt="Bad Regrouping Example" />
            <p>To fix this, first use the Grouping Editor arrow keys to scroll to the Right Collar group, so that it is highlighted as shown above. Then select polygons (by clicking on them individually, or by clicking and dragging around groups of them) so that the Right Collar group continues under the armpit and connects to itself in the back, as shown below. This ensures that the chest group is separated from the shoulder and upper arm groups.</p>
            <img src={regroupGoodImg} alt="Good Regrouping Example" />
            <p>Next, use the Grouping Editor arrow keys to scroll to the Right Shoulder group, and select polygons again so that the shoulder group continues under the armpit and separates the collar group from the upper arm group. Then, repeat the above steps for the left side.</p>
            <img src={regroupFinalImg} alt="Final Regrouping Example" />
            <p>As you can see, the clothing no longer rips, but it may need some additional joint parameter tweaking to pose perfectly.</p>
        </div>
    </div>
);
