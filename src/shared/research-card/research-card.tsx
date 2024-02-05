import React from 'react'
import "./research-card.sass"
import { Col, Container, Row } from 'react-bootstrap'
import HeroImg from '../../assets/HeroImg.svg';
import { useLocation } from 'react-router-dom';

const researchArticle = [
    {
        id: 1,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 2,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 3,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 4,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
];

const Researchcard = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <div>
                <section className='research-card-sec mt-lg-5 mt-3'>
                    <Container>
                        <div className='d-flex justify-content-between mb-lg-5 mb-3 align-items-center'>
                        {pathname === "/research" ?
                            <h2 className='heading-2 font-color-black'>Trending Research</h2> :
                            <h2 className='heading-2 font-color-black'>Trending News</h2>
                        }
                            <div>
                                <button className='view-button'>View All</button>
                            </div>
                        </div>
                        <Row>
                            {researchArticle && researchArticle.map((item: any, i: number) => (
                                <Col lg={3} md={6} xs={12} key={i} role="button">
                                    <div className="crypto-card">
                                        <div className="card-image">
                                            <img src={HeroImg} alt="" className='img-fluid' />
                                        </div>
                                        <div className="card-content">
                                            <div className="content-heading justify-content-between">
                                                <div>
                                                    <p className='paragraph-smaller bold-subhead'>{item.subHeading}</p>
                                                </div>
                                                <div className='d-flex'>
                                                    <button className='button-small'>Metaverse</button>
                                                    <button className='button-small ms-2'>Defi</button>
                                                </div>
                                            </div>
                                            <hr />
                                            <p className='mb-2 medium-p heading'>{item.heading}</p>
                                            <p className='paragraph-disc discription'>{item.discripation}</p>
                                            <div className="by-date">
                                                <p className='by-them paragraph-smaller'>by <span className='bold-subhead'>Russian DeFi</span></p>
                                                <p className='article-date paragraph-smaller bold-subhead'>Dec 21, 2022</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Researchcard