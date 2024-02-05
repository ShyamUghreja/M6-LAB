import React from 'react'
import "./ecosystem.sass"
import { Col, Container, Row } from 'react-bootstrap'
import EcosystemLogo from '../../assets/eco-logo.svg';
import EcosystemLogo1 from '../../assets/eco-logo2.svg';
import EcosystemLogo2 from '../../assets/eco-logo3.svg';
import { useLocation } from 'react-router-dom';

const latestArticles = [
    {
        id: 1,
        image: EcosystemLogo
    },
    {
        id: 2,
        image: EcosystemLogo1
    },
    {
        id: 3,
        image: EcosystemLogo2
    },
    {
        id: 4,
        image: EcosystemLogo1
    },
    {
        id: 5,
        image: EcosystemLogo2
    },
    {
        id: 6,
        image: EcosystemLogo
    },
    {
        id: 7,
        image: EcosystemLogo1
    },
    {
        id: 8,
        image: EcosystemLogo2
    },
    {
        id: 9,
        image: EcosystemLogo1
    },
    {
        id: 10,
        image: EcosystemLogo2
    },
];

const Ecosystem = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <>
            <div>
                <section className='ecosystem-sec mt-5'>
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className='text-center'>
                                    {pathname === "/research" ?
                                        <h2 className='heading-2 font-color-black'>Research by Ecosystem</h2> :
                                        <h2 className='heading-2 font-color-black'>News by Ecosystem</h2>
                                    }
                                    
                                </div>
                            </Col>
                            <div className="Resources-all-card mt-lg-5 mt-3">
                                {latestArticles && latestArticles.map((item: any, i: any) => (
                                    <div className="crypto-card" role="button">
                                        <div className="card-image">
                                            <img src={item.image} alt="" className='img-fluid' />
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Ecosystem