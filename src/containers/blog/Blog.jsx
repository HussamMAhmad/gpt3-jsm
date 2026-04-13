import React from "react";
import Article from "../../components/article/Article";
import {
  rectangle1,
  rectangle2,
  rectangle3,
  rectangle4,
  rectangle5,
} from "../../components/article/import";
import "./blog.css";
function Blog() {
  return (
    <div className="gpt3__blog sectoin-padding ">
      <div className="gpt3__blog-header gradient__text">
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-content">
        <div className="gpt3__blog-content-groub-A">
          <Article
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            image={rectangle1}
          />
        </div>
        <div className="gpt3__blog-content-groub-B">
          <Article
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            image={rectangle2}
          />
          <Article
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            image={rectangle3}
          />
          <Article
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            image={rectangle4}
          />
          <Article
            text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
            image={rectangle5}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
