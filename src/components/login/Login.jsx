

import React, { useRef } from 'react'
import { useData } from '../../context';
import Loading from '../loading/Loading'
import './login.scss'
export default function Login() {
  const {data,dispatch} = useData();
  

  let email=useRef()
  let password=useRef()
  const handleSubmit=(e)=>{

    e.preventDefault()
    dispatch({
      type:'changeLoading',
      value:true
    })
    
        fetch(`https://school-management-api-six.vercel.app/register/login`,{
            method:'post',
            headers:{'Content-type':'application/json'},
            credentials:'include',
            
            body:JSON.stringify({
                email:email.current.value,
                password:password.current.value
            })
            })
            .then(data=>{
              dispatch({
                type:'loading',
                value:false
              })
                if(data.status==200) {
                  dispatch({
                    type:'setAdmin',
                    value:true
                  })
                    
                    }
                    
                
                else{
                    

                }})
    
    }
  
    
  return (
    <div className={'login'}>
        <div className={'heading'}>
          Login
        </div>
        <Loading loading={data.loading}/>
        <form onSubmit={handleSubmit}>
          <label htmlFor={'email'}>
            Email
          </label>
          
          <input required ref={email} type="email" name='email'  />
          <label htmlFor="password">
            Password
          </label>
          <input required ref={password} type="password" name='password'  />
          <input className={'blue'} type="reset" value="Reset" />
          <input className={'blue'} type="submit" value="Submit" />
        </form>
        <div className={'change'}>Dont have account? <span > Register</span></div>
      
        
    </div>
  )



  
}