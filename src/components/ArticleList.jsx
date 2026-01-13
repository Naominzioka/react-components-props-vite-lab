import React from "react";
import Article from "./Article"

/**
 * ArticleList Component
 * This component is a container for all blog posts.
 * It takes an array of post objects and transforms them into Article components.
 * * Connected to: 
 * - Parent: App.jsx (provides the 'posts' array)
 * - Child: Article.jsx (rendered for each item in the array)
 */

function ArticleList({ posts }) {
  return (
    <main>
      {/* We use .map() to loop through the 'posts' array.
        For every 'post' object, we return one <Article /> component.
        The 'key' prop is a unique identifier based on its 'id' for react to efficiently track and update the list.
      */}
      {posts.map(
        (post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        )
      )}
    </main>
  )
}

export default ArticleList