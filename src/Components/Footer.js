import React from 'react'
import '../css/bootstrap.css'
import '../css/style.css'

export const Footer = () => {
    return (
        <>
            <footer className="newsletter_right pymd-5 py-4" id="footer">
                <div className="container">
                    <div className="inner-sec py-md-5 py-3">
                        <div className="row mb-md-4 mb-md-3">
                            <div className="col-lg-3 col-md-6 social-info text-left">
                                <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Get in touch</h3>
                                <p>Vishwakarma Government Engineering College, </p>
                                <p className="my-2"> Ahmedabad City, Gujarat</p>
                                <p className="phone">phone: +91 123 456 7890</p>
                                <p className="phone">Mail:
                                    <a href="mailto:info@example.com">Vidhyam0311@gmail.com</a>
                                </p>

                            </div>
                            <div className="col-lg-3 col-md-6 social-info text-left">
                                <h3 className="tittle1 foot mb-md-5 mb-4 text-white">About Us</h3>
                                <p>Our Team members are Sagar Desai and Vaishnavi Barot. We are
                                    dedicated to providing you the very best of manage your study.</p>

                            </div>
                            <div className="col-lg-6 col-md-12 n-right tex-left">
                                <h3 className="tittle1 foot mb-md-5 mb-4 text-white">Subscribe our Newsletter</h3>
                                <form action="#" method="post">
                                    <div className="form-group d-flex">
                                        <input className="form-control" type="email" name="Email" placeholder=" Email Address" required="" />
                                        <input className="form-control submit text-uppercase" type="submit" value="Subscribe" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copyright py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="copy-right mt-2">© 2022 Subject. All Rights Reserved | Design by
                                <a href="http://w3layouts.com/"> Team Vidhyam </a>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <ul className="social-icons scial justify-content-end">
                                <li className="mr-1"><a href="#"><span className="fab fa-facebook-f"></span></a></li>
                                <li className="mx-1"><a href="#"><span className="fab fa-twitter"></span></a></li>
                                <li className="mx-1"><a href="#"><span className="fab fa-google-plus-g"></span></a></li>
                                <li className="mx-1"><a href="#"><span className="fab fa-linkedin-in"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

