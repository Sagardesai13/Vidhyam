import React from 'react';
import '../css/bootstrap.css'
import '../css/owl.carousel.css'
import '../css/owl.theme.css'
import '../css/smoothbox.css'
import '../css/style.css'

export const ContactUs = () => {

    return (
        <>
            <div className="container py-md-4 mt-md-3">
                <div className="row inner_w3l_agile_grids-1 ">
                    <div className="col-lg-6 w3layouts_choose_left_grid1">
                        <div className="choose_top">
                            <h4 className="mb-3 mt-3 text-white">Feel Free to Contact Us</h4>
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label text-white">Message</label>
                                    <input type="text" className="form-control" id="exampleInputPassword1" />
                                </div>
                            </form>
                            <a href="/" className="btn btn-primary mt-3">Send Message</a>
                        </div>
                    </div>
                    <div className="col-lg-6 w3layouts_choose_left_grid2">
                        <div className="row">
                            <div className="col-md-6 w3l_choose_bottom1 mt-3 pt-md-4">
                                <div className="choose_bottom_top">
                                    <i className="fas fa-g mb-2"></i>
                                    <p className="card-text">Growth is a part of change and change is a constant in our world.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 w3l_choose_bottom2">
                                <div className="choose_bottom_top">
                                    <i className="fas fa-o mb-2"></i>
                                    <p className="card-text">Every day is a new opportunity.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 w3l_choose_bottom3 mt-3 pt-md-4">
                                <div className="choose_bottom_top">
                                    <i className="fas fa-a mb-2"></i>
                                    <p className="card-text">Attitude is equally as important as ability.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 w3l_choose_bottom4">
                                <div className="choose_bottom_top">
                                    <i className="fas fa-l mb-2"></i>
                                    <p className="card-text">Learning never exhausts the mind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}