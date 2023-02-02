import "./marksheet.scss";

import { useData } from "../../context";

import React from "react";
import jsPDF from "jspdf";
import Loading from "../loading/Loading";

export default function ({ sendServer, setShowMarksheet }) {
  const { data, dispatch } = useData();
  const serverData = sendServer ? sendServer(): data.results[0];

  const handlePushing = () => {
    dispatch({
      type: "changeLoading",
      value: true,
    });
    fetch("https://school-management-api-six.vercel.app/result", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(serverData),
    }).then((res) => {
      if (res.status == 200) {
        setShowMarksheet(false);
        dispatch({
          type: "changeLoading",
          value: false,
        });
        dispatch({
          type: "changePopUp",
          value: {
            name: "message",
            message: "Result Submission Successfull",
          },
        });
      } else {
        dispatch({
          type: "changePopUp",
          value: {
            name: "message",
            message: "Somethin went wrong",
          },
        });
      }
    });

    dispatch({
      type: "imptyMarksheet",
    });
  };

  const genaratePDF = () => {
    let doc = new jsPDF("p", "pt", "a4");
    doc.html(document.getElementById("pdfDownload"), {
      callback: (pdf) => {
        pdf.save("result.pdf");
      },
    });
  };
  const handleCancle = () => {
    setShowMarksheet(false);
    dispatch({
      type: "imptyMarksheet",
    });
  };

  return (
    <div className="marksheet">
      <div className="buttons">
        
        {sendServer && <button onClick={handleCancle}>Cancel</button>}
        <button onClick={genaratePDF}>Download as PDF</button>
        {sendServer && <button onClick={handlePushing}>Send Server</button>}
        
      </div>

      {data.loading && <Loading />}
      <div className="scroll">
        {!data.loading && <div className="container" id="pdfDownload">
          <div className="top">
            <div className="schoolName">Khalshi High School</div>
            <div className="examName">{serverData.examtype}</div>
          </div>
          <div className="middle">
            <div className="stdName">
              <span className="head">Name : </span>
              <span className="value">{serverData.studentName}</span>
            </div>
            <div className="divission">
              <span className="head">Group : </span>
              <span className="value">{serverData.group}</span>
            </div>
            <div className="classes">
              <span className="head">Class : </span>
              <span className="value">{serverData.className}</span>
            </div>

            <div className="roll">
              <span className="head">Roll : </span>
              <span className="value">{serverData.roll}</span>
            </div>
            <div className="roll">
              <span className="head">GPA : </span>
              <span className="value">{serverData.GPA}</span>
            </div>
            <div className="roll">
              <span className="head">Result : </span>
              <span className="value">{serverData.greade}</span>
            </div>
            <div className="roll">
              <span className="head">Total Mark : </span>
              <span className="value">{serverData.totalMark}</span>
            </div>
          </div>
          <div className="bottom">
            <div className="heading">Result Sheet</div>
            <table>
              <thead>
                <tr>
                  <th>Subject Name</th>
                  <th>GPA</th>
                  <th>Mark</th>
                  <th>Point</th>
                </tr>
              </thead>
              <tbody>
                {serverData.subjets.map((items) => (
                  <tr>
                    <td>{items.subject}</td>
                    <td>{items.subGreate}</td>
                    <td>{items.subMarks}</td>
                    <td>{items.subGpa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> }
        
      </div>
    </div>
  );
}
