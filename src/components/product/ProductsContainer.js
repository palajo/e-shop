import React, { useRef } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.min.js'
import 'slick-carousel/slick/slick.css'

import ProductBlock from './ProductBlock'

export default function ProductsContainer() {

    const sliderRef = useRef();

    const sliderSettings = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                } 
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    }

    const nextSlide = () => {
        sliderRef.current.slickNext();
    }

    return (
        <section className="products-container">
            <div className="products-container-header">
                <div className="products-container-title">
                    <div className="icon processor"></div>
                    Popular products
                </div>
                <div className="products-container-slider-arrows">
                    <div className="arrow">
                        <div className="icon slider-arrow-left" onClick={prevSlide}></div>
                    </div>
                    <div className="arrow">
                        <div className="icon slider-arrow-right" onClick={nextSlide}></div>
                    </div>
                </div>
            </div>
            <div className="products-container-body">
                <Slider {...sliderSettings} ref={sliderRef}>
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                    <ProductBlock />
                </Slider>
            </div>
        </section>
    )
}
