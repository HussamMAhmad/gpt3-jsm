import React from "react";
import "./article.css";

function Article({ image, text }) {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-image">
        <img src={image} alt="image-article" />
      </div>
      <div className="gpt3__article-des">
        <div className="gpt3__article-des-content">
          <p>Sep 28 , 2024</p>
          <h1>{text}</h1>
        </div>
        <div className="gpt3__article-read">Read Full Article</div>
      </div>
    </div>
  );
}

export default Article;
