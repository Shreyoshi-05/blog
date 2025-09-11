import React from 'react'
import {Link} from 'react-router-dom'
import { UseAppContext } from '../../context/AppContext'

const Nav = () => {
  const {token,navigate} = UseAppContext()

  return (
  <div style={{"padding":"0 2rem"}} className="navbar bg-base-100 shadow-sm">
  <Link to="/" className="flex-1">
    <img src="/logo.svg" alt="" />
  </Link>
  <div className="flex-none">
    <Link to="/admin" className="menu menu-horizontal px-1">
      <button style={{"padding":"0 2rem"}} className="btn rounded-2xl bg-[#7b2cbf] text-white">{token? "Dashbord":"Login" }</button>
    </Link>
  </div>
</div>
  )
}

export default Nav