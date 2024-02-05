import React from 'react'
import "./twitter-blogs.sass"
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const twitterData = [
    {
        id: 1,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 2,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 3,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 4,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 5,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 6,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 7,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },
    {
        id: 8,
        title: "Momentum 06",
        user: " @_kreathor",
        discripation: "For a couple of weeks now, I've been getting up to date crypto news in the most fun way. I think everyone should subscribe to the @MilkRoadDaily to get the emails directly to your inbox"
    },

];

const Twitterblogs = () => {
    
    return (
        <div>
            <section className='twitter-sec'>
                <Container>
                    <div className='mt-lg-5 mt-md-4 mt-3'>
                        <div className='text-center'>
                            <p className='paragraph-medium news-head font-color-black twit-blog'>Twitter Blogs</p>
                            <h2 className='heading-2 font-color-black'>What we’re saying on Twitter</h2>
                        </div>
                        <div className='mt-lg-4 mt-3'>
                            <Swiper
                                pagination={{ type: "fraction" }}
                                slidesPerView={3.2}
                                spaceBetween={30}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 30 },
                                    480: { slidesPerView: 1, spaceBetween: 30 },
                                    767: { slidesPerView: 1.3, spaceBetween: 30 },
                                    1024: { slidesPerView: 2.8, spaceBetween: 30 },
                                  }}
                                
                            >
                                {twitterData && twitterData.map((item: any, i: any) => (
                                    <SwiperSlide key={i}>
                                        <div role='button' className="say-on-twitter-card" >
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className='twitter-heading'>
                                                    <h4 className='heading-4 font-color-black mb-0'>{item?.title}</h4>
                                                    <p className='medium-p font-color-black'>{item?.user}</p>
                                                </div>
                                                <div className="twitter-icon">
                                                    <i className="ri-twitter-fill"></i>
                                                </div>
                                            </div>
                                            <p className='paragraph'>{item?.discripation}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Twitterblogs