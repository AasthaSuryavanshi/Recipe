import React from 'react'
import { NavLink } from 'react-router-dom'


const Nav = () => {
  return (
<div className='nav w-full bg-[#FCFEFF] flex justify-between px-10 py-6 items-center'>
      <img className=' w-15 h-12 object-cover' src="https://dcassetcdn.com/design_img/10150/16906/16906_294312_10150_image.jpg" alt="" />
      <div className='nav-center flex gap-10 font-medium text-[2vh]'>


      <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/'>Home</NavLink>
      <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/recipes'>Recipes</NavLink>
      <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/about'>About</NavLink>
      <NavLink className={(e)=>e.isActive ? 'text-[#d8734e]' : 'text-black  hover:text-[#d8734e] translate-y-0 hover:-translate-y-[3px] ease duration-100'} to='/contact'>Contact</NavLink>
      </div>
      <NavLink to='/recipes'>

      <button className=' px-5 py-2 bg-[#d8734e] rounded-lg text-white font-[500] text-[2vh] translate-y-0 hover:-translate-y-[5px] ease duration-300'>Look New Recipes</button>
      </NavLink>
    </div>
)
}

export default Nav