
import { useData } from '../../context'
import React from 'react'
import './addSubj.scss'
import { useRef } from 'react';
import {Clear} from '@material-ui/icons'
export default function AddSubj() {
    const name=useRef();
    const type=useRef();
    const id=useRef();
    const max=useRef();
    const form=useRef()
    const placeHolder=useRef();
    
    const {data,dispatch} = useData();
    const adding = () =>{
        const addData={
            name:name.current.value,
            id:id.current.value,
            type:type.current.value,
            max:max.current.value,
            placeHolder:placeHolder.current.value};
            dispatch({
                type:'addSubject',
                value:addData
            })
            form.current.reset();

    }
    const remove=(name)=>{
        dispatch({
            type:'removeSubject',
            value:name
        })
    }
  return (
    <div className={(data.popUp=='addInput')? 'addSubj active':'addSubj'}>
        <div className="container">
            <div className="heading">
                Current Subjects
            </div>
            <div className="currentSubj">
                {data.inputSubjects.map((item)=><div onClick={()=>remove(item.name)}>{item.name}</div>)}

        </div>
        <div className="heading">

            Add a new Subject

        </div>
        <div className="add">
            <form ref={form} onSubmit={(e)=>{e.preventDefault();adding()}}>
                <label htmlFor="name">Subject Name</label>
                <input required type="text" ref={name} list='name' name='name'/>
                <datalist id='name'>
                   { [
                       'Bangla','English','Mathmetics','Bangladesh And Global Studies',
                       'Science','Information And Communication Techonlogy','Psysics',
                       'Chemistry','Biology','Geography','Political Science',
                       'History','Islam and Moral Education','Hindu and Moral Education',
                       'Agriculture','Higher Mathmetics'
                    ].map((elm)=><option value={elm}></option>)}
                    
                </datalist>
                <label htmlFor="type">Subject type</label>
                <input required list='type' type="text" ref={type} name='type'/>
                <datalist id='type'>
                    <option value="main"></option>
                    <option value="optional"></option>
                </datalist>
                <label htmlFor="id">Subject ID</label>
                <input list='id' required type="text" ref={id} name='id'/>
                <datalist id='id'>
                    <option value="bangla"></option>
                    <option value="english"></option>
                    <option value="mathmetics"></option>
                    <option value="bags"></option>
                    <option value="science"></option>
                    <option value="ict"></option>
                    <option value="psysics"></option>
                    <option value="chemistry"></option>
                    <option value="biology"></option>
                    <option value="geography"></option>
                    <option value="political"></option>
                    <option value="history"></option>
                    <option value="iame"></option>
                    <option value="hame"></option>
                    <option value="agriculture"></option>
                    <option value="highermathmetics"></option>
                </datalist>
                <label htmlFor="max">Maximum Mark</label>
                <input required type="number" list='max' ref={max} name='max'/>
                <datalist id='max'>
                    <option value="100"></option>
                    <option value="50"></option>
                </datalist>
                <label htmlFor="placeHolder">Input Placeholder</label>
                <input  type="text" list='name' ref={placeHolder} name='placeHolder'/>
                <input name='reset' type="reset" className='reset' value="Reset" />
                <input type="submit" value="Submit" />
            </form>
        </div>
        <div className="button"onClick={()=>dispatch({
            type:'changePopUp',
            value:''
        })}>
            <Clear/>
        </div>
        </div>
        

    </div>
  )
}
