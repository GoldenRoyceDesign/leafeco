import React from 'react'
import srinidhi from '../assets/about/Srinidhi.png'
import leader from '../assets/about/leader.png'

const About = () => {
    return (
        <>
            <section className='about d-flex align-items-center p-5'>
                <div className='p-md-5'>
                    <h1 className='mb-4'>LeafEco - Sustainable, <br></br>
                        Stylish, and Earth-Friendly</h1>
                    <p className='fs-5'>Our team is dedicated to empower you with the best-in-class <br></br>
                        products and tools to make their stock market journey easier and
                        profitable.</p>
                </div>
            </section>

            <section className='about-section d-flex align-items-center p-5'>
                <div className='text-white d-flex flex-column gap-3 p-md-5'>
                    <h1>About LeafEco</h1>
                    <p className='fs-5'>LeafEco culture <span style={{ color: '#71E1BE' }}> is steeped in fostering trust, inclusion, support, recognition and <br></br>
                        genuine care that enables</span> Flipsters to create, innovate, and
                        bring their best selves to work</p>
                    <button className='btn'>ORDER NOW</button>
                </div>
            </section>

            <section className='leader text-center p-5'>
                <p>OUR LEADERSHIP</p>
                <h1>Meet the People Behind <br></br>
                    LeafEco</h1>

                <div className='container mt-4'>
                    <div className='leader-section d-flex justify-content-evenly align-items-center'>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={srinidhi} alt='leader-image' className='img-fluid w-75 mb-4' />
                            <h5>Srinidhi VJ</h5>
                            <p className='text-muted'>Co-founder & CEO</p>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <img src={leader} alt='leader-image' className='img-fluid w-75 mb-4' />
                            <h5>Velusamy C</h5>
                            <p className='text-muted'>Founder</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About