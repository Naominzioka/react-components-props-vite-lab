import React from "react";

/**
 * Article Component
 * Renders an individual blog post entry.
 * Connected to: ArticleList.jsx (Parent)
 */

 function Article({title, date, preview}) {
    //some dates are missing so i made this default one
    const defaultDate = "January 1, 1970"
    
    return(
        <article>
            <h3>{title}</h3>
            <small>{date || defaultDate}</small>
            <p>{preview}</p>
        </article>
    )
 }

 export default Article