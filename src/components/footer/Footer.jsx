

import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import React from 'react'
import './footer.scss'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="left">
            Copywrite 2023 by Khalshi High School
        </div>
        <div className="right">
                <Facebook/>
                <Twitter/>
                <Instagram/>
        </div>
    </div>
  )
}
