import React from 'react'
import './careerAdvice.css'
import career1Img from '../../Images/career1.jpg'
import career2Img from '../../Images/career2.png'
import career3Img from '../../Images/career3.jpg'
import career4Img from '../../Images/career4.webp'
import { Link } from 'react-router-dom'

const CareerAdvice = () => {
  return (
    <>
        <div className='adviceSection'>
            <div className='container'>
                <h4 className='careerHeader'>
                    Career Advice
                </h4>
                <p className='careerTxt'>Advice on the job and Talent search</p>
                <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 '>
                    <div className='col careerBody'>
                        <div className='card careerCard' style={{width: "20rem"}}>
                            <img src={career1Img} alt="" className='careerImg' />
                            <div className='card-body'>
                                <h5 className='careerCardHeader'>What should you do before going to job interviews?</h5>
                                <p className='careerCardTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi omnis.</p>
                                <button className='careerBtn'>
                                    <Link to='' className='link'>Learn more</Link>
                                </button>   
                            </div>
                        </div>
                    </div>
                    <div className='col careerBody'>
                        <div className='card careerCard' style={{width: "20rem"}}>
                            <img src={career2Img} alt="" className='careerImg' />
                            <div className='card-body'>
                                <h5 className='careerCardHeader'>What should you do before going to job interviews?</h5>
                                <p className='careerCardTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi omnis.</p>
                                <button className='careerBtn'>
                                    <Link to='' className='link'>Learn more</Link>
                                </button>   
                            </div>
                        </div>
                    </div>
                    <div className='col careerBody'>
                        <div className='card careerCard' style={{width: "20rem"}}>
                            <img src={career3Img} alt="" className='careerImg' />
                            <div className='card-body'>
                                <h5 className='careerCardHeader'>What should you do before going to job interviews?</h5>
                                <p className='careerCardTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi omnis.</p>
                                <button className='careerBtn'>
                                    <Link to='' className='link'>Learn more</Link>
                                </button>   
                            </div>
                        </div>
                    </div>
                    <div className='col careerBody'>
                        <div className='card careerCard' style={{width: "20rem"}}>
                            <img src={career4Img} alt="" className='careerImg' />
                            <div className='card-body'>
                                <h5 className='careerCardHeader'>What should you do before going to job interviews?</h5>
                                <p className='careerCardTxt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sequi omnis.</p>
                                <button className='careerBtn'>
                                    <Link to='' className='link'>Learn more</Link>
                                </button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CareerAdvice