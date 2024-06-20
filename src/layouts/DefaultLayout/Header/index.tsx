import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import Search from '~/layouts/components/Search';
import { CartIcon, UserIcon } from '~/components/Icons';

import { EmailAccountType, ProfileType } from '~/Page/Login/LoginType';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const [logged, setLogged] = useState(false);
    const [preEmailAccount, setPreEmailAccount] = useState<EmailAccountType | null>(() => {
        const storageEmailAccounts = localStorage.getItem('preEmailAccount');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });
    const [preGooleAccount, setPreGoogleAccount] = useState<ProfileType | null>(() => {
        const storageEmailAccounts = localStorage.getItem('preGoogleAccount');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });

    const [preFacebookAccount, setPreFacebookAccount] = useState<ProfileType | null>(() => {
        const storageEmailAccounts = localStorage.getItem('preEmailAccount');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });
    const [userName, setUsername] = useState('');

    useEffect(() => {
        const storageEmailAccount = localStorage.getItem('preEmailAccount');
        const parseEmailAccount = storageEmailAccount ? JSON.parse(storageEmailAccount) : null;

        if (parseEmailAccount) {
            setLogged(true);
            setPreEmailAccount(parseEmailAccount);
            const firstName = parseEmailAccount.name.split(' ')[0];
            const trimmedName = firstName.length > 6 ? firstName.slice(0, 6) : firstName;
            setUsername(trimmedName);
        } else {
            setPreEmailAccount(null);
        }
    }, []);

    useEffect(() => {
        const storageGoogleAccount = localStorage.getItem('preGoogleAccount');
        const parseGoogleAccount = storageGoogleAccount ? JSON.parse(storageGoogleAccount) : null;

        if (parseGoogleAccount) {
            setLogged(true);
            setPreGoogleAccount(parseGoogleAccount);
            const firstName = parseGoogleAccount.given_name.split(' ')[0];
            const trimmedName = firstName.length > 6 ? firstName.slice(0, 6) : firstName;
            setUsername(trimmedName);
        } else {
            setPreGoogleAccount(null);
        }
    }, []);

    useEffect(() => {
        const storageFacebookAccount = localStorage.getItem('preFacebookAccount');
        const parseFacebookAccount = storageFacebookAccount
            ? JSON.parse(storageFacebookAccount)
            : null;

        if (parseFacebookAccount) {
            setLogged(true);
            setPreFacebookAccount(parseFacebookAccount);
            const firstName = parseFacebookAccount.name.split(' ')[0];
            const trimmedName = firstName.length > 6 ? firstName.slice(0, 6) : firstName;
            setUsername(trimmedName);
        } else {
            setPreFacebookAccount(null);
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
                        <>
                            <Link to={config.routes.profile} className={cx('action-container')}>
                                <UserIcon className={cx('user-icon')}></UserIcon>
                                <p className={cx('navbar-container')}>{userName}</p>
                            </Link>
                            <Link
                                to={config.routes.cart}
                                className={cx('action-container', 'margin-left')}
                            >
                                <CartIcon className={cx('cart-icon')}></CartIcon>
                            </Link>
                        </>
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
