import React from 'react'
import './hero.css'
import heroImg from '../../Images/Group new.png'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <>
       <div className='heroBox'>
            <div className='container'>
                <div className='d-lg-flex flex-nowrap align-items-center gap-5'>
                    <div className='heroItemRight'> 
                        <h2 className='heroTxt mb-5'>FIND YOUR <span style={{color: "#203353"}}>DREAM JOB</span> WITH US TODAY</h2>
                        <form className='heroForm'>
                            <input placeholder='Job title, keywords' />
                            <input placeholder='City or state' />
                        </form>
                        <span className='d-flex align-items-center justify-content-center'>
                            <button className='heroBtn mt-lg-5'>
                                <Link to='' className='link'>Find Jobs</Link>
                            </button>
                        </span>
                        <p className='text-center mt-4 fw-bold' style={{color: '#203353'}}>Post your CV - It only takes a few seconds</p>
                    </div>
                    <div className='heroItemLeft'>
                        <img src={heroImg} alt="" className='heroImg'/>
                    </div>
                </div>
            </div>
       </div> 
    </>
  )
}

export default Hero