import React from 'react';
import { Link } from "react-router-dom";
import { Navbar } from './Navbar';
import { ContactUs } from './ContactUs';
import { Footer } from './Footer';
import { Feedback } from './Feedback';
import '../css/bootstrap.css'
import '../css/owl.carousel.css'
import '../css/owl.theme.css'
import '../css/smoothbox.css'
import '../css/style.css'



export const Home = () => {

    return (
        <>
            <div className="banner">
                <header>
                    <Navbar />
                </header>

                <div className="container">

                    <div className="banner-text">
                        <div className="slider-info">
                            <h3>You are<span> capable </span>of more than you know</h3>
                            <Link to="/signup" className="banner-button btn mt-md-5 mt-4">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>

            <section className="banner_form py-5" id="about">
                <div className="container py-lg-3">
                    <div className="row ban_form">
                        <div className="col-lg-8 bg-white fom-left">
                            <div className="categories_sub cats1">
                                <h2 className="heading-agileinfo">Welcome To <span> Vidhyam</span></h2>
                                <p className="vam">Vidhyam will permit to take and give online examination and maintaining master information and generating various reports of test . Furthermore, the main users of project are system administrator , student and faculty.
                                    From the end user perspective VIDHYAM consist of many functional elements : enhanced member modules, managing profile modules for manage profiles,  exam modules to keep record of exams and results, assignment modules for managing assignments, viva modules . VIDHYAM provides live video interaction with user for viva session and examination session, also some restrictions are there during the online examination. </p></div>
                        </div>
                        <div className="col-lg-4 reg-fom">
                            <h4 className="text-white text-center">Important Announcement</h4>
                            <div className="reg-fom-btm mt-5">
                                <div className="fields">
                                    <span className="text-white mb-2">The candidates whose results of the qualifying exam is awaited may also register for the admission process provided their result is declared within the scheduled timeline</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-bottom-wthree py-lg-5 py-md-5 py-3">
                <div className="container">
                    <div className="inner-sec-w3ls py-lg-5 py-3">
                        <h3 className="heading-agileinfo text-center">What <span> We do</span></h3>
                        <div className="row middle-grids mt-md-5 pt-4">
                            <div className="col-lg-4 about-in-w3ls middle-grid-info text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fas fa-graduation-cap mb-2"></i>
                                        <h5 className="card-title text-uppercase my-3">
                                            Manage Your Study</h5>
                                        <p className="card-text">Vidhyam provides some features to manage your study namely Assignment submit and evaluate, etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 about-in-w3ls middle-grid-info text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fas fa-book mb-2"></i>
                                        <h5 className="card-title text-uppercase my-3">Examination</h5>
                                        <p className="card-text">Vidhyam provides excellent Examination system. In that you can give and take the Exam with some resstrictions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 about-in-w3ls middle-grid-info text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <i className="fas fa-newspaper mb-2"></i>
                                        <h5 className="card-title text-uppercase my-3">Newsletter</h5>
                                        <p className="card-text">If you have subscribed the Newsletter the we will be able to send the Newsletter regarding your field in your email everyday.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choose py-5" id="contact">
                <ContactUs />
            </section>

            <section className="banner-bottom py-lg-5 py-md-5 py-3">
                <div className="container">
                    <div className="inner-sec py-lg-5 py-3">
                        <h3 className="heading-agileinfo text-center">Our <span> Advantages</span></h3>
                        <div className="row middle-grids mt-lg-5 pt-5">
                            <div className="col-lg-6 advantage-grid-info1">
                                <div className="advantage_left1 text-center">
                                    <img src="/images/p1.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 advantage-grid-info pt-md-5">
                                <div className="advantage_left">
                                    <h3>Improve Yourself</h3>
                                    <p className="mt-2">You can manage and Improve your study very smartly using our system. We provide Newsletter in order to aware you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="news py-5">
                <Feedback />
            </section>

            <section className="stats py-5">
                <div className="container py-md-5">
                    <h3 className="heading-agileinfo text-center">Our  <span>Achievements</span></h3>
                    <span className="w3-line black"></span>
                    <div className="row inner_w3l_agile_grids-1 pt-md-5 mt-4">
                        <div className="col-lg-3 col-sm-6 w3layouts_stats_left w3_counter_grid">
                            <i className="fas fa-trophy mb-2"></i>
                            <p className="counter">2022</p>
                            <h3>Year of Foundation</h3>
                        </div>
                        <div className="col-lg-3 col-sm-6 w3layouts_stats_left w3_counter_grid1">
                            <i className="fas fa-building-columns mb-2"></i>
                            <p className="counter">765</p>
                            <h3>Colleges</h3>
                        </div>
                        <div className="col-lg-3 col-sm-6 w3layouts_stats_left w3_counter_grid2">
                            <i className="fas fa-user mb-2"></i>
                            <p className="counter">2000</p>
                            <h3>Faculties</h3>
                        </div>
                        <div className="col-lg-3 col-sm-6 w3layouts_stats_left w3_counter_grid2">
                            <i className="fas fa-users mb-2"></i>
                            <p className="counter">7000</p>
                            <h3>Students</h3>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>

    )
}
