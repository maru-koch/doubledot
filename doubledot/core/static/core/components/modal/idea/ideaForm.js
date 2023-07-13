import React, { useState } from "react"
import './ideaForm.css'

const INITIAL_DATA = {
    first_name:'', 
    last_name:'', 
    email:'', 
    phone_number:'', 
    company:'', 
    subject:'', 
    message:''}

export const IdeaForm=({handleSubmit})=>{
    
    const [formData, setFormData] = useState(INITIAL_DATA)

    const onChangeHandler=(e)=>{
        formData[e.target.name] = e.target.value
        setFormData(formData)
    }

    const onSubmitHandler=(e)=>{
        e.preventDefault()
        handleSubmit(formData)
    }

    return (
            <form onSubmit={onSubmitHandler}>
                <div className="form-container">
                    <div className="form-input-container">
                        <div className="form-input-wrapper">
                            <div className="form-input">
                                <label className="label" htmlFor="first-name">First Name</label>
                                <input className="input" required type="text" name="first_name" placeholder="Enter your real Name" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-input">
                                <label className="label" htmlFor="phone-number">Phone Number</label>
                                <input className="input" required type="tel" name="phone_number" placeholder="Enter your telephone number" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-input">
                                <label className="label" htmlFor="email">Email Address</label>
                                <input className="input" required type="email" name="email" placeholder="Enter your valid e-mail" onChange={onChangeHandler}/>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className="form-input">
                                <label className="label" htmlFor="last-name">Last Name</label>
                                <input className="input" required type="text" name="last_name" placeholder="Enter your last Name" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-input">
                                <label className="label" htmlFor="company">Company</label>
                                <input className="input" required type="text" name="company" placeholder="Enter your Company" onChange={onChangeHandler}/>
                            </div>
                            <div className="form-input">
                                <label className="label" htmlFor="subject">Subject</label>
                                <input className="input" required type="text" name="subject" placeholder="Enter your Subject" onChange={onChangeHandler}/>
                            </div>
                        </div>

                    </div>
                    
                    <div className="form-input-wrapper textarea" id="message">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea className="form-textarea" rows="5" name="message" placeholder="Enter your Message" onChange={onChangeHandler}>
                        </textarea>
                    </div>

                    <div className="form-input-wrapper confirmation">
                        <div className="form-check">
                            <input type='checkbox' name="on_disclosurable_agreement" onChange={onChangeHandler}/>
                            <p>Please send me a Non-Disclosurable agreement for a confidential Consultation</p>
                        </div>
                        <div className="form-btn-holder">
                            <button className="btn">Confirm</button>
                        </div>
                    </div>
                </div>
                
            </form>
    )
}