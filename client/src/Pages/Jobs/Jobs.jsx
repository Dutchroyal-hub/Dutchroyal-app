import React from 'react'
import { Link } from 'react-router-dom'
import './jobs.css'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { TfiPlus } from 'react-icons/tfi'
import { BiFastForward } from 'react-icons/bi'
import { feed } from './JobsFeed'
import Footer from '../../Components/Footer/Footer'
import Topbar from '../../Components/Topbar/Topbar'


const Jobs = () => {
  return (
    <>
    <Topbar/>
       <div className='jobsHero'>
        <div className='container'>
            <form className='jobForm'>
                <input placeholder='Job title, keywords' />
                <input placeholder='City or state' />
            </form>
            <span className='d-flex align-items-center justify-content-center'>
                <button className='jobsBtn mt-lg-5'>
                    <Link to='' className='link'>Find Jobs</Link>
                </button>
            </span>
            {/* <p className='text-center mt-4 fw-bold' style={{color: '#203353'}}>Post your CV - It only takes a few seconds</p> */}
        </div>
      </div>

      <div className='container'>
        <h3 className='text-center jobHeader'>Job Feed</h3>

        <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-5'>
            {feed.map((job) => {
                return(
                    <div className='col jobsBody'>
                        <div className='card jobsCard'>
                            <div className='card-body'>
                                <h5 className='jobsHeader'>{job.title}</h5>
                                <p className='jobsTxt'>{job.company}</p>
                                <span className='d-flex justify-content-start gap-2'>
                                    <IoLocationOutline size={17} color='#203353' />
                                    <h5 className='jobsLocation'>{job.location}</h5>
                                </span>
                                <span className='d-flex justify-content-start gap-2'>
                                    <HiOutlineBriefcase size={17} color='#203353' />
                                    <h5 className='jobsLocation'>{job.type}</h5>
                                </span>
                                <div className='jobsUrgentBox d-flex align-items-center justify-content-start gap-2'>
                                    <BiTimeFive size={16} color='#F91313' />
                                    <span className='jobsUrgrnt'>{job.critcal}</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-between mt-5'>
                                    <button className='jobBtn'>
                                        <Link to='' className='link'>Apply now</Link>
                                    </button>
                                    <div className='jobsWishListBox d-flex align-items-center justify-content-center'>
                                        <TfiPlus size={18} color='#203353'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <div className='d-flex justify-content-center nextJobFeed mb-5'>
            <span className='jobBox me-2 active'>
                1
            </span>
            <span className='jobBox me-2'>2</span>
            <span className='jobBox me-2'>3</span>
            <span className='jobBox me-2'>4</span>
            <span className='jobBox me-2'>...</span>
            <span className='jobBox me-2'>10</span>
            <span className='jobBox'>
                <BiFastForward size={16} color='#203353'/>
            </span>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Jobs