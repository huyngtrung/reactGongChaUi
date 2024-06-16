import classNames from 'classnames/bind';
import styles from './Profile.module.scss';

const cx = classNames.bind(styles);

function Profile() {
    const handleLogOut = () => {
        localStorage.removeItem('preEmailAccount');
        window.location.href = '/login';
    };

    return (
        <div>
            123
            <div>profile page</div>
            <div>profile page</div>
            <div>profile page</div>
            <div>profile page</div>
            <div>profile page</div>
            <button onClick={handleLogOut}>log out</button>
        </div>
    );
}

export default Profile;
