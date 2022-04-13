import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <a href="/">MyBlogs</a>
        <ul className="menu">
            <li>
                <NavLink to="/">Blogs</NavLink>
            </li>
            <li>
                <NavLink to="/addblog">Add Blog</NavLink>
            </li>
        </ul>
    </nav>
  )
}
