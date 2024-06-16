import classNames from 'classnames/bind';
import styles from './PageHeading.module.scss';

import { Fragment } from 'react/jsx-runtime';

import Header from '../Header';
import Footer from '../Footer';
import { HalfUnderPlayIcon, HalfUpperPlayIcon, HomeIcon } from '~/components/Icons';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

interface PageHeadingProps {
    children: any;
    imgSrc?: any;
    title?: string;
    desc?: string;
}

function PageHeading(props: PageHeadingProps) {
    return (
        <Fragment>
            <Header></Header>

            <div className={cx('inner')}>
                <div className={cx('pageheading-container')}>
                    <img className={cx('pageheading-img')} src={props.imgSrc} alt="PageHeading" />
                    <div className={cx('pageheading-content')}>
                        <h2 className={cx('pageheading-title')}>{props.title}</h2>
                        <p className={cx('pageheading-desc')}>{props.desc}</p>
                    </div>
                    <div className={cx('breadcrumb')}>
                        <Link to={config.routes.home}>
                            <div className={cx('breadcrumb-home-icon')}>
                                <HomeIcon></HomeIcon>
                            </div>
                        </Link>
                        <div className={cx('breadcrumb-play-icon')}>
                            <div className={cx('playicon')}>
                                <HalfUpperPlayIcon></HalfUpperPlayIcon>
                                <HalfUnderPlayIcon></HalfUnderPlayIcon>
                            </div>
                        </div>
                        <div className={cx('breadcrumb-title')}>{props.title}</div>
                    </div>
                </div>

                <div className={cx('content')}>{props.children}</div>
            </div>

            <Footer></Footer>
        </Fragment>
    );
}

export default PageHeading;
