import React from 'react'
import Recipes from './Recipes'
import RecipeCard from './RecipeCard'

const RecipePage = () => {
  return (
    <div className=' w-full h-fit px-[5vh] bg-slate-600 grid-cols-3 gap-6'> 
        <RecipeCard/>
        

    </div>
  )
}

export default RecipePage