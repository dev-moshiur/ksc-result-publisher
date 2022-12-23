

import './formStudent.scss'
import { useRef } from 'react'
import React from 'react'
import { useData } from '../../context';


export default function FormStudent() {
  const {data,getRequest}=useData();
  
  const schoolName=useRef();
  const examtype=useRef();
  const group=useRef();
  const className=useRef();
  const roll=useRef();
  const mobile=useRef();
  
 
  
  return (
    <div className={(data.formType=='student')? 'student active':'student'}>
      <div className="header">
        Fill Up This Form
      </div>
      <form action="" onSubmit={(e)=>{e.preventDefault();getRequest(`schoolName=${schoolName.current.value}&className=${className.current.value}&group=${group.current.value}&roll=${roll.current.value}`);}}>
        <label  htmlFor="school">School</label>
        <input ref={schoolName} required type="text" list='school' name="school"  />
        <datalist id="school">
          <option value="Khalshi High School"></option>
          <option value="Nijpara High School"></option>
          <option value="Patharghata High School"></option>

        </datalist>
        <label htmlFor="class">Class</label>
        <input ref={className}   required type="number" name="class" id="" />
        
        <label htmlFor="group">Group</label>
        <input ref={group}  required type="text" name="group" id="" />
        <label htmlFor="rool">Roll</label>
        <input ref={roll}  required type="number" min={1} name="rool" id="" />
        <label htmlFor="mobile">Mobile Number</label>
        <input ref={mobile} required type="text" name="mobile" id="" />
        <input type="reset" className='reset' value="Reset" />
        <input type="submit"  value="Submit" />

      </form>
    </div>
  )
}
