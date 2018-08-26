import React from 'react';
import Fade from 'react-reveal/Fade';
const Footer = () => {
    return(
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                 GrupoA3Arquitectos
                </div>
                <div className="footer_copyright">
                    GrupoA3Arqutiectos. All rights reserved.
                </div>
            </Fade>
        </footer>
    )
}
export default Footer