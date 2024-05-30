import React from 'react';
import './HeadFoot.css';
import logo from './react.png';
import { Link, Outlet } from 'react-router-dom';

const HeadFootCode = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
                <div className="container">
                    <img src={logo} className='logo' alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item mx-4">
                                <div class="dropdown">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown">
                                        UseState
                                    </button>
                                    <ul class="dropdown-menu">
                                        <Link className="nav-link text-secondary" to="/" >HOME</Link>
                                        <Link className="nav-link text-secondary" to="/card" >CARD</Link>
                                        <Link className="nav-link text-secondary" to="/qr" >QR</Link>
                                        <Link className="nav-link text-secondary" to="/count" >COUNT</Link>
                                        <Link className="nav-link text-secondary" to="/api" >API</Link>
                                        <Link className="nav-link text-secondary" to="/bmi" >BMI</Link>
                                        <Link className="nav-link text-secondary" to="/currency" >CURRENCY</Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-4">
                                <div class="dropdown">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown">
                                        UseEffect
                                    </button>
                                    <ul class="dropdown-menu">
                                        <Link className="nav-link text-secondary" to="/useeff1" >test1</Link>
                                        <Link className="nav-link text-secondary" to="/useeff2" >test2</Link>
                                        <Link className="nav-link text-secondary" to="/clock" >CLOCK</Link>
                                        <Link className="nav-link text-secondary" to="/password" >PASSWORD</Link>
                                        <Link className="nav-link text-secondary" to="/calender" >CALENDER</Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-4">
                                <div class="dropdown">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown">
                                        UseReducer
                                    </button>
                                    <ul class="dropdown-menu">
                                        <Link className="nav-link text-secondary" to="/usered1" >test1</Link>
                                        <Link className="nav-link text-secondary" to="/usered2" >test2</Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-4">
                                <div class="dropdown">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown">
                                        UseRef
                                    </button>
                                    <ul class="dropdown-menu">
                                        <Link className="nav-link text-secondary" to="/useref1" >test1</Link>
                                        <Link className="nav-link text-secondary" to="/useref2" >test2</Link>
                                        <Link className="nav-link text-secondary" to="/testing" >Testing</Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item mx-4">
                                <div class="dropdown">
                                    <button type="button" className="btn btn-outline-warning dropdown-toggle" data-bs-toggle="dropdown">
                                        Custom Hooks
                                    </button>
                                    <ul class="dropdown-menu">
                                        <Link className="nav-link text-secondary" to="/customhook1" >test1</Link>
                                        <Link className="nav-link text-secondary" to="/customhook2" >test2</Link>
                                        <Link className="nav-link text-secondary" to="/customhook3" >test3</Link>
                                        <Link className="nav-link text-secondary" to="/callback" >Callback</Link>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="Search" />
                            <button className="btn btn-primary"  type="button">Search</button>
                        </form>
                    </div>
                </div>
            </nav>



            <Outlet />



            <div className="text-white text-center text-lg-start bg-dark mt-5">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About company</h5>
                            <p>
                                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti.
                            </p>
                            <p>
                                Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                molestias.
                            </p>
                            <div className="mt-4">
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-dribbble"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-twitter"></i></a>
                                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                            <div className="form-outline form-white mb-4">
                                <input type="text" id="formControlLg" className="form-control form-control-lg" />
                                <label className="form-label" htmlFor="formControlLg">Search</label>
                            </div>
                            <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-home"></i></span><span className="ms-2">Warsaw, 00-967, Poland</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">contact@example.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span className="ms-2">+ 48 234 567 88</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>
                            <table className="table text-center text-white">
                                <tbody className="fw-normal">
                                    <tr>
                                        <td>Mon - Thu:</td>
                                        <td>8am - 9pm</td>
                                    </tr>
                                    <tr>
                                        <td>Fri - Sat:</td>
                                        <td>8am - 1am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>9am - 10pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </div>
        </>
    );
};

const HeadFoot = () => {
    return (
        <>
            <HeadFootCode />
        </>
    );
};

export default HeadFoot;