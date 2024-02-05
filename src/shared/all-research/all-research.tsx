import React from 'react'
import "./all-research.sass"
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import HeroImg from '../../assets/HeroImg.svg';
import Tag from '../../assets/tag-1.svg';
import Tag2 from '../../assets/tag-2.svg';
import Tag3 from '../../assets/tag-3.svg';
import Tag4 from '../../assets/tag-4.svg';
import Tag5 from '../../assets/tag-5.svg';
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
    {
        id: 5,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 6,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 7,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
    {
        id: 8,
        heading: "On-chain Perpetual Swaps Trends in 2022 and Post-FTX",
        subHeading: "The Crypto Illuminati",
        discripation: "M6 Labs is a community researchers who tell the story of crypto through  lens of natives."
    },
];
const allCategory = [
    {
        id: 1,
        image: Tag,
        tag: "DeFi"
    },
    {
        id: 2,
        image: Tag2,
        tag: "Metaverse"
    },
    {
        id: 3,
        image: Tag3,
        tag: "Market"
    },
    {
        id: 4,
        image: Tag4,
        tag: "Gaming"
    },
    {
        id: 5,
        image: Tag5,
        tag: "NFTs"
    },
];

const Allresearch = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <div>
                <section className='all-research-sec my-5 '>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='text-center'>
                                    {pathname === "/research" ?
                                        <h2 className='heading-2 font-color-black'>Browse All Research</h2> :
                                        <h2 className='heading-2 font-color-black'>Browse All News</h2>
                                    }
                                    
                                </div>
                            </Col>
                            <Tab.Container id="left-tabs-example1" defaultActiveKey="DeFi">
                                <Col lg={12}>
                                    <Nav variant="pills" className="curated-buttons justify-content-lg-center my-lg-5 my-3">

                                        {allCategory?.map((item: any, i: any) => (
                                            <Nav.Item>
                                                <Nav.Link eventKey={item.tag}><img src={item.image} className="img-fluid" alt="" /><span className='button-name all-tags'>{item?.tag}</span></Nav.Link>
                                            </Nav.Item>
                                        ))}
                                    </Nav>
                                </Col>
                                <Tab.Content >
                                    {allCategory?.map((item: any, i: any) => (
                                        <Tab.Pane key={i} eventKey={item.tag}>
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
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Tab.Container >
                            <div className='text-center'>
                                <button className='view-button'>View All</button>
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Allresearch