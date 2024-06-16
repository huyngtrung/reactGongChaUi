import classNames from 'classnames/bind';
import styles from './LoginByGoogle.module.scss';

import { GooleIcon } from '../Icons';

import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

import { ProfileType } from '~/Page/Login/LoginType';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function LoginByGoogle() {
    const [user, setUser] = useState<{ access_token: any } | null>(null);
    const [googleAccounts, setGoogleAccounts] = useState(() => {
        const storedProfiles = localStorage.getItem('googleProfiles');
        return storedProfiles ? JSON.parse(storedProfiles) : [];
    });

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error),
    });

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json',
                        },
                    },
                )
                .then((res) => {
                    //res là kết quả trả về từ yêu cầu http.
                    const newProfile: ProfileType = res.data;
                    const isRegistered = googleAccounts.some(
                        (profile: any) => profile.id === newProfile.id,
                    );

                    if (isRegistered) {
                        const isRegisterPage = window.location.pathname === '/register';
                        if (isRegisterPage) {
                            alert('Tài khoản đã được đăng kí');
                        } else {
                            window.location.href = '/';
                            alert('Đăng nhập thành công');
                            localStorage.setItem('preGoogleAccount', JSON.stringify(res.data));
                        }
                    } else {
                        setGoogleAccounts((prevProfiles: any) => {
                            alert('Đăng kí thành công');
                            const updatedProfiles = [...prevProfiles, newProfile];
                            localStorage.setItem('googleProfiles', JSON.stringify(updatedProfiles));
                            localStorage.setItem('preGoogleAccount', JSON.stringify(res.data));
                            window.location.href = '/';
                            return updatedProfiles;
                        });
                    }
                })
                .catch((err) => console.log(err));
        }
    }, [user]);

    return (
        <div className={cx('login-social', 'margin-left')} onClick={() => login()}>
            <GooleIcon></GooleIcon>
        </div>
    );
}

export default LoginByGoogle;
