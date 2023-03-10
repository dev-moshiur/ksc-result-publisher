import { Clear } from "@material-ui/icons";
import React from "react";
import "./inputComponent.scss";
import { useDispatch } from "react-redux";

import { removeSubject } from "../../features/inputElement/inputElmSlice";
export default function InputComponent({ subject }) {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeSubject(subject.name));
  };

  return (
    <div className="inputComponent">
      <div className="top">
        <div className="feature">
          <span>Subject Type : </span>
          <span>{subject.type}</span>
        </div>
        <div className="feature">
          <span>Full Mark : </span>
          <span>{subject.max}</span>
        </div>
        <Clear className="clear" onClick={remove} />
      </div>

      <label htmlFor={subject.name}>{subject.name}</label>
      <input
        type={
          subject.name === "Bangla" || subject.name === "English"
            ? "text"
            : "number"
        }
        required
        name={subject.name}
        max={subject.max}
        status={subject.type}
        id={subject.id}
        placeHolder={
          subject.name === "Bangla" || subject.name === "English"
            ? "first paper,second paper"
            : subject.placeHolder
        }
      />
    </div>
  );
}
