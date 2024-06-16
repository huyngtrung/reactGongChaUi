import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import sliderImages from '~/assets/images/Slider';
import { LeftArrowIcon, RightArrowIcon } from '../Icons';

const cx = classNames.bind(styles);

const SlideShow = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function plusSlides(n: any) {
        setSlideIndex((prevIndex) => prevIndex + n);
    }

    function currentSlide(n: any) {
        setSlideIndex(n);
    }

    function showSlides(n: any) {
        var slides = document.getElementsByClassName(cx('mySlides'));
        var dots = document.getElementsByClassName(cx('dot'));

        if (n > slides.length) {
            setSlideIndex(1);
            n = 1;
        }

        if (n < 1) {
            setSlideIndex(slides.length);
            n = slides.length;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].setAttribute('style', 'display: none');
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }

        slides[n - 1].setAttribute('style', 'display: block');
        dots[n - 1].className += ' active';
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slideshow-container')}>
                {sliderImages.map((value, index) => {
                    return (
                        <div key={value.id} className={cx('mySlides', 'fade')}>
                            <img className={cx('image')} src={value.imgsrc} alt={value.title} />
                            <div className={cx('dots')}>
                                <span className={cx('dot')} onClick={() => currentSlide(1)}></span>
                                <span className={cx('dot')} onClick={() => currentSlide(2)}></span>
                            </div>
                        </div>
                    );
                })}

                <button className={cx('prev')} onClick={() => plusSlides(-1)}>
                    <LeftArrowIcon className={cx('arrow')}></LeftArrowIcon>
                </button>
                <button className={cx('next')} onClick={() => plusSlides(1)}>
                    <RightArrowIcon className={cx('arrow')}></RightArrowIcon>
                </button>
            </div>
        </div>
    );
};

export default SlideShow;
