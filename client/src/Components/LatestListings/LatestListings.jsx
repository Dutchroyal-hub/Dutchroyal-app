import React from 'react'
import './latestlistings.css'
import { IoLocationOutline } from 'react-icons/io5'
import { HiOutlineBriefcase } from 'react-icons/hi'
import { BiTimeFive } from 'react-icons/bi'
import { TfiPlus } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

const LatestListings = () => {
  return (
    <>
      <div className='container'>
        <h3 className='listingHeader'>
            Latest Listings
        </h3>
        <p className='listingTxt'>Get started with the best job</p>
        <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 '>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col listingBody'>
                <div className='card listingCard'>
                    <div className='card-body'>
                        <h5 className='listingsHeader'>Backend Software Engineer</h5>
                        <p className='listingsTxt'>Bitwise Technologies LTD</p>
                        <span className='d-flex justify-content-start gap-2'>
                            <IoLocationOutline size={17} color='#203353' />
                            <h5 className='listingLocation'>Lagos, Nigeria</h5>
                        </span>
                        <span className='d-flex justify-content-start gap-2'>
                            <HiOutlineBriefcase size={17} color='#203353' />
                            <h5 className='listingLocation'>Full time</h5>
                        </span>
                        <div className='urgentBox d-flex align-items-center justify-content-start gap-2'>
                            <BiTimeFive size={16} color='#F91313' />
                            <span className='listingUrgrnt'>Urgent</span>
                        </div>
                        <div className='d-flex align-items-center justify-content-between mt-5'>
                            <button className='jobBtn'>
                                <Link to='' className='link'>Apply now</Link>
                            </button>
                            <div className='wishListBox d-flex align-items-center justify-content-center'>
                                <TfiPlus size={18} color='#203353'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>  
    </>
  )
}

export default LatestListings