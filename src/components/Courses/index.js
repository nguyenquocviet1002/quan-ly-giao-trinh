import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './courses.scss';

function Courses() {
    return (

        <div className="courses">
            <div className="container">
                <div className="courses__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                    Giáo trình Code
                </div>

                <div className="courses__box">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình JS</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <Link to="/chi-tiet-giao-trinh">
                                    <button className="courses__btn">Xem chi tiết</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình HTML</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình CSS</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Khóa học Code</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Khóa học Code</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="courses__title">
                    <img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/agenda.png`} />
                    Giáo trình Video
                </div>

                <div className="courses__box">

                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình JS</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình HTML</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Giáo trình CSS</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Khóa học Code</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div class="courses__item">
                                <img width="800" height="500" src={`${process.env.PUBLIC_URL}/images/origin.jpg`} />
                                <p className="courses__name">Khóa học Code</p>
                                <p><img width="64" height="64" src={`${process.env.PUBLIC_URL}/images/user.png`} /> Trieu Huu Dinh</p>
                                <button className="courses__btn">Xem chi tiết</button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Courses;