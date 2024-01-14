import React from 'react'
import './services.css'
import { MdOutlineEditNote } from 'react-icons/md'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { CiBeaker1 } from 'react-icons/ci'
import { HiOutlineSearch } from 'react-icons/hi'
import { SiSecurityscorecard } from 'react-icons/si'

const Services = () => {
  return (
    <>
        <h3 className='text-center ourServices'>Our Services</h3>

        <div className='container mt-5'>
            <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 '>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <MdOutlineEditNote size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>Recruitment</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <AiOutlineFullscreen size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>HR Outsourcing</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <CiBeaker1 size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>Expatriate Services</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <HiOutlineSearch size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>Executive Search</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <SiSecurityscorecard size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>Security</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
                <div className='col servicesBody'>
                    <div className='card servicesCard'>
                        <div className='card-body'>
                            <CiBeaker1 size={80} color="#EAEEF5"/> 
                            <h3 className='mt-3 servicesHeader'>Expatriate Services</h3>
                            <p className='servicesTxt mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus at velit eos impedit sunt harum, quibusdam quis officia deserunt possimus! Tempore eius doloremque, unde molestiae dolores et at facere quidem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services