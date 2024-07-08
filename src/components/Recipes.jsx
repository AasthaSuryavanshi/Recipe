import React from 'react'
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipes = () => {
  return (
    <div>
        <div className='Recepies bg-[#FCFEFF] w-full -mt-8 px-[6vw] text-center'>
        <img className='w-[7vw] translate-x-[33vw]  translate-y-[4vw]' src="/images/leave.png" alt="" />
        <h1 className=' text-[4vh] font-extrabold tracking-wide leading-10 text-indigo-900'>Our Recipes</h1>
        <h4 className=' mt-5'> Lorem ipsum, dolor sit amet consectetur asit amet consectetur a dipisicing.</h4>


        <div className='card-container px-[7vw] w-full grid grid-cols-3   mt-20 gap-5'>

        <Link
            to={'/'}
            
        >
          <RecipeCard/>
        </Link>


      

        </div>
      </div>
    </div>
  )
}

export default Recipes