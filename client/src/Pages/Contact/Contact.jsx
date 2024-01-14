import React, { useState } from 'react'
import './contact.css'
import Topbar from '../../Components/Topbar/Topbar'
import Form from 'react-bootstrap/Form';
import { AiFillFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import Footer from '../../Components/Footer/Footer';

const Contact = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]:value
        })

        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
    }

    const validateForm = () => {
        const { firstName, lastName, email, message, agreement } = form
        const newErrors = {}

        if(!firstName || firstName === "") 
            newErrors.firstName = "Please enter your first name"
        if(!lastName || lastName === "") 
            newErrors.lastName = "Please enter your last name"
        if(!email || email === "") 
            newErrors.email = "Please enter your email address"
        if(!message || message === "") 
            newErrors.message = "Please enter your message"
        if(!agreement || agreement === "") 
            newErrors.agreement = "You must agree to terms"


        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if(Object.keys(formErrors).length > 0){
            setErrors(formErrors)
        }else{
            alert('Thank you, your message has been sent. You will be contacted shortly!')
            window.location.replace("/")
        }
    } 

  return (
    <>
        <Topbar/>
        <div className='container'>
            <h4 className='contactUs'>Contact Us</h4>
            <div className='d-lg-flex align-items-center justify-content-between mb-5'>
                <div className='contactBoxBig'>
                    <div className='contactDetails'>
                        <h4 className='contactDetailsHead'>Get In Touch</h4>
                        <p className='contactDetailsBody mb-3'>Got a question about using DutchRoyal Job Portal? We’re here to help!</p>
                        <Form className='form'>
                <div className='formItem d-lg-flex gap-3'>
                    <Form.Group className='formItemContainer'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            id='first_name formInputItem' 
                            required 
                            placeholder='Enter your first Name' 
                            className='mt-1' 
                            value= {form.firstName}
                            onChange={(e) => setField("firstName", e.target.value)}
                            isInvalid= {!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='formItemContainer'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            required 
                            id='last_name formInputItem' 
                            placeholder='Enter your last Name' 
                            className='mt-1'
                            value= {form.lastName}
                            onChange={(e) => setField("lastName", e.target.value)}
                            isInvalid= {!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                        </Form.Control.Feedback>
                    </Form.Group>
                </div>
                <Form.Group className='mt-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        required 
                        id='email' 
                        placeholder='yourname@email.com' 
                        className='mt-1'
                        value= {form.email}
                        onChange={(e) => setField("email", e.target.value)}
                        isInvalid= {!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                            {errors.email}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="text-area mt-4">
                    <Form.Control 
                        as="textarea"
                        id='message' 
                        required 
                        placeholder="Send us a message and we'll reply you as soon as possible..." 
                        name="Message" 
                        cols="120" 
                        rows="8" 
                        style={{maxWidth: "100%"}} 
                        value= {form.message}
                        onChange={(e) => setField("message", e.target.value)}
                        isInvalid= {!!errors.message}
                    >
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                            {errors.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className='mt-3' >
                    <Form.Check 
                        type="checkbox" 
                        id='checkbox' 
                        label="You agree to providing your data to DutchRoyal who may contact you."
                        feedback="invalid"
                        value= {form.agreement}
                        onChange={(e) => setField("agreement", e.target.checked)}
                        isInvalid= {!!errors.agreement}
                    />
                    <Form.Label for="checkbox" type="invalid"></Form.Label>
                </div>

                <div className="mt-2">
                    <button type="submit" className="btn btn-primary" id='btn__submit' onClick={handleSubmit}>Send Message</button> 
                </div>
            </Form>
                    </div>
                </div>
                <div className='contactBoxSm'>
                    <div className='contactInfo'>
                        <h4 className='contactInfoHead'>Contact Information</h4>
                        <p className='contactInfoBody'>Phone: 08033295109, 08123406001</p>
                        <p className='contactInfoBody'>Email: dutchroyalinternational@gmail.com</p>
                        <p className='contactInfoBody'>Address: Adebowale House, Block B. 2nd 
                                                                Floor, 150, Ikorodu Road, Onipanu,
                                                                Lagos
                        </p>
                        <h4 className='contactInfoWork'>Working Hours</h4>
                        <p className='contactInfoBody'>Monday - Friday 8AM - 4PM WAT</p>
                        <div className='contactIcons'>
                            <div><AiFillFacebook size={25} color="#EAEEF5" className='me-3'/></div>
                            <div><AiOutlineTwitter size={25} color="#EAEEF5" className='me-3' /></div>
                            <div><AiOutlineInstagram size={25} color="#EAEEF5"/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=150%20Ikorodu-Ososun%20Rd,%20Somolu%20102216,%20Lagos+(DutchRoyal%20Integrated%20Resources%20International)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a></iframe>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Contact