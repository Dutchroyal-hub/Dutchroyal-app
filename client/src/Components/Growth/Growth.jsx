import React from 'react'
import './growth.css'
import { Link } from 'react-router-dom'
import { IoPeopleOutline } from 'react-icons/io5'
import { FaCompress } from 'react-icons/fa'

const Growth = () => {
  return (
    <>
        <div className='rightGrowth'>
          <div className='container'>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                <div className='growthDeets'>
                  <h2 className='findRightGrowth mb-4'>We Help You Find The Right Choice</h2>
                  <p className='findRightGrothDeets mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda dolores, porro repellendus nihil incidunt error optio modi temporibus ipsa numquam ducimus, earum minima eveniet?</p>
                  <button className='growthBtn'>
                    <Link to='' className='link'>Learn More</Link>
                  </button>
                </div>
                <div className='growthRight'>
                <   div className='growthImage shadow-sm'></div>
                </div>
              </div>
          </div>
        </div>

        <div className='rightGrowthMobile'>
          <div className='container'>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                <div className='growthRight'>
                    <div className='growthImage shadow-sm'></div>
                </div>
                <div className='growthDeets'>
                  <h2 className='findRightGrowth mb-4'>We Help You Find The Right Choice</h2>
                  <p className='findRightGrothDeets mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda dolores, porro repellendus nihil incidunt error optio modi temporibus ipsa numquam ducimus, earum minima eveniet?</p>
                  <button className='growthBtn'>
                    <Link to='' className='link'>Learn More</Link>
                  </button>
                </div>
              </div>
          </div>
        </div>

        <div className='container'>
            <div className='d-lg-flex align-items-center justify-content-between gap-5 infoStats'>
                <div className='statsFlex'>       
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='statsBox1 me-3'>
                            <IoPeopleOutline color='#EAEEF5'size={80}/>
                            <h3 className='statsTxt'>675+</h3>
                            <p className='statsTxt1'>People Hired</p>
                        </div>
                        <div className='statsBox2'>
                            <FaCompress color='#EAEEF5'size={65} className='mb-3'/>
                            <h3 className='statsTxt'>765+</h3>
                            <p className='statsTxt1'>Satisfied company</p>
                        </div>
                    </div>
                </div>

                <div className='proService'>
                    <div className='provideServices row'>
                        <span className='d-flex align-items-center justify-content-center text-center'>
                            We provide the best services
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Growth