import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import Search from '~/layouts/components/Search';
import { UserIcon } from '~/components/Icons';

import { EmailAccountType, ProfileType } from '~/Page/Login/LoginType';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const [logged, setLogged] = useState(false);
    const [preEmailAccounts, setPreEmailAccounts] = useState<EmailAccountType | null>(() => {
        const storageEmailAccounts = localStorage.getItem('preEmailAccount');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });
    const [preGooleAccounts, setPreGoogleAccounts] = useState<ProfileType | null>(() => {
        const storageEmailAccounts = localStorage.getItem('preGoogleAccount');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });

    // const [preFacebookAccounts, setPreFacebookAccounts] = useState<ProfileType | null>(() => {
    //     const storageEmailAccounts = localStorage.getItem('preEmailAccount');
    //     return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    // });
    const [userName, setUsername] = useState('');
    const storageEmailAccounts = localStorage.getItem('preEmailAccount');
    const parseEmailAccounts = storageEmailAccounts ? JSON.parse(storageEmailAccounts) : null;
    console.log(preGooleAccounts);

    useEffect(() => {
        const storageEmailAccounts = localStorage.getItem('preEmailAccount');
        const parseEmailAccounts = storageEmailAccounts ? JSON.parse(storageEmailAccounts) : null;

        if (parseEmailAccounts) {
            setLogged(true);
            setPreEmailAccounts(parseEmailAccounts);
            setUsername(parseEmailAccounts.name);
        } else {
            setLogged(false);
            setPreEmailAccounts(null);
        }
    }, []);

    useEffect(() => {
        const storageGoogleAccounts = localStorage.getItem('preGoogleAccount');
        const parseGoogleAccounts = storageGoogleAccounts
            ? JSON.parse(storageGoogleAccounts)
            : null;

        if (parseGoogleAccounts) {
            setLogged(true);
            setPreGoogleAccounts(parseGoogleAccounts);
            setUsername(parseGoogleAccounts.given_name);
        } else {
            setLogged(false);
            setPreGoogleAccounts(null);
        }
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-container')}>
                        <img className={cx('logo-content')} src={images.logo} alt="GongCha" />
                    </Link>
                </div>
                <div className={cx('navbar')}>
                    <div className={cx('navbar-item')}>
                        <Link to={config.routes.home} className={cx('navbar-container')}>
                            <p className={cx('navbar-content')}>TRANG CHỦ</p>
                        </Link>
                    </div>
                    <div className={cx('navbar-item')}>
                        <Link to={config.routes.about} className={cx('navbar-container')}>
                            <p className={cx('navbar-content')}>GIỚI THIỆU</p>
                        </Link>
                    </div>
                    <div className={cx('navbar-item')}>
                        <Link to={config.routes.product} className={cx('navbar-container')}>
                            <p className={cx('navbar-content')}>THỰC ĐƠN</p>
                        </Link>
                    </div>
                    <div className={cx('navbar-item')}>
                        <Link to={config.routes.connect} className={cx('navbar-container')}>
                            <p className={cx('navbar-content')}>LIÊN HỆ</p>
                        </Link>
                    </div>
                    <div className={cx('navbar-item')}>
                        <div className={cx('navbar-container')}>
                            <Search></Search>
                        </div>
                    </div>
                </div>
                <div className={cx('action')}>
                    {logged ? (
                        <Link to={config.routes.profile} className={cx('action-container')}>
                            <UserIcon className={cx('user-icon')}></UserIcon>
                            <p className={cx('navbar-container')}>{userName}</p>
                        </Link>
                    ) : (
                        <Link to={config.routes.login} className={cx('action-container')}>
                            <p className={cx('navbar-container')}>ĐĂNG NHẬP</p>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
