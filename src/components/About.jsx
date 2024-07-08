import React from 'react'
import './about.css'
import './about.js'
import { Link } from 'react-router-dom'

const About = () => {
  
  return (
    <div>
        <div className='about w-full px-[8vh]  h-[85vh] flex items-center justify-center gap-10'>
            


<div className="box-container">
	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front card1f text-center" >
        <div className="inner w-full h-full bg-[#A67665]/30 flex items-center justify-center flex-col color-white">
          <h3 className="flip-box-header font-medium">Easy and Quick Recipes</h3>
        </div>
      </div>
      <div className="flip-box-back card1b text-center">
        <div className="inner color-white w-full h-full bg-gradient-to-br from-[#986654] to-[#d8734e]">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, eos error hic eveniet quod fugiat. Vero doloribus nobis vitae odit. <br /><br />Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis animi totam veritatis perferendis fuga sit iure facilis quo quos, deleniti ipsam facere lauda</p>
        </div>
      </div>
    </div>
	</div>
	<div className="box-item text-center">
  <p className=' w-[50vh]  leading-tight font-bold text-[4vh] text-[#d8734e]'>“I love how easy the recipes are to follow. This website has become my favorite for meal ideas.” </p>
  <button className=' bg-[#d8734e] px-5 py-2 text-white rounded-3xl mt-8 '>Explore Now</button>
	</div>
	<div className="box-item">
    <div className="flip-box">
      <div className="flip-box-front card3f text-center filter-">
        <div className="inner w-full h-full bg-[#A67665]/30 flex items-center justify-center flex-col color-white">
          <h3 className="flip-box-header font-medium">Cook Like a <br /> CHEIF</h3>
        </div>
      </div>
      <div className="flip-box-back card3b text-center">
        <div className="inner color-white w-full h-full bg-gradient-to-tl from-[#986654] to-[#d8734e]">
          <p>A short sentence describing this callout is. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque deleniti labore eum pariatur ducimus. <br /> <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, deserunt!</p>
        </div>
      </div>
    </div>
	</div>
</div>
            


                
        </div>
        
    </div>
  )
}

export default About