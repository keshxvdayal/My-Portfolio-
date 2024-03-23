// import axios from 'axios'
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react'
import { FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap } from 'react-icons/fa'
import shapeOne from '../../assets/shape-1.png'
import './contact.css'
import "https://web3forms.com/client/script.js"
const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ud0u6a7', 'template_i7vauga', form.current, 'fLYLwy4PzgKnFSd7W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
                alert("message sent");
            });
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contact Me</h2>
            <p className="section__subtitle">
                Let's <span>Talk About Ideas</span>
            </p>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegMap />
                        </span>

                        <h3 className="contact__card-title">Address</h3>
                        <p className="contact__card-data">New Delhi, India</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegUser />
                        </span>

                        <h3 className="contact__card-title">Freelance</h3>
                        <p className="contact__card-data">Available Right Now</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegEnvelope />
                        </span>

                        <h3 className="contact__card-title">Email</h3>
                        <p className="contact__card-data">keshavdayal205@gmail.com</p>
                    </div>

                    <div className="contact__card">
                        <span className="contact__card-icon">
                            <FaRegAddressBook />
                        </span>

                        <h3 className="contact__card-title">Phone</h3>
                        <p className="contact__card-data">+91-9958402122</p>
                    </div>
                </div>

                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-group grid">

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your full Name <b>*</b>
                            </label>
                            <input
                               type="text" name="user_name"
                               className="contact__form-input"
                            />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag text-cs">
                                Your Email Address <b>*</b>
                            </label>
                            <input
                                type="email" name="user_email"
                                className="contact__form-input"
                            />
                        </div>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag text-cs">
                            Your Subject <b>*</b>
                        </label>
                        <input
                            type="text"
                            name="message"
                            className="contact__form-input"
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag text-cs">
                            Your Message <b>*</b>
                        </label>
                        <textarea
                            name="message"
                           className='contact__form-input'
                        ></textarea>
                    </div>

                    <div className="contact__submit">
                        <p>* Accept the terms and conditions.</p>
                        <button type="submit" value="Send" className='btn text-cs'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className="section__deco deco__left">
                <img src={shapeOne} alt="" className='shape' />
            </div>

            <div className="section__bg-wrapper">
                <span className="bg__title">Contact Me</span>
            </div>
        </section>
    )
}

export default Contact