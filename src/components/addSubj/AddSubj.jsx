import React from "react";
import "./addSubj.scss";
import { useRef } from "react";
import { Clear } from "@material-ui/icons";
import {
  addSubject,
  removeSubject,
  setSubject,
} from "../../features/inputElement/inputElmSlice";
import { useSelector, useDispatch } from "react-redux";
export default function AddSubj({ addSubjOpen, setAddSubjOpen }) {
  const { inputSubjects } = useSelector((state) => state.inputElement);

  const dispatch = useDispatch();
  const name = useRef();
  const type = useRef();
  const max = useRef();
  const form = useRef();
  const adding = (e) => {
    e.preventDefault();
    const addData = {
      name: name.current.value,
      id: name.current.value.split(" ").join(""),
      type: type.current.value,
      max: max.current.value,
      placeHolder: name.current.value,
    };
    dispatch(addSubject(addData));
    console.log(inputSubjects);
  };
  const remove = (name) => {
    dispatch(removeSubject(name));
  };
  return (
    <div className={addSubjOpen ? "addSubj active" : "addSubj"}>
      <div className="container">
        <div className="heading">Current Subjects</div>
        <div className="currentSubj">
          {inputSubjects.map((item) => (
            <div onClick={() => remove(item.name)}>
              <span>{item.name}</span>
              <Clear />
            </div>
          ))}
        </div>
        <div className="heading">Add a new Subject</div>
        <div className="add">
          <form ref={form} onSubmit={adding}>
            <label htmlFor="name">Subject Name</label>
            <input required type="text" ref={name} list="name" name="name" />
            <datalist id="name">
              {[
                "Bangla",
                "English",
                "Mathmetics",
                "Bangladesh And Global Studies",
                "Science",
                "Information And Communication Techonlogy",
                "Psysics",
                "Chemistry",
                "Biology",
                "Geography",
                "Political Science",
                "History",
                "Islam and Moral Education",
                "Hindu and Moral Education",
                "Agriculture",
                "Higher Mathmetics",
              ].map((elm) => (
                <option value={elm}></option>
              ))}
            </datalist>
            <label htmlFor="type">Subject type</label>
            <input required list="type" type="text" ref={type} name="type" />
            <datalist id="type">
              <option value="main"></option>
              <option value="optional"></option>
            </datalist>

            <label htmlFor="max">Full Marks</label>
            <input required type="number" list="max" ref={max} name="max" />
            <datalist id="max">
              <option value="100"></option>
              <option value="50"></option>
            </datalist>
            <input
              name="reset"
              type="reset"
              className="reset"
              value="Clear form"
            />
            <input type="submit" value={`Add `} />
          </form>
        </div>
        <div className="button" onClick={() => setAddSubjOpen(false)}>
          Exit
        </div>
      </div>
    </div>
  );
}
