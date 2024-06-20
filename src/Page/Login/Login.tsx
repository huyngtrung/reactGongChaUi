import classNames from 'classnames/bind';
import styles from './Login.module.scss';

import { ShortRightArrowIcon } from '~/components/Icons';

import images from '~/assets/images';
import { Link } from 'react-router-dom';
import config from '~/config';

import { EmailAccountType, ProfileType } from './LoginType';

import LoginByGoogle from '~/components/LoginByGoogle';

import { useState } from 'react';
import LoginByFaceBook from '~/components/LoginByFacebook';

const cx = classNames.bind(styles);

function Login() {
    const [emailAccounts, setEmailAcount] = useState<EmailAccountType[] | null>(() => {
        const storageEmailAccounts = localStorage.getItem('emailAccounts');
        return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    });
    // const [gooleAccounts, setGooleAcount] = useState<ProfileType[] | null>(() => {
    //     const storageEmailAccounts = localStorage.getItem('googleProfiles');
    //     return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    // });
    // const [facebookAccounts, setFacebookAcount] = useState<ProfileType[] | null>(() => {
    //     const storageEmailAccounts = localStorage.getItem('facebookProfiles');
    //     return storageEmailAccounts ? JSON.parse(storageEmailAccounts) : [];
    // });

    const [isHovered, setIsHovered] = useState(false);
    const [nameInput, setInputName] = useState('');
    const [passwordInput, setInputPassword] = useState('');

    // let gooleUsersAccount = storagegooleUsersAccount ? JSON.parse(storagegooleUsersAccount) : null;

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const handleInputName = (event: any) => {
        const inputValue = event.target.value;

        setInputName(nameInput);

        if (!inputValue.startsWith(' ')) {
            setInputName(inputValue);
        }
    };

    const handleInputPassword = (event: any) => {
        const inputValue = event.target.value;

        setInputPassword(passwordInput);

        if (!inputValue.startsWith(' ')) {
            setInputPassword(inputValue);
        }
    };

    const handleLogin = () => {
        if (emailAccounts && emailAccounts.length > 0) {
            for (let i = 0; i < emailAccounts.length; i++) {
                if (
                    nameInput === emailAccounts[i].email &&
                    passwordInput === emailAccounts[i].password
                ) {
                    localStorage.setItem('preEmailAccount', JSON.stringify(emailAccounts[i]));
                    alert('Đăng nhập thành công');
                    window.location.href = '/';
                    return;
                }
            }
        }
        alert('email hoặc mật khẩu không đúng');
    };

    return (
        <div className={cx('wrapper')} style={{ backgroundImage: `url(${images.loginThumbnail})` }}>
            <div className={cx('inner')}>
                <form className={cx('login')}>
                    <div className={cx('login-title')}>
                        <Link to={config.routes.home}>
                            <img src={images.logoOnly} alt="logo" />
                        </Link>
                        <div className={cx('title')}>Đăng nhập</div>
                    </div>
                    <div className={cx('login-action')}>
                        <div className={cx('login-input')}>
                            <div className={cx('login-input-name')}>
                                <input
                                    type="text"
                                    value={nameInput}
                                    onChange={(event) => handleInputName(event)}
                                    className={cx(`${nameInput !== '' ? 'input-valued' : ''}`)}
                                />
                                <div
                                    className={cx(
                                        'label-line',
                                        `${nameInput !== '' ? 'line-valued' : ''}`,
                                    )}
                                >
                                    EMAIL
                                </div>
                            </div>
                            <div className={cx('login-input-password')}>
                                <input
                                    type="text"
                                    value={passwordInput}
                                    onChange={(event) => handleInputPassword(event)}
                                    className={cx(`${passwordInput !== '' ? 'input-valued' : ''}`)}
                                />
                                <div
                                    className={cx(
                                        'label-line',
                                        `${passwordInput !== '' ? 'line-valued' : ''}`,
                                    )}
                                >
                                    MẬT KHẨU
                                </div>
                            </div>
                            <div className={cx('login-socials')}>
                                <LoginByFaceBook></LoginByFaceBook>
                                <LoginByGoogle></LoginByGoogle>
                            </div>
                            <div className={cx('login-checked')}>
                                <input type="checkbox" />
                                <p className={cx('checked-desc')}>LƯU ĐĂNG NHẬP</p>
                            </div>
                        </div>
                        <div className={cx('login-submit')}>
                            <div
                                onMouseEnter={handleHover}
                                onMouseLeave={handleHover}
                                className={cx(
                                    'submit',
                                    `${
                                        nameInput !== '' && passwordInput !== '' ? 'submitted' : ''
                                    }`,
                                )}
                                onClick={handleLogin}
                            >
                                <ShortRightArrowIcon
                                    fill={
                                        isHovered
                                            ? 'white'
                                            : nameInput !== '' && passwordInput !== ''
                                            ? 'white'
                                            : 'black'
                                    }
                                    fillOpacity={
                                        isHovered
                                            ? '1'
                                            : nameInput !== '' && passwordInput !== ''
                                            ? '1'
                                            : '0.25'
                                    }
                                    className={cx('submit-icon')}
                                ></ShortRightArrowIcon>
                            </div>
                        </div>
                        <div className={cx('login-error')}>
                            <span className={cx('error-action')}>KHÔNG THỂ ĐĂNG NHẬP ?</span>
                            <Link to={config.routes.register}>
                                <span className={cx('error-action')}>
                                    BẠN CHƯA CÓ TÀI KHOẢN ? ĐĂNG KÝ
                                </span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
