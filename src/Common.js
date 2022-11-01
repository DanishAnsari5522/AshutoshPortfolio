import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'
import ashu from './assets/ashu.png'
import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import java from './assets/java.png'
import oracle from './assets/oracle.png'
import Footer from './Footer'

function Common(props) {
    return (
        <div>
            <scetion id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-7 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        {/* <h1>{props.name}<strong className="brand-name">Danish</strong></h1> */}
                                        <p>Hii, i'm <span className='name'>Ashutosh Tiwari</span> </p>
                                        <h1>Web Developer</h1>
                                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                                        {/* <h2 className="my-10">We are the team of talented developer making website</h2> */}
                                        <button className='btn-get-started'>Contact me via Email</button>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-2 order-lg-2 header-image">
                                    <img src={ashu} className="img-fluid animated" />

                                </div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto">
                            <p className='skill'>Skills & Tools</p>
                            <p className='development'>Development</p>
                            <div className="row">
                                <div className="col-md-6 pt-1 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        <p className='tools'>Tools</p>
                                        <img src={html} className='toolsimg' />
                                        <img src={css} className='toolsimg' />
                                        <img src={js} className='toolsimg' />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <span>
                                        <p className='work'>Work</p>
                                        <span className='worklist'>
                                            <p className='fontend'>Front End</p> <p className='fontend'>Back End</p>
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <p className='development pt-3'>Programming Language</p>
                            <div className="row">
                                <div className="col-md-6 pt-1 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="p-absolute ml-0">
                                        <p className='tools'>Tools</p>
                                        <img src={java} className='toolsimg1' />
                                        <img src={oracle} className='toolsimg1' />
                                    </div>
                                </div>
                                <div className="col-lg-6 order-2 order-lg-2">
                                    <span>
                                        <p className='work'>Work</p>
                                        <span className='worklist'>
                                       <p className='fontend'>Java JRUD with Oracle</p>
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </scetion>
            <Footer />
        </div>
    )
}

export default Common