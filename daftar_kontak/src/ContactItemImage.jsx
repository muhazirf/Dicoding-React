import React from "react";

function ContactItemImage({ imageUrl }) {
    return (

        < div className="contanct-item_image" >
            <img src="{imageUrl}" alt="contact avatar" />
        </div >
    )
}

export default ContactItemImage;