import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'


const Header = () => (
  <>
    <div className='row justify-content-center bg-info'>
      <nav className='navbar navbar-expand-md navbar-light navbar-laravel' >
        <div className='container'>
          <Link className='navbar-brand' to='/'>Q&A</Link>
        </div>
      </nav >
    </div>
  </>
)
export default Header
