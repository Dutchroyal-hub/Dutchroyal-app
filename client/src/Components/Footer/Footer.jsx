import React from 'react'
import './footer.css'
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { HiPhone, HiMail } from 'react-icons/hi'
import { MdLocationOn } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className='footer'>
        <div className='container'>
            <div className='footerBody'>
                <div className='footerItems'>
                    <h3 className='logoHeader'>DUTCHROYAL</h3>
                    <p className='logoTxt'>Lorem ipsum dolor sit amet, Nihil enim labore aut totam corporis quod, temporibus dignissimos obcaecati</p>
                    <div className='footerIcons'>
                        <div><AiFillFacebook size={25} color="#EAEEF5" className='me-3'/></div>
                        <div><AiOutlineTwitter size={25} color="#EAEEF5" className='me-3' /></div>
                        <div><AiOutlineInstagram size={25} color="#EAEEF5"/></div>
                    </div>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">For Job Seekers</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Why DIRI?</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Our team</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Pricing plans</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Companies</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>About us</Link> 
                        </li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">Other Pages</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Privacy policy</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Terms of service</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Disclaimer</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Reviews</Link> 
                        </li>
                    </ul>
                </div>

                <div className='footerItems'>
                <h1 className="footerTitle">Contact us</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                            <span className='d-flex align-items-center justify-content-start gap-2'>
                                <HiPhone size={16} color="#EAEEF5"/>
                                <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>08033295109, 08123406001</Link> 
                            </span>
                        </li>
                        <li className='footerListItem'>
                            <span className='d-flex align-items-center justify-content-start gap-2'>
                                <MdLocationOn size={16} color="#EAEEF5"/>
                                <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>Adebowale House, Block B. 2nd Floor,</Link> 
                            </span>     
                            <span>150, Ikorodu Road, Onipanu, Lagos.</span>
                        </li>
                        <li className='footerListItem'>
                            <span className='d-flex align-items-center justify-content-start gap-2'>
                                <HiMail size={16} color="#EAEEF5"/>
                                <Link style={{cursor: 'pointer', color: '#EAEEF5'}} className='link'>dutchroyalinternational@gmail.com</Link> 
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='footerBottom text-center'>
                &copy; 2023 DutchRoyal Integrated Resources International 
            </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer