import React from 'react';

const Location = () => {
    return(
        <div className="location_wrapper">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3081.3492751631306!2d-0.3916792487456824!3d39.438836979390075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604edea9becebd%3A0x8aaa3820dd7ea610!2sCalle+Jos%C3%A9+Soto+Mico%2C+46017+Valencia!5e0!3m2!1ses!2ses!4v1535270271175" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    )
}

export default Location