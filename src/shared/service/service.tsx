import React from 'react'
import "./service.sass"
import { Button, Col, Container, Row } from 'react-bootstrap'

const Service = () => {
    return (
        <div>
            <section className='service-sec mt-lg-5 mt-3'>
                <Container>
                    <div className='service-news text-center'>
                        <h4 className='heading-4 news-head'>Research as a Service</h4>
                        <h2 className='heading-2'>Need an outsourced research team?</h2>
                        <Row>
                            <Col lg={6}>
                                <div className='footer-card-1 mt-5'>
                                    <p className='medium-p'>Investing in the crypto space requires constantly staying updated with the latest news and narratives. With the busy schedule and inbox of an investor, this can prove difficult to do. That’s where M6 Labs comes in…</p>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='footer-card-1 mt-lg-5 mt-3'>
                                    <p className='medium-p'>Contact us about our bespoke research services for investment firms (VCs, family offices, PE, TradFi)</p>
                                    <Button className='service-btn'>Contact with our reseach team</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Service