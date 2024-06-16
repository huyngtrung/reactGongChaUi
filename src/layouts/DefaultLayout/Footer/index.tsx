import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import config from '~/config';
import { FaceBookIcon, InstagramIcon, LogoIcon, MailIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-container')}>
                        <LogoIcon className={cx('logo-content')}></LogoIcon>
                    </Link>
                    <p className={cx('logo-desc')}>COPYRIGHT © 2024 GONG CHA VIỆT NAM</p>
                </div>
                <div className={cx('contact')}>
                    <div className={cx('contact-container')}>
                        <h2 className={cx('contact-title')}>Giờ mở cửa</h2>
                        <p className={cx('contact-content')}>Thứ 2-6: 8h00 am - 22h00 pm</p>
                        <p className={cx('contact-content')}>Thứ 7-CN: 9h00 am - 21h00 pm</p>
                    </div>
                    <div className={cx('contact-container')}>
                        <h2 className={cx('contact-title')}>Thông tin liên hệ</h2>
                        <p className={cx('contact-content')}>1900.63.69.36</p>
                        <p className={cx('contact-content')}>0386550869</p>
                    </div>
                    <div className={cx('contact-social-container')}>
                        <Link to={config.routes.home} className={cx('contact-social')}>
                            <MailIcon className={cx('contact-icon')}></MailIcon>
                            <p>info@gongcha.com.vn</p>
                        </Link>
                        <Link to={config.routes.home} className={cx('contact-social')}>
                            <FaceBookIcon className={cx('contact-icon')}></FaceBookIcon>
                            <p>Gong Cha Vietnam</p>
                        </Link>
                        <Link to={config.routes.home} className={cx('contact-social')}>
                            <InstagramIcon className={cx('contact-icon')}></InstagramIcon>
                            <p>@gongchavietnam</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
