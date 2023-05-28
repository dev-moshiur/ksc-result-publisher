import RowResult from "../rowResult/RowResult";

import React from "react";
import jsPDF from "jspdf";
import "./rowResultContainer.scss";
export default function RowResultContainer({ results }) {
  const genaratePDF = () => {
    let doc = new jsPDF("p", "pt", "a2");
    doc.html(document.getElementById("pdfDown"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };

  return (
    <>
      <div id="pdfDown" className="rowResultContainer">
        <div className="header">
          <div className="schoolName">{results[0].schoolName}</div>
          <div className="examType">
            {results[0].examtype || "Annual Examination 2023"}
          </div>
          <div className="other">
            <div>
              <span>class :</span>
              <span>{results[0].className}</span>
            </div>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                {results &&
                  results[0].subjets.map((elm) => (
                    <th colSpan={4}>Subject,Grade and Mark</th>
                  ))}
                <th colSpan={2}>total</th>
              </tr>
            </thead>
            <tbody>
              {results && results.map((elm) => <RowResult data={elm} />)}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={genaratePDF}>Download as PDF</button>
    </>
  );
}
