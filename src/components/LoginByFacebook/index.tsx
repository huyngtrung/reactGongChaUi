import classNames from 'classnames/bind';
import styles from './LoginByFacebook.module.scss';

import FacebookLogin from '@greatsumini/react-facebook-login';

import { LoginFacebookIcon } from '~/components/Icons';

import { useState } from 'react';

const cx = classNames.bind(styles);

function LoginByFaceBook() {
    const [user, setUser] = useState<{ access_token: any } | null>(null);
    const [facebookAccounts, setFacebookAccounts] = useState(() => {
        const storedProfiles = localStorage.getItem('facebookProfiles');
        return storedProfiles ? JSON.parse(storedProfiles) : [];
    });

    const loginSucces = (response: any) => {
        console.log(response);
    };

    const loginFail = (error: any) => {
        console.log(error);
    };

    const getFacebookAccounts = (response: any) => {
        if (!facebookAccounts.some((profile: any) => profile.id === response.id)) {
            setFacebookAccounts((prevProfiles: any) => {
                const updatedProfiles = [...prevProfiles, response];
                localStorage.setItem('facebookProfiles', JSON.stringify(updatedProfiles));
                return updatedProfiles;
            });
        }
        alert('Đăng kí thành công');
        window.location.href = '/';
    };

    return (
        <FacebookLogin
            appId="314652121659279"
            autoLoad={false}
            fields="name,email,picture"
            onSuccess={(response) => loginSucces(response)}
            onFail={(error) => loginFail(error)}
            onProfileSuccess={(response) => getFacebookAccounts(response)}
            className={cx('login-social', 'background-blue', 'margin-right')}
        >
            <LoginFacebookIcon></LoginFacebookIcon>
        </FacebookLogin>
    );
}

export default LoginByFaceBook;
