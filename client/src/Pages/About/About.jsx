import React from 'react'
import './about.css'
import Topbar from '../../Components/Topbar/Topbar'
import { IoPeopleOutline } from 'react-icons/io5'
import { FaCompress } from 'react-icons/fa'
import Footer from '../../Components/Footer/Footer'

const About = () => {
  return (
    <>
    <Topbar />
      <div className='aboutHero mb-5'>
        <div className='aboutOverlay'>
            <h4 className='aboutHead'>ABOUT US</h4>
        </div>
      </div>  

      <div className='container'>

        <div className='d-lg-flex justify-content-center align-items-center gap-5'>
            <div className='abtDutchFlex1'>
                <h4 className='abtDutchHead mb-2'>About DutchRoyal</h4>
                <p className='abtDutchBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt risus in enim mollis, ut imperdiet ex porta. Donec ac odio sit amet ligula condimentum elementum. Aenean rhoncus bibendum odio ac faucibus. Cras tellus ex, maximus nec placerat vitae, aliquam non enim. Nunc diam metus, blandit ut imperdiet sed, vehicula vitae justo. Nullam luctus efficitur rutrum. Praesent pulvinar ex et dictum laoreet. Vestibulum condimentum bibendum enim, Phasellus congue laoreet tellus, ut congue enim condimentum sit amet. Etiam mollis turpis eget libero cursus ornare. Mauris vel consectetur lectus, ac blandit ante. Nulla suscipit augue felis,

Etiam malesuada neque diam, vel viverra elit faucibus non. Duis sit amet accumsan est, in pulvinar metus. Quisque et interdum felis. Fusce semper ligula non est congue, nec tincidunt leo luctus. Sed ac mattis ante. Vestibulum non congue metus, vitae ultricies lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eget diam ac ligula congue blandit quis vitae nisi. Integer a convallis lorem, eu dapibus eros. Aenean et libero ut est faucibus ultrices eu vel purus. id pulvinar dolor imperdiet ac. Pellentesque vitae accumsan dui, et sagittis justo. Cras sed nisl orci. Quisque laoreet libero et congue rhoncus.</p>
            </div>
            <div className='abtDutchFlex2'>
                <div className='abtDutchImage'></div>
            </div>
        </div>

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

            <div className='d-lg-flex justify-content-center align-items-center gap-5 abtMission'>

                <div className='abtDutchFlexMission1'>
                    <div className='abtDutchMissionImage'></div>
                </div>
                
                <div className='abtDutchFlexMission2'>
                    <h4 className='abtDutchMissionhHead mb-2'>Our Mission</h4>
                    <p className='abtDutchMissionBody'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt risus in enim mollis, ut imperdiet ex porta. Donec ac odio sit amet ligula condimentum elementum. Aenean rhoncus bibendum odio ac faucibus. Cras tellus ex, maximus nec placerat vitae, aliquam non enim. Nunc diam metus, blandit ut imperdiet sed, vehicula vitae justo. Nullam luctus efficitur rutrum. Praesent pulvinar ex et dictum laoreet. Vestibulum condimentum bibendum enim, Phasellus congue laoreet tellus, ut congue enim condimentum sit amet. Etiam mollis turpis eget libero cursus ornare. Mauris vel consectetur lectus, ac blandit ante. Nulla suscipit augue felis,

    Etiam malesuada neque diam, vel viverra elit faucibus non. Duis sit amet accumsan est, in pulvinar metus. Quisque et interdum felis. Fusce semper ligula non est congue, nec tincidunt leo luctus. Sed ac mattis ante. Vestibulum non congue metus, vitae ultricies lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce eget diam ac ligula congue blandit quis vitae nisi. Integer a convallis lorem, eu dapibus eros. Aenean et libero ut est faucibus ultrices eu vel purus. id pulvinar dolor imperdiet ac. Pellentesque vitae accumsan dui, et sagittis justo. Cras sed nisl orci. Quisque laoreet libero et congue rhoncus.</p>
                </div>

            </div>

      </div>
      <Footer />
    </>
  )
}

export default About