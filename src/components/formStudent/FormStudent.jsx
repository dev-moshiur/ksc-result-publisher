import "./formStudent.scss";
import { useRef,useState } from "react";
import React from "react";
import { useData } from "../../context";
import Loading from '../loading/Loading'
import Marksheet from '../marksheet/Marksheet'
export default function FormStudent({formName}) {
  const { data, getRequest } = useData();
  const examtype = useRef();
  const group = useRef();
  const className = useRef();
  const roll = useRef();
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState([])
  const [showMarksheet, setShowMarksheet] = useState(false)
  
  
  const handleSubmit =(e)=>{
    e.preventDefault();
          setLoading(true)
          const query = `className=${className.current.value}&group=${group.current.value}&roll=${roll.current.value}&examtype=${examtype.current.value}`
          fetch(`https://school-management-api-six.vercel.app/result/?${query}`)
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              setResult(data)
              setLoading(false)
              setShowMarksheet(true)
            }

          });
    
  }

  return (
    <div className={formName == "student" ? "student active" : "student"}>
      
      <form
        action=""
        onSubmit={handleSubmit}
      >
        {loading && <Loading/>}
        <label htmlFor="examType">Exam Name</label>
          <input
            ref={examtype}
            required
            list="examType"
            type="text"
            name="examType"
            placeholder="select from datalist"
          />
          <datalist id="examType">
            <option value="Half-Yearly Examination 2023"></option>
            <option value="Model Test Examination 2023"></option>
            <option value="Weekly Test-35 2023"></option>
            <option value="Final Examination 2023"></option>
          </datalist>
       
        <label htmlFor="class">Class</label>
        <input ref={className}
            required 
            type="number"
            max={10}
            min={6}
            name="class" id="" />

        <label htmlFor="group">Group</label>
        <input ref={group} required type="text" list="group" name="group" placeholder="select from datalist" id="" />
        <label htmlFor="rool">Roll</label>
        <datalist id="group">
          <option value="science"></option>
          <option value="humanities"></option>
          <option value="business"></option>
          <option value="no group"></option>
        </datalist>
        <input ref={roll} required type="number" min={1} name="rool" id="" />
        <input type="submit" value="Search" />
        
        
      </form>
      {result.length>0 && showMarksheet && <Marksheet result={result[0]} setShowMarksheet={setShowMarksheet}/>}
      
    </div>
  );
}
