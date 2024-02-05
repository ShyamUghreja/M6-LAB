import React from 'react'
import "./article.sass"
import { Container } from 'react-bootstrap'
import Arrow from '../../assets/Arrow.svg';
import Kadeem from '../../assets/kadeem.svg';

const Article = () => {
    return (
        <>
            <div>
                <section className='article-hero-sec'>
                    <div role='button' className='backIcon me-3'><img src={Arrow} alt="" /></div>
                    <Container>
                        <div className=''>
                            <div>
                                <h2 className='heading-2 font-color-black'>😤 🗣 Has China Declared a Cold <br /> War Against the US?</h2>
                                <p className='paragraph-small mt-2'>Unpopular Opinion: Western Media Is Ignoring China's Declaration <br /> of Cold War</p>
                                <div className='author d-flex justify-content-between mt-4'>
                                    <div className='d-flex align-items-center'>
                                        <div className='me-3'>
                                            <img src={Kadeem} alt="" />
                                        </div>
                                        <div>
                                            <p className='paragraph-small fw-700'>Kadeem Clarke</p>
                                            <p className='author-date'>Dec 21, 2022</p>
                                        </div>
                                    </div>
                                    <div className='social-icon'>
                                        <i className="ri-facebook-fill me-2"></i>
                                        <i className="ri-twitter-fill me-2"></i>
                                        <i className="ri-linkedin-fill"></i>
                                    </div>
                                </div>
                                <p className='paragraph-small mt-3'>Have you seen the report released by China's Ministry of Foreign Affairs titled <span className='fw-700'> "US Hegemony and its Perils"?</span></p>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='mt-5'>
                    <Container>
                        <div className='dr-sec'>
                            <h2 className='heading-2'>🧠 TL;DR</h2>
                            <div className='text-1 mt-4'>
                                <p className='paragraph-small color-white'>The United States has developed a hegemonic playbook to stage "color revolutions," instigate regional disputes, and even directly launch wars under the guise of promoting democracy, freedom and human rights. Clinging to the Cold War mentality, the United States has ramped up bloc politics and stoked conflict and confrontation. China's Ministry of Foreign Affairs</p>
                            </div>
                            <div className='text-1 mt-4'>
                                <ul className='color-white'>
                                    <li>
                                        <p className='paragraph-small text-2 mb-2'>The US has been accused of interfering in other countries’ internal affairs, pursuing and abusing hegemony, subverting and infiltrating, and waging wars.</p>
                                    </li>
                                    <li>
                                        <p className='paragraph-small text-2 mb-2'>The BRICS countries are looking to challenge the dollar's power by creating a reserve currency that's made up of several different currencies.</p>
                                    </li>
                                    <li>
                                        <p className='paragraph-small text-2 mb-2'>Investing in gold might be a good idea since it's never disappeared or been devalued.</p>
                                    </li>
                                    <li>
                                        <p className='paragraph-small text-2 mb-2'>Creating a BRICS currency that all parties agree on will be extremely challenging and could result in heightened dependence on China.</p>
                                    </li>
                                    <li>
                                        <p className='paragraph-small text-2'>Bitcoin's market cap just isn't big enough to handle a whole country's demand.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </section>
                <section className='target-sec my-5'>
                    <Container>
                        <div>
                            <h2 className='heading-2 font-color-black'>🎯 The US Has a Target On Its Back</h2>
                            <div></div>
                        </div>
                    </Container>
                </section>
            </div>
        </>
    )
}

export default Article