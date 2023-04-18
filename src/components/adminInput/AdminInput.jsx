import React from "react";
import { useRef, useState } from "react";
import "./adminInput.scss";
import subjectMap from "../../makingMarksheetFunction/subjectMap";
import AddSubj from "../addSubj/AddSubj";
import Marksheet from "../marksheet/Marksheet";
import InputComponent from "../inputComponent/InputComponent";
import PopupMessage from "../popupMessage/PopupMessage";
import ClassandGroupWiseSubjects from "../../groupWiseSubjects/subjects";
import { setSubject } from "../../features/inputElement/inputElmSlice";
import { useSelector, useDispatch } from "react-redux";
export default function AdminInput() {
  const { total, fail, gpa, subjectCount, cgpa, subjInfo } = useSelector(
    (state) => state.resultSheet
  );
  const { inputSubjects } = useSelector((state) => state.inputElement);
  const { results } = useSelector((state) => state.searchedResult);
  const dispatch = useDispatch();
  const [popupActive, setPopupActive] = useState(false);

  const [popupMessage, setPopupMessage] = useState("");

  const [showMarksheet, setShowMarksheet] = useState(false);
  const [addSubjOpen, setAddSubjOpen] = useState(false);

  let examtype = useRef();
  let className = useRef();
  let group = useRef();
  let studentName = useRef();
  let roll = useRef();
  const handleClassAndGroupClange = () => {
    const setsubject = ClassandGroupWiseSubjects.filter(
      (elm) =>
        elm.class == className.current.value &&
        elm.group == group.current.value.toLowerCase()
    );
    dispatch(setSubject(setsubject[0].sublects));
  };

  const makeMarksheet = () => {
    inputSubjects.forEach((item) => subjectMap(item, dispatch));
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
  const basicInfoFiled = () => {
    if (
      examtype.current.value &&
      className.current.value &&
      group.current.value
    ) {
      return true;
    } else {
      return false;
    }
  };
  const minimumTreeSubject = () => {
    if (inputSubjects.length >= 3) {
      return true;
    } else {
      return false;
    }
  };

  const submitAction = (e) => {
    e.preventDefault();
    if (basicInfoFiled() && minimumTreeSubject()) {
      makeMarksheet();
      fixGrade(
        !fail &&
          ((gpa / subjectCount > 5 ? 5 : gpa / subjectCount) / 1).toFixed(2)
      );
      setShowMarksheet(true);
    } else if (!basicInfoFiled()) {
      setPopupMessage("Fill up number 1 form at first");
      setPopupActive(true);
    } else if (!minimumTreeSubject()) {
      setPopupMessage("At least 3 Subjects Needed");
      setPopupActive(true);
    }
  };
  function sendServerData() {
    return {
      studentName: studentName.current.value,
      schoolName: `Khalshi High School`,
      examtype: examtype.current.value,
      group: group.current.value.toLowerCase(),
      className: className.current.value,
      roll: roll.current.value / 1,
      GPA:
        !fail &&
        ((gpa / subjectCount > 5 ? 5 : gpa / subjectCount) / 1).toFixed(2),
      greade: fixGrade(
        !fail &&
          ((gpa / subjectCount > 5 ? 5 : gpa / subjectCount) / 1).toFixed(2)
      ),
      totalMark: total,
      subjectCount: subjInfo.length,
      subjets: subjInfo,
    };
  }

  return (
    <div className="adminInput">
      <div className="header">Publish Result</div>
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

        <select
          required
          name="className"
          ref={className}
          placeholder="Class"
          onChange={handleClassAndGroupClange}
        >
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          type="text"
          required
          name="group"
          ref={group}
          list="group"
          placeholder="Group"
          defaultValue={"science"}
          onChange={handleClassAndGroupClange}
        />
        <datalist id="group">
          <option value="Science"></option>
          <option value="Humanities"></option>

          <option value="No group"></option>
        </datalist>
        <input type="reset" value={"Clear Form"} placeholder="Reset" />
      </form>
      <div className="heading">2.Subject wise marks</div>

      <form className="fade" onSubmit={submitAction}>
        <label htmlFor="studentName">Student Name</label>
        <input required ref={studentName} name="studentName" type="text" />
        <label htmlFor="roll">Roll</label>
        <input required ref={roll} name="roll" type="number" />
        {inputSubjects.map((item) => (
          <InputComponent subject={item} />
        ))}
        <button
          onClick={(e) => {
            e.preventDefault();
            setAddSubjOpen(true);
          }}
        >
          Add more subjects
        </button>
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
          sendServerData={sendServerData}
          setShowMarksheet={setShowMarksheet}
          setPopupActive={setPopupActive}
          setPopupMessage={setPopupMessage}
        />
      )}
      <AddSubj addSubjOpen={addSubjOpen} setAddSubjOpen={setAddSubjOpen} />
      <PopupMessage
        popupActive={popupActive}
        setPopupActive={setPopupActive}
        message={popupMessage}
      />
    </div>
  );
}
