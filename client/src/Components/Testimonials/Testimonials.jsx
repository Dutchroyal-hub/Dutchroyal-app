import React from 'react'
import './testimonials.css'
import { FaQuoteLeft } from 'react-icons/fa'
import testImg from '../../Images/testImg1.webp'

const Testimonials = () => {

  return (
    <>
      <h3 className='text-center ourServices'>What Our Client Say About Us</h3>

      <div className='testBackground'>
        <div className='container'>
            <div className='d-lg-flex align-items-center justify-content-between gap-5'>
                <div className='testDeets'>
                    <h4 className='testHeader'>The best job portal</h4>
                    <p className='mt-4 testTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?</p>
                    <span className='d-flex justify-content-betwewen gap-2 mt-3'>
                        <FaQuoteLeft size={20} color='#FFD700' className='mt-4' />
                        <h5 className='testName mt-4'>Seun David Developer, DIRI</h5>
                    </span>
                </div>
                <div className='testImgBox d-flex justify-content-center'>
                    <img src={testImg} alt="" className='testBox'/>
                </div>
            </div>
              <div className='d-flex justify-content-center testCir'>
                <span className='testCircle me-3'></span>
                <span className='testCircle me-3'></span>
                <span className='testCircle'></span>
              </div>
        </div>
      </div>  

      <div className='testBackgroundMobile'>
        <div className='container'>
            <div className='d-lg-flex align-items-center justify-content-between gap-5 testimonials'>
              <div className='testImgBox d-flex justify-content-center'>
                <div className='testImgMobile'>
                  <img src={testImg} alt="" className='testBoxMobile'/>
                </div>
              </div>
                <div className='testDeets'>
                    <h4 className='testHeader'>The best job portal</h4>
                    <p className='mt-4 testTxt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellat veritatis suscipit eum laboriosam ipsam dignissimos cupiditate voluptatibus! Fugit nesciunt facilis, ullam quam soluta dolorum sint incidunt eius molestiae libero?</p>
                    <span className='d-flex justify-content-betwewen gap-2'>
                        <FaQuoteLeft size={20} color='#FFD700' className='mt-4' />
                        <h5 className='testName mt-4'>Seun David Developer, DIRI</h5>
                    </span>
                </div>
            </div>
            <div className='d-flex justify-content-center testCir'>
                <span className='testCircle me-3'></span>
                <span className='testCircle me-3'></span>
                <span className='testCircle'></span>
              </div>
        </div>
      </div>  
    </>
  )
}

export default Testimonials