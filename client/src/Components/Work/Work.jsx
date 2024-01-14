import React from 'react'
import './work.css'

const Work = () => {
  return (
    <>
        <h3 className='text-center howWeWorkTxt'>How We Work</h3> 

        <div className='work'>
          <div className='container'>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                <div className='workDeets'>
                  <h2 className='findRightWork mb-4'>We Don't Stop After Hiring</h2>
                  <p className='findRightWorkDeets mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda dolores, porro repellendus nihil incidunt error optio modi temporibus ipsa numquam ducimus, earum minima eveniet?</p>
                  <span className='d-flex align-items-center justify-content-center gap-4 mb-3'>
                    <h3 className='howWeWorkInfo'>01</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Profile The Ideal Candidate</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center gap-4  mb-3'>
                    <h3 className='howWeWorkInfo'>02</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Targeted Headhunting</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center gap-4'>
                    <h3 className='howWeWorkInfo'>03</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Scientific Assessment</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                </div>
                <div className='workRight'>
                <   div className='workImage shadow-sm'></div>
                </div>
              </div>
          </div>
        </div>

        <div className='workMobile'>
          <div className='container'>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                <div className='workRight'>
                    <div className='workImage shadow-sm'></div>
                </div>
                <div className='workDeets'>
                  <h2 className='findRightGrowth mb-4'>We Don't Stop After Hiring</h2>
                  <p className='findRightGrothDeets mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda dolores, porro repellendus nihil incidunt error optio modi temporibus ipsa numquam ducimus, earum minima eveniet?</p>
                  <span className='d-flex align-items-center justify-content-center gap-4 mb-3'>
                    <h3 className='howWeWorkInfo'>01</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Profile The Ideal Candidate</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center gap-4  mb-3'>
                    <h3 className='howWeWorkInfo'>02</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Targeted Headhunting</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                  <span className='d-flex align-items-center justify-content-center gap-4'>
                    <h3 className='howWeWorkInfo'>03</h3>
                    <span className='howWeWorkInfo1'>
                        <h1 className='howWeWorkInfoHeader'>Scientific Assessment</h1>
                        <h3 className='howWeWorkInfoTxt'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda</h3>
                    </span>
                  </span>
                </div>
              </div>
          </div>
        </div>

        <div className='mission'>
            <div className='missionOverlay'>
                <div className='container'>
                    <div className='missionDeets'>
                        <h3 className='missionTxt text-center'>Focus On Your Mission <br /> While <span style={{color: '#FFD700'}}>We Focus On Our HR</span></h3>
                        <p className='text-center text-white mt-3'>Terry M. White</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Work