import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import "./faq.scss";
export default function Faq() {
  const [activeQNAIndex, setActiveQNAIndex] = useState(0);
  const qna = [
    {
      question: `How can I search for individual result?`,
      answer: `To search for your individual result, go to the search page and enter your roll number or other identifying information. Click the "Search" button to view your result.`,
    },
    {
      question: `Can I download a PDF copy of my marksheet?`,
      answer: `Yes, you can download a PDF copy of your marksheet. After viewing your result, click the "Download as PDF" button to save a PDF version of your marksheet. `,
    },
    {
      question: `How can I access the class result sheet?`,
      answer: `To access the class result sheet, select class result form and select the desired class and academic year. You can filter the data based on different criteria such as subjects or date range. Click the "Search" button to view and download the class result sheet.
      `,
    },
    {
      question: `How do I contact the website administrator?
      `,
      answer: `You can contact the website administrator by visiting the contact page and filling out the contact form. Enter your name, email address, and message, and then click the "Send" button to submit your message. `,
    },
    {
      question: `What technologies were used to build this website?`,
      answer: `This website was built using the MERN stack, which includes ReactJS for the frontend, ReduxJS for state management, Sass for styling, Node.js for the backend, Express.js as the web framework, and MongoDB with Mongoose for data storage and retrieval. `,
    },
    {
      question: `How does the student result search feature work?`,
      answer: ` The student result search feature allows you to easily find your individual result. Simply navigate to the home page and enter your roll number or other identifying information. Our advanced search algorithm quickly retrieves your result from the database and displays it on the screen. `,
    },
    {
      question: `How is the class result sheet generated and filtered?`,
      answer: ` The class result sheet provides an overview of the entire class's performance. You can filter the data based on various criteria, total mark or GPA range, to view specific information. Our system retrieves and aggregates the relevant data from the database and generates a comprehensive result sheet that can be downloaded in PDF format.`,
    },
    {
      question: `What features are available for administrators?`,
      answer: `Administrators access is open for all for testing to publish results and manage the website. They can fill out forms with students' personal information and subject-wise marks. Admins can also set the maximum marks for each subject and define the subject type. Additionally, they can add subjects according to students' subject selections, ensuring accurate and personalized result publication. `,
    },
    {
      question: `How are the results calculated based on the Bangladesh GPA grade standard?`,
      answer: `The results on this website are calculated using the Bangladesh GPA grade standard, which is widely recognized in the country's education system. Each subject is assigned a maximum mark, and students' marks are converted into grade points based on the Bangladesh GPA scale. `,
    },
    {
      question: `Can the website be customized to meet specific requirements?
      `,
      answer: `Yes, the website can be customized and tailored to meet specific requirements. As a skilled MERN stack developer, I have designed the website with flexibility in mind. Whether it's adding new features, modifying existing functionalities, or integrating with external systems, I can adapt and customize the website to suit your specific needs.
      `,
    },
    
  ];
  return (
    <div className="faq fade">
      <div className="heading">Frequently Asked Questions</div>
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
