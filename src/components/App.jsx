import React from "react";
import blogData from "../data/blog";
import ArticleList from "./ArticleList";
import Header from "./Header"
import About from "./About"

console.log(blogData);

/**
 * App Component (Main Entry Point)
 * This component acts as the "Home" for the application.
 * It imports the raw data and distributes it to child components via props.
 * * Connected to: Header, About, and ArticleList
 */

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
