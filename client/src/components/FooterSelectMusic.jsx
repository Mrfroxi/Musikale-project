import React, {useContext} from 'react';
import '../pages/style/FooterSelectMusic.scss';
import {ThemeContext} from "../pages/style/Theme";
import {Link} from "react-router-dom";

function FooterSelectMusic() {
    const useStyle = useContext(ThemeContext);

    return (
        <div style={{backgroundColor:useStyle.subTheme}} className={"Footer_Select_Music"}>
            <Link to={"/home"}>
                Select a music to continue
            </Link>
        </div>
    );
}

export default FooterSelectMusic;