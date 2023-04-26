import "./marksheet.scss";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import jsPDF from "jspdf";
import Loading from "../loading/Loading";
import { imptyMarksheet } from "../../features/resultSheet/resulSlice";
export default function ({
  setPopupActive,
  setPopupMessage,
  sendServerData,
  setShowMarksheet,
  result,
}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const serverData = sendServerData ? sendServerData() : result;

  const handlePushing = () => {
    dispatch(imptyMarksheet([]));
    setLoading(true);
    fetch("https://school-management-api-six.vercel.app/result", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(serverData),
    }).then((res) => {
      setLoading(false);
      if (res.status == 200) {
        setShowMarksheet(false);
        setPopupMessage("Result Published Successfully");
        setPopupActive(true);
      } else {
        setPopupMessage("Somthing Went Wrong");
        setPopupActive(true);
      }
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
    dispatch(imptyMarksheet([]));
  };

  return (
    <div className="marksheet">
      <div className="buttons">
        <button onClick={handleCancle}>Cancel</button>
        <button onClick={genaratePDF}>Download as PDF</button>
        {sendServerData && <button onClick={handlePushing}>Send Server</button>}
      </div>
      <Loading loading={loading} />

      {!loading && (
        <div className="scroll">
          <div className="container" id="pdfDownload">
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
                <span className="value">
                  {serverData.GPA ? serverData.GPA : "0"}
                </span>
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
            <div className="info">
              <div className="col"><span>Developer : </span><span>Md Moshiur Rahman</span></div>
              <div className="col"><span>Phone : </span><span>+880 1725256642</span></div>
              <div className="col"><span>Whats App : </span>+880 1885355627<span></span></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
