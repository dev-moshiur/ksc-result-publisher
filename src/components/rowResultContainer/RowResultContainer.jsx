import RowResult from "../rowResult/RowResult";
import { useData } from "../../context";
import React from "react";
import jsPDF from "jspdf";
import "./rowResultContainer.scss";
export default function RowResultContainer() {
  const { data } = useData();
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
          <div className="schoolName">{data.results[0].schoolName}</div>
          <div className="examType">
            {data.results[0].examType || "Annual Examination 2023"}
          </div>
          <div className="other">
            <div>
              <span>class :</span>
              <span>{data.results[0].className}</span>
            </div>
            <div>
              <span>Group :</span>
              <span>{data.results[0].group}</span>
            </div>
          </div>
        </div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll</th>
                {data.results &&
                  data.results[0].subjets.map((elm) => (
                    <th colSpan={4}>Subject,Grade and Mark</th>
                  ))}
                <th colSpan={2}>total</th>
              </tr>
            </thead>
            <tbody>
              {data.results &&
                data.results.map((elm) => <RowResult data={elm} />)}
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={genaratePDF}>Download as PDF</button>
    </>
  );
}
