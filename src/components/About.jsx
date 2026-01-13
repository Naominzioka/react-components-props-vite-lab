import React from "react";

/**
 * About Component
 * Displays the blog logo, name, and a brief description.
 * Connected to: App.jsx (Parent)
 */

function About({image, about}) {
    const defaultImage = "https://via.placeholder.com/215"
    return (
        <aside>
            <img src={image || defaultImage} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}

export default About