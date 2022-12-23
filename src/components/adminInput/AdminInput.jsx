

import React from 'react'

import { useRef,useState } from 'react'
import './adminInput.scss'

import { useData } from '../../context';
import subjectMap from '../../makingMarksheetFunction/subjectMap';
import Loading from '../loading/Loading';

export default function () {
   const {data,dispatch} = useData();

    let schoolName=useRef();
    let examtype=useRef();
    let className=useRef();
    let group=useRef();
    let studentName=useRef();
    let roll=useRef();

    const makeMarksheet =()=>{
        data.inputSubjects.forEach((item)=>subjectMap(item,dispatch))
    }
    const getresult =()=>sendServer();
    const submitAction=()=>{
        makeMarksheet();
    }
    const sendServer=()=>{
        dispatch({
            type:'changeLoading',
            value:true
        })
        let serverData={
            studentName:studentName.current.value,
            schoolName:schoolName.current.value,
            examtype:examtype.current.value,
            group:group.current.value,
            className:className.current.value,
            roll:roll.current.value/1,
            greade:'D',
            GPA:!data.fail &&(((data.gpa/data.subjectCount>5)? 5:data.gpa/data.subjectCount)/1).toFixed(2),
            totalMark:data.total,
            subjectCount:data.subjInfo.length,
            subjets:data.subjInfo
    
          }
        fetch('https://school-management-api-six.vercel.app/result',{
          method:'post',
          headers:{'Content-type':'application/json'},
          body:JSON.stringify(serverData)
        }).then(res=>{
            if (res.status == 200) {

                dispatch({
                    type:'changePopUp',
                    value:{
                        name:'message',
                        message:'Result Submission Successfull'
                    }
                })
                
            } else {
                dispatch({
                    type:'changePopUp',
                    value:{
                        name:'message',
                        message:'Somethin went wrong'
                    }
                })
            }
        })
        

        dispatch({
            type:'imptyMarksheet',
        })
        dispatch({
            type:'changeLoading',
            value:false
        })
    }
    
    
    
    
    
  return (
    <div className='adminInput'>
        <div className="header">

            Input Data of Every student

        </div>
        <div className="heading">

            Basic Information

        </div>
        <form  className="basicInfo">
            <input type="text" list='school' name='schoolName' max={100} ref={schoolName} placeholder="Your School Name"/>
            <datalist id="school">
            <option value="Khalshi High School"></option>
            <option value="Nijpara High School"></option>
            <option value="Patharghata High School"></option>

            </datalist>
            <input type="text" name='examtype' ref={examtype} placeholder="Examination Type Or Name"/>
            <input type="number" name='className' ref={className} placeholder="Class"/>
            <input type="text" name='group' ref={group} placeholder="Group"/>
            <input type="reset" value={'Reset'}  placeholder="Reset"/>
            
        </form>
        <div className="heading">
            Subject Information
        </div>
        <button onClick={()=>dispatch({
            type:'changePopUp',
            value:{
                name:'addInput',
                message:''
            }
        })}>
            Add Subject
            </button>
        <form onSubmit={(e)=>{e.preventDefault();submitAction();}}>
            <label htmlFor="studentName">Student Name</label>
            <input ref={studentName} name='studentName' type="text" />
            <label htmlFor="roll">Roll</label>
            <input ref={roll} name='roll' type="text" />
            {
                data.inputSubjects.map((item)=><><label htmlFor={item.name}>{item.name}</label>
                <input type={(item.name=='Bangla' || item.name=='English')? 'text':'number'} required name={item.name} max={item.max} status={item.type} id={item.id} placeHolder={item.placeHolder}/>
                </>)
            }
        <input type="reset" className='reset' value={'Reset'}  placeholder="Reset"/>
            <input type="submit" value="Submit" />
        </form>
        <button className={!(data.subjInfo.length>0) && 'btnDisabled'} disabled={(data.subjInfo.length>0)? false:true} onClick={getresult}>Send to Server</button>
        {data.loading && <Loading/>}
        
    </div>
  )
}
