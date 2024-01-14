import React from 'react'
import './welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
        <div className='container'>
            <h4 className='welcome text-center'>
                Welocme To DutchRoyal Integrated Resources International
            </h4> 
        </div>

        <div className='rightChoice'>
          <div className='container'>
              <div className='d-lg-flex align-items-center justify-content-between gap-5'>
              <div className='welcomeRight'>
                <div className='welcomeImage shadow-sm'></div>
              </div>
                <div className='welcomeDeets'>
                  <h2 className='findRightChoice mb-4'>We Help You Find The Right Choice</h2>
                  <p className='findRightChoiceDeets mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo totam facilis expedita eaque quos assumenda dolores, porro repellendus nihil incidunt error optio modi temporibus ipsa numquam ducimus, earum minima eveniet?</p>
                  <button className='welcomeBtn'>
                    <Link to='' className='link'>Learn More</Link>
                  </button>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default Welcome