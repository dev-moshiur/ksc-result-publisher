import { Link } from "react-router-dom";
import './topBar.scss';
import React from 'react';

export default function TopBar() {
  return (
    <div className='topBar'>
      <div className="left">
        <Link to='/'>Admin Site</Link>
        
      </div>
      <div className="right">
        <Link to='#'>Publish</Link>
        <Link to='#'>Result</Link>
        <Link to='#'>Login</Link>
      </div>
    </div>
  )
}
