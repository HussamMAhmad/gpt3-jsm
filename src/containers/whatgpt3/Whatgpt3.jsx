import React from "react";
import "./whatgpt3.css";
import { Feature } from "../../components";
function Whatgpt3() {
  const des = [
    {
      title: "Chatbots",
      text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought.",
    },
    {
      title: "Knowledgebase",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments",
    },
    {
      title: "Education",
      text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments",
    },
  ];
  return (
    <div className="gpt3__wgpt3-content">
      <div className="gpt3__wgpt3-header">
        <Feature
          title={"What is GPT-3"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </div>
      <div className="gpt3__wgpt3-middle">
        <h2 className="gpt3__wgpt3-middle-title gradient__text">
          The possibilities are beyond your imagination
        </h2>
        <p className="gpt3__wgpt3-middle-paragraph">Explore The Library</p>
      </div>
      <div className="gpt3__wgpt3-footer">
        {des.map((el, index) => {
          return <Feature title={el.title} text={el.text} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Whatgpt3;
