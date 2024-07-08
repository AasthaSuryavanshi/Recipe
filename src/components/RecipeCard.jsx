import React from 'react'

const RecipeCard = () => {
  return (
    <>
            <div>
                <div className='card grid-cols-3 gap-5  border border-[#A67665]/30 mr-[3.3%] px-10 py-10 h-fit mb-[3%] text-center w-[22vw]  shadow-[10px_10px_15px_0px_rgba(0,0,0,0.1)] hover:scale-[1.02] duration-200'>

        <img className="w-[100%] h-[30vh] object-cover" src="https://i.pinimg.com/236x/36/98/6b/36986b4de2c1e2167993356a470760e9.jpg" alt="" />
        <h1 className="mt-2 mb-1 text-xl text-semibold">Dishes Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis incidunt eius reprehenderit laborum quisquam dolore consectetur modi voluptatem debitis animi!</p>
        <div className="flex justify-between text-zinc-400 mt-5 ">
            <p className="text-center ">
                <i className="ri-timer-line"></i>
                <br />
                <span className="text-sm">20min</span>
            </p>
            <p className="text-center">
                <i className="ri-thumb-up-line"></i>
                <br />
                <span className="text-sm">Easy</span>
            </p>
            <p className="text-center">
                <i className="ri-share-line"></i>
                <br />
                <span className="text-sm">Share</span>
            </p>
        </div>
        </div>
            </div>




</>
  )
}

export default RecipeCard