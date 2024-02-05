import React from 'react'
import "./latest-project.sass"
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

const latestArticles = [
    {
        id: 1,
        heading: "On-chain Perpetual Swaps Trends in 2022",
        // subHeading: "The Crypto Illuminati",
        // discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 2,
        heading: "On-chain Perpetual Swaps Trends in 2022",

    },
    {
        id: 3,
        heading: "On-chain Perpetual Swaps Trends in 2022",

    },
];

const Latestproject = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <div>
                <section className='latest-project-sec mt-5'>
                    <Container>
                        <div className='latest-project-bg'>
                            <div className='d-flex justify-content-between mb-lg-5 mb-3 align-items-center'>
                                {pathname === "/research" ?
                                    <h2 className='heading-2 font-color-white'>Latest Project Overviews</h2> :
                                    <h2 className='heading-2 color-white'>Latest Daily Bullets</h2>
                                }
                                
                                <div>
                                    <button className='view-button-white'>View All</button>
                                </div>
                            </div>
                            <Row>
                                <Col lg={4}>
                                    {latestArticles && latestArticles?.map((item: any, i: any) => (
                                        <div className="latest-card latest-card-bg mb-4" key={i} role="button">
                                            <div className="d-flex justify-content-between">
                                                <div className='d-flex'>
                                                    <button className='button-small-white me-1'>Metaverse</button>
                                                </div>
                                            </div>
                                            <h6 className='heading-6 color-white'>{item.heading}</h6>
                                            <div className="d-flex by-date align-items-center mt-3">
                                                <p className='by-them paragraph-smaller'>by <span className='bold-subhead'>Russian DeFi</span></p>
                                                <div className='mx-3'>|</div>
                                                <p className='article-date paragraph-smaller bold-subhead'>Dec 21, 2022</p>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={4}>
                                    {latestArticles && latestArticles?.map((item: any, i: any) => (
                                        <div className="latest-card latest-bg mb-4" key={i} role="button">
                                            <div className="d-flex justify-content-between">
                                                <div className='d-flex'>
                                                    <button className='button-small-white me-1'>Metaverse</button>
                                                </div>
                                            </div>
                                            <h6 className='heading-6 color-white'>{item.heading}</h6>
                                            <div className="d-flex by-date align-items-center mt-3">
                                                <p className='by-them paragraph-smaller'>by <span className='bold-subhead'>Russian DeFi</span></p>
                                                <div className='mx-3'>|</div>
                                                <p className='article-date paragraph-smaller bold-subhead'>Dec 21, 2022</p>
                                            </div>
                                        </div>
                                    ))}
                                </Col>
                                <Col lg={4}>
                                    {latestArticles && latestArticles?.map((item: any, i: any) => (
                                        <div className="latest-card latest-bg mb-4" key={i} role="button">
                                            <div className="d-flex justify-content-between">
                                                <div className='d-flex'>
                                                    <button className='button-small-white me-1'>Metaverse</button>
                                                </div>
                                            </div>
                                            <h6 className='heading-6 color-white'>{item.heading}</h6>
                                            <div className="d-flex by-date align-items-center mt-3">
                                                <p className='by-them paragraph-smaller'>by <span className='bold-subhead'>Russian DeFi</span></p>
                                                <div className='mx-3'>|</div>
                                                <p className='article-date paragraph-smaller bold-subhead'>Dec 21, 2022</p>
                                            </div>
                                        </div>
                                    ))}
                                </Col>

                            </Row>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Latestproject