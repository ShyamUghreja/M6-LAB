import React from 'react'
import "./research-hub.sass"
import { Button, Container } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Research1img from '../../assets/research-1.svg';


const Research = () => {
    return (
        <div>
            <section className='research-sec mt-5'>
                <Container>
                    <div className='research-news'>
                        <p className='paragraph-medium news-head'>Get started</p>
                        <h2 className='heading-2'>Research Hub</h2>
                        <div className='research-tabview mt-lg-5 mt-3'>
                            <Tabs
                                defaultActiveKey="Lend"
                                id="fill-tab-example"
                                className="mb-3"
                                fill
                            >
                                <Tab eventKey="Lend" title="Lend">
                                    <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>Lend crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                                <Tab eventKey="Borrow" title="Borrow">
                                <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>Borrow crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                                <Tab eventKey="Stake" title="Stake">
                                <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>Stake crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                                <Tab eventKey="Wallets" title="Wallets">
                                <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>Wallets crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                                <Tab eventKey="Exchanges" title="Exchanges">
                                <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>Exchanges crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                                <Tab eventKey="NFTs" title="NFTs">
                                <div className='mt-lg-5 mt-3'>
                                        <h4 className='heading-4'>NFTs crypto</h4>
                                        <p className='paragraph mb-0'>We help you find the best and safest places to earn yield on your crypto. Learn how to generate returns via both CeFi and DeFi platforms.</p>
                                        <Button className='News-subscribe my-lg-5 my-4'>Lending Guide <i className="ri-arrow-right-line"></i></Button>
                                    </div>
                                    <img className='img-fluid' src={Research1img} alt="" />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Research