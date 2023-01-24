import React from "react";
import "./rowResult.scss";

export default function RowResult({ data }) {
  return (
    <tr className="rowResult">
      <td>{data.studentName}</td>
      <td>{data.roll}</td>
      {data.subjets.map((items) => (
        <>
          <td>{items.subject}</td>
          <td>{items.subGreate}</td>
          <td>{items.subMarks}</td>
          <td>{items.subGpa}</td>
        </>
      ))}
      <td>{data.totalMark}</td>
      <td>{data.GPA}</td>
    </tr>
  );
}
