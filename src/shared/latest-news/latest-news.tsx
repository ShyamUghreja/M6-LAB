import React from 'react'
import "./latest-news.sass"
import { Col, Container, Row, Button } from 'react-bootstrap';

const Latestnews = () => {
    return (
        <div>
            <section className='latest-news-sec mt-5'>
                <Container>
                    <div className='latest-news'>
                        <Row>
                            <Col lg={5}>
                                <div className='mb-lg-0 mb-md-4 mb-5'>
                                    <p className='paragraph-medium news-head'>Fresh Milk</p>
                                    <h2 className='heading-2'>Latest <br /> Crypto News</h2>
                                    <Button className='News-subscribe mt-md-3 mt-lg-5'>See All news <i className="ri-arrow-right-line"></i></Button>
                                </div>
                            </Col>
                            <Col lg={7}>
                                <div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='news-content'>
                                            <h4 className="heading-4 mb-0">4 members to keep your eyes on</h4>
                                            <p className='paragraph-medium mt-1'>March 14, 2023</p>
                                        </div>
                                        <div className='news-btn'>
                                            <i className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <hr className='my-md-3 my-lg-5 ' style={{ color: "#FFFFFF80" }} />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='news-content'>
                                            <h4 className="heading-4">4 members to keep your eyes on</h4>
                                            <p className='paragraph-medium mt-2'>March 14, 2023</p>
                                        </div>
                                        <div className='news-btn'>
                                            <i className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <hr className='my-md-3 my-lg-5' style={{ color: "#FFFFFF80" }} />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='news-content'>
                                            <h4 className="heading-4">4 members to keep your eyes on</h4>
                                            <p className='paragraph-medium mt-2'>March 14, 2023</p>
                                        </div>
                                        <div className='news-btn'>
                                            <i className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <hr className='my-md-3 my-lg-5' style={{ color: "#FFFFFF80" }} />
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='news-content'>
                                            <h4 className="heading-4">4 members to keep your eyes on</h4>
                                            <p className='paragraph-medium mt-2'>March 14, 2023</p>
                                        </div>
                                        <div className='news-btn'>
                                            <i className="ri-arrow-right-line"></i>
                                        </div>
                                    </div>
                                    <hr className='my-md-3 my-lg-5' style={{ color: "#FFFFFF80" }} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Latestnews