import { useData } from '../../context'
import React from 'react'
import './popupMessage.scss'
export default function PopupMessage() {
    const {data,dispatch}=useData();
  return (
    <div className={(data.popUp=='message')? 'popupMessage active':'popupMessage'}>
        <div className="container">
            <div className="text">
                {data.popupMessage}
            </div>
            
        </div>
        <div onClick={()=>dispatch({
                type:'changePopUp',
                value:{
                    name:'',
                    message:''
                }
            })} className="cross">
                <span></span>
                <span></span>
            </div>
    </div>
  )
}
