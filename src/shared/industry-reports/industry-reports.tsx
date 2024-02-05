import React from 'react'
import "./industry-reports.sass"
import { Col, Container, Row } from 'react-bootstrap'
import Report from '../../assets/report-img.svg';

const reportData = [
    {
        id: 1,
        image: Report
    },
    {
        id: 2,
        image: Report
    },
    {
        id: 3,
        image: Report
    },
]

const Industryreports = () => {
    return (
        <>
            <div>
                <section className='industry-reports-sec mt-lg-5 mt-3'>
                    <Container>
                        <div className='report-bg'>
                            <Row>
                                <Col lg={12}>
                                    <div className='text-center'>
                                        <h2 className='heading-2 color-white'>Industry Reports</h2>
                                    </div>
                                </Col>
                                {reportData && reportData.map((item: any, i: number) => (
                                    <Col lg={4}>
                                        <div className='reportImg mt-lg-5 mt-3'>
                                            <img className='img-fluid' src={Report} alt="" />

                                        </div>
                                        <div className='text-center'>
                                            <button className='downloadbtn mt-lg-4 mt-3'><i className="ri-download-cloud-2-line me-2"></i>Download</button>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Industryreports