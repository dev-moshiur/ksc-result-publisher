import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import "./faq.scss";
export default function Faq() {
  const [activeQNAIndex, setActiveQNAIndex] = useState(0);
  const qna = [
    {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?`,
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam corporis aspernatur aut at ullam cupiditate tenetur animi laudantium! Quae, nemo amet autem quibusdam saepe hic nam doloremque vero delectus.
           `,
    },
    {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?`,
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam corporis aspernatur aut at ullam cupiditate tenetur animi laudantium! Quae, nemo amet autem quibusdam saepe hic nam doloremque vero delectus.
           `,
    },
    {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?`,
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam corporis aspernatur aut at ullam cupiditate tenetur animi laudantium! Quae, nemo amet autem quibusdam saepe hic nam doloremque vero delectus.
           `,
    },
    {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?`,
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam corporis aspernatur aut at ullam cupiditate tenetur animi laudantium! Quae, nemo amet autem quibusdam saepe hic nam doloremque vero delectus.
           `,
    },
    {
      question: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia?`,
      answer: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam corporis aspernatur aut at ullam cupiditate tenetur animi laudantium! Quae, nemo amet autem quibusdam saepe hic nam doloremque vero delectus.
           `,
    },
  ];
  return (
    <div className="faq fade">
      <div className="heading">FAQ's</div>
      <div className="container">
        {qna.map((elm, index) => (
          <div className={activeQNAIndex == index ? "item active" : "item"}>
            <div className="question">
              <span>{elm.question}</span>
              <span
                onClick={() => {
                  if (activeQNAIndex == index) {
                    setActiveQNAIndex(-1);
                  } else {
                    setActiveQNAIndex(index);
                  }
                }}
              >
                {activeQNAIndex == index ? <Remove /> : <Add />}
              </span>
            </div>
            <div className="answer">
              <div className="wrapper">{elm.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
