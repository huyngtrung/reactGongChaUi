import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';

const cx = classNames.bind(styles);

type Props = {
    children: any;
    imgSrc?: any;
    title?: string;
    desc?: string;
    logged?: any;
    handleLogout?: any;
};

function DefaultLayout(props: Props) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <div className={cx('content')}>{props.children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DefaultLayout;
