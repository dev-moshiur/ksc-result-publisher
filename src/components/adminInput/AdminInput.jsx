import React from "react";

import { useRef, useState } from "react";
import "./adminInput.scss";

import { useData } from "../../context";
import subjectMap from "../../makingMarksheetFunction/subjectMap";
import Loading from "../loading/Loading";

import Marksheet from "../marksheet/Marksheet";
import InputComponent from "../inputComponent/InputComponent";

export default function AdminInput() {
  const [showMarksheet, setShowMarksheet] = useState(false);

  const { data, dispatch } = useData();

  let examtype = useRef();
  let className = useRef();
  let group = useRef();
  let studentName = useRef();
  let roll = useRef();

  const makeMarksheet = () => {
    data.inputSubjects.forEach((item) => subjectMap(item, dispatch));
  };

  const fixGrade = (gpa) => {
    if (gpa == 5) {
      return "A+";
    } else if (gpa < 5 && gpa >= 4) {
      return "A";
    } else if (gpa < 4 && gpa >= 3.5) {
      return "A-";
    } else if (gpa < 3.5 && gpa >= 3) {
      return "B";
    } else if (gpa < 3 && gpa >= 2) {
      return "C";
    } else if (gpa < 2 && gpa >= 1) {
      return "D";
    } else {
      return "F";
    }
  };
  const addSubjFormActive = (e) => {
    e.preventDefault();
    dispatch({
      type: "changePopUp",
      value: {
        name: "addInput",
        message: "",
      },
    });
  };
  const submitAction = (e) => {
    e.preventDefault();
    makeMarksheet();
    console.log(data.results[0]);

    fixGrade(
      !data.fail &&
        (
          (data.gpa / data.subjectCount > 5
            ? 5
            : data.gpa / data.subjectCount) / 1
        ).toFixed(2)
    );
    setShowMarksheet(true);
  };
  function sendServer() {
    return {
      studentName: studentName.current.value,
      schoolName: `Khalshi High School`,
      examtype: examtype.current.value,
      group: group.current.value,
      className: className.current.value,
      roll: roll.current.value / 1,

      GPA:
        !data.fail &&
        (
          (data.gpa / data.subjectCount > 5
            ? 5
            : data.gpa / data.subjectCount) / 1
        ).toFixed(2),
      greade: fixGrade(
        !data.fail &&
          (
            (data.gpa / data.subjectCount > 5
              ? 5
              : data.gpa / data.subjectCount) / 1
          ).toFixed(2)
      ),
      totalMark: data.total,
      subjectCount: data.subjInfo.length,
      subjets: data.subjInfo,
    };
  }

  return (
    <div className="adminInput">
      <div className="header">Input Data of Every student</div>
      <div className="heading">1.Basic Information</div>
      <form className="basicInfo fade">
        <input
          placeholder="Examination Type Or Name"
          ref={examtype}
          required
          list="examType"
          type="text"
          name="examType"
        />
        <datalist id="examType">
          <option value="Half-Yearly Examination 2023"></option>
          <option value="Model Test Examination 2023"></option>
          <option value="Weekly Test-35 2023"></option>
          <option value="Final Examination 2023"></option>
        </datalist>

        <input
          type="number"
          required
          name="className"
          ref={className}
          placeholder="Class"
        />
        <input
          type="text"
          required
          name="group"
          ref={group}
          list="group"
          placeholder="Group"
        />
        <datalist id="group">
          <option value="science"></option>
          <option value="humanities"></option>
          <option value="business"></option>
          <option value="no group"></option>
        </datalist>
        <input type="reset" value={"Clear Form"} placeholder="Reset" />
      </form>
      <div className="heading">2.Subject wise marks</div>

      <form className='fade'
        onSubmit={submitAction}>

        <label htmlFor="studentName">Student Name</label>
        <input required ref={studentName} name="studentName" type="text" />
        <label htmlFor="roll">Roll</label>
        <input required ref={roll} name="roll" type="number" />
        {data.inputSubjects.map((item) => (
          <InputComponent subject ={item}/>
          
        ))}
        <button onClick={addSubjFormActive}>Add more subjects</button>
        <input
          type="reset"
          className="reset"
          value={"Clear Form"}
          placeholder="Reset"
        />
        <input type="submit" value="Submit" />
      </form>

      {showMarksheet && (
        <Marksheet
          sendServer={sendServer}
          setShowMarksheet={setShowMarksheet}
        />
      )}
    </div>
  );
}
