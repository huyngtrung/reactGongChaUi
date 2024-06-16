import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import images from '~/assets/images';

import LoginByGoogle from '~/components/LoginByGoogle';
import LoginByFaceBook from '~/components/LoginByFacebook';

import { ShortRightArrowIcon } from '~/components/Icons';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [isHovered, setIsHovered] = useState(false);
    const [nameInput, setInputName] = useState('');
    const [emailInput, setInputEmail] = useState('');
    const [passwordInput, setInputPassword] = useState('');
    const [rePasswordInput, setInputRePassword] = useState('');
    const [registerSubmit, setRegisterSubmit] = useState<
        { id: number; name: string; email: string; password: string }[] | null
    >([]);

    useEffect(() => {
        // Load data from local storage when component mounts
        const storedData = localStorage.getItem('emailAccounts');
        if (storedData) {
            setRegisterSubmit(JSON.parse(storedData));
        }
    }, []);

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

    const handleInputEmail = (event: any) => {
        const inputValue = event.target.value;

        setInputEmail(emailInput);

        if (!inputValue.startsWith(' ')) {
            setInputEmail(inputValue);
        }
    };

    const handleInputPassword = (event: any) => {
        const inputValue = event.target.value;

        setInputPassword(passwordInput);

        if (!inputValue.startsWith(' ')) {
            setInputPassword(inputValue);
        }
    };

    const handleInputRePassword = (event: any) => {
        const inputValue = event.target.value;

        setInputRePassword(rePasswordInput);

        if (!inputValue.startsWith(' ')) {
            setInputRePassword(inputValue);
        }
    };

    const handleRegister = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (
            nameInput === '' ||
            emailInput === '' ||
            passwordInput === '' ||
            rePasswordInput === ''
        ) {
            alert('vui lòng nhập thông tin');
        } else if (passwordInput !== rePasswordInput) {
            alert('mật khẩu không đúng');
        } else if (!emailPattern.test(emailInput)) {
            alert('email không hợp lệ');
        } else {
            setRegisterSubmit((prevAccount) => {
                const existingAccounts = prevAccount || [];
                const emailExists = existingAccounts.some((acc) => {
                    return acc.email === emailInput; //boolen type.
                });

                if (emailExists) {
                    alert('Email đã tồn tại');
                    return existingAccounts;
                }

                const lastAccountId =
                    existingAccounts.length > 0
                        ? existingAccounts[existingAccounts.length - 1].id
                        : 0;

                const newAccountId = lastAccountId + 1;

                const account = {
                    id: newAccountId,
                    name: nameInput,
                    email: emailInput,
                    password: rePasswordInput,
                };

                alert('tạo tài khoản thành công');

                const emailAccounts = [...existingAccounts, account];
                localStorage.setItem('emailAccounts', JSON.stringify(emailAccounts));
                return emailAccounts;
            });
            setInputName('');
            setInputEmail('');
            setInputPassword('');
            setInputRePassword('');
            window.location.href = '/login';
        }
    };

    return (
        <div
            className={cx('wrapper')}
            style={{ backgroundImage: `url(${images.registerThumbnail})` }}
        >
            <div className={cx('inner')}>
                <form className={cx('login')}>
                    <div className={cx('login-title')}>
                        <div className={cx('title')}>Đăng kí</div>
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
                                    TÊN NGƯỜI DÙNG
                                </div>
                            </div>
                            <div className={cx('login-input-email')}>
                                <input
                                    type="text"
                                    value={emailInput}
                                    onChange={(event) => handleInputEmail(event)}
                                    className={cx(`${emailInput !== '' ? 'input-valued' : ''}`)}
                                />
                                <div
                                    className={cx(
                                        'label-line',
                                        `${emailInput !== '' ? 'line-valued' : ''}`,
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
                            <div className={cx('login-input-re-password')}>
                                <input
                                    type="text"
                                    value={rePasswordInput}
                                    onChange={(event) => handleInputRePassword(event)}
                                    className={cx(
                                        `${rePasswordInput !== '' ? 'input-valued' : ''}`,
                                    )}
                                />
                                <div
                                    className={cx(
                                        'label-line',
                                        `${rePasswordInput !== '' ? 'line-valued' : ''}`,
                                    )}
                                >
                                    NHẬP LẠI MẬT KHẨU
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
                                        nameInput !== '' &&
                                        passwordInput !== '' &&
                                        emailInput !== '' &&
                                        rePasswordInput !== ''
                                            ? 'submitted'
                                            : ''
                                    }`,
                                )}
                                onClick={handleRegister}
                            >
                                <ShortRightArrowIcon
                                    fill={
                                        isHovered
                                            ? 'white'
                                            : nameInput !== '' &&
                                              passwordInput !== '' &&
                                              emailInput !== '' &&
                                              rePasswordInput !== ''
                                            ? 'white'
                                            : 'black'
                                    }
                                    fillOpacity={
                                        isHovered
                                            ? '1'
                                            : nameInput !== '' &&
                                              passwordInput !== '' &&
                                              emailInput !== '' &&
                                              rePasswordInput !== ''
                                            ? '1'
                                            : '0.25'
                                    }
                                    className={cx('submit-icon')}
                                ></ShortRightArrowIcon>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
