import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import SlideShow from '~/components/SlideShow';
import { AdImages1, AdImages2 } from '~/assets/images/Ads';
import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';
import { PlayIcon } from '~/components/Icons';
import GoUpBtn from '~/components/GoUpBtn/GoUpBtn';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <SlideShow></SlideShow>

                <div className={cx('advertise')}>
                    {AdImages1.map((value, index) => {
                        return (
                            <div key={value.id}>
                                <img
                                    className={cx('advertise-img')}
                                    src={value.imgsrc}
                                    alt={value.title}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className={cx('advertise')}>
                    {AdImages2.map((value, index) => {
                        return (
                            <div key={value.id}>
                                <img
                                    className={cx('advertise-img')}
                                    src={value.imgsrc}
                                    alt={value.title}
                                />
                            </div>
                        );
                    })}
                </div>

                <div className={cx('more')}>
                    <div className={cx('more-content')}>
                        <h1 className={cx('more-title')}>Tinh túy từ lá trà tươi hảo hạng</h1>
                        <div className={cx('more-btn-container')}>
                            <Link to={config.routes.product}>
                                <button className={cx('more-btn')}>TÌM HIỂU THÊM</button>
                            </Link>
                        </div>
                    </div>
                    <img className={cx('more-img')} src={images.more} alt="more" />
                </div>

                <div className={cx('custom')}>
                    <div className={cx('custom-title')}>
                        <h2 className={cx('title')}>CÁCH THỨC ĐẶT HÀNG</h2>
                    </div>
                    <div className={cx('custom-items')}>
                        <div className={cx('custom-item')}>
                            <img src={images.step1} alt="step1" />
                            <div className={cx('des-container')}>
                                <p className={cx('des')}>Gọi</p>
                                <p>1900.63.69</p>
                            </div>
                        </div>
                        <div className={cx('custom-icon')}>
                            <PlayIcon></PlayIcon>
                            <PlayIcon></PlayIcon>
                        </div>
                        <div className={cx('custom-item')}>
                            <img src={images.step2} alt="step2" />
                            <p className={cx('des')}>Tạo đơn hàng</p>
                        </div>
                        <div className={cx('custom-icon')}>
                            <PlayIcon></PlayIcon>
                            <PlayIcon></PlayIcon>
                        </div>
                        <div className={cx('custom-item')}>
                            <img src={images.step3} alt="step3" />
                            <p className={cx('des')}>Chờ giao hàng</p>
                        </div>
                        <div className={cx('custom-icon')}>
                            <PlayIcon></PlayIcon>
                            <PlayIcon></PlayIcon>
                        </div>
                        <div className={cx('custom-item')}>
                            <img src={images.step4} alt="step4" />
                            <p className={cx('des')}>Thanh toán</p>
                        </div>
                    </div>
                </div>
            </div>
            <GoUpBtn></GoUpBtn>
        </div>
    );
}

export default Home;
