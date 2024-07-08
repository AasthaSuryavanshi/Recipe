import React from 'react'
import { FaLocationArrow } from "react-icons/fa";


const Home = () => {
  return (
    <div>
        

    <div className='Home w-full bg-[#FCFEFF]  h-[80vh]  flex overflow-x-hidden'>

      <div className='home-left w-[50%] px-[15vw] py-[15vh]  '>
        <h1 className=' text-[7vh] font-extrabold tracking-wide leading-[6vh] w-[25vw] text-[#d8734e]'>Taste the Best that  Surprise you </h1>
        <h4 className='w-[28vw] mt-9'>Lorem ipsum, dolor  Fugiat odio quos suscipit laborios amodio quos suscipit laboriosam porro! Debitis iste, voluptatem distinctio hic vero alias praesentium et est laboriosam, voluptatum accusamus. Sed, officiis placeat?</h4>
        <button className=' px-5 py-2 bg-indigo-800 rounded-lg text-white font-[500] mt-8 text-[1.8vh] flex gap-3 items-center'>Get Started<FaLocationArrow className='text-white' /></button>
      </div>

      <div className='home-right w-[50%] relative '>
        <img className=' absolute top-[60%] z-10 w-[22vw] left-[-3%] h-[65vh] translate-x-[50%] translate-y-[-70%] object-cover rounded-tl-[10vh] rounded-br-[10vh] ' src="https://i.pinimg.com/564x/dc/a9/ad/dca9ad30bfbfe1a1def51461bb37d815.jpg" alt="" />
      <img className=' absolute top-[-30%] left-[-33%] z-10 w-[45vw] h-[28vh] drop-shadow-lg translate-x-[60%] translate-y-[70%] shadow-black object-contain' src="/images/c5d262f3377da91a7229772026a2ec5c-removebg-preview.png" alt="" />
      <img className=' absolute top-[50%] left-[-6.5%] w-[30vw] z-40 h-[25vh] drop-shadow-lg shadow-black object-contain' src="/images/f6a2803b222b56186e92ddb9ddba2294-removebg-preview.png" alt="" />
      </div>
      
    </div>
    </div>
  )
}

export default Home