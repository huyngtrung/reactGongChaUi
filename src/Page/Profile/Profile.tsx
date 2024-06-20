import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import images from '~/assets/images';
import { RightArrowIcon } from '~/components/Icons';

import { useState, useRef } from 'react';

const cx = classNames.bind(styles);

function Profile() {
    const [isIconRotated, setIconRotated] = useState(false);
    let gendersSelect = useRef<HTMLUListElement | null>(null);

    const handleGenderChoose = () => {
        if (gendersSelect.current) {
            if (gendersSelect.current.style.display === 'block') {
                gendersSelect.current.style.display = 'none';
                setIconRotated(true);
            } else {
                gendersSelect.current.style.display = 'block';
                setIconRotated(false);
            }
        }
    };

    const handleLogOut = () => {
        localStorage.removeItem('preEmailAccount');
        localStorage.removeItem('preGoogleAccount');
        localStorage.removeItem('preFacebookAccount');
        window.location.href = '/login';
    };

    return (
        <>
            <div className={cx('pageheading-container')}>
                <div className={cx('pageheading-img-container')}>
                    <img
                        className={cx('pageheading-img')}
                        src={images.profilePageHeading}
                        alt="PageHeading"
                    />
                </div>
            </div>
            <div className={cx('profile-wrapper')}>
                <div className={cx('avatar-wrapper')}>
                    <div className={cx('avatar-container')}>
                        <img className={cx('profile-pic')} src="" alt="" />
                        <div className={cx('upload-button')}>
                            <img src="" alt="" />
                        </div>
                        <input className={cx('pic-upload')} type="file" accept="image/*" />
                    </div>
                    <div className={cx('user-name-container')}>
                        <h4 className={cx('profile-user-name')}></h4>
                    </div>
                    <div className={cx('logout-container')}>
                        <button className={cx('logout-btn')} onClick={handleLogOut}>
                            Đăng xuất
                        </button>
                    </div>
                </div>
                <div className={cx('info-container')}>
                    <div className={cx('basic-info-container')}>
                        <div className={cx('basic-info-title-container')}>
                            <h4 className={cx('basic-info-title')}>THÔNG TIN CƠ BẢN</h4>
                        </div>
                        <div className={cx('basic-info-name-container')}>
                            <input className={cx('name-input')} type="text" />
                            <div className={cx('label-line')}>Họ và tên thành viên</div>
                        </div>
                        <div className={cx('coloum2')}>
                            <div
                                className={cx('gender-info-container')}
                                onClick={handleGenderChoose}
                            >
                                <div className={cx('dropdown')}>
                                    <div className={cx('gender-select-cotainer')}>
                                        <span className={cx('gender-selected')}>Giới Tính</span>
                                        <RightArrowIcon
                                            className={cx(
                                                isIconRotated ? 'gender-icon' : 'arrowDown',
                                            )}
                                        ></RightArrowIcon>
                                    </div>
                                    <input
                                        className={cx('gender-select')}
                                        type="hidden"
                                        name="gender"
                                    />

                                    <ul className={cx('dropdown-menu')} ref={gendersSelect}>
                                        <li id={cx('Nữ')}>Nữ</li>
                                        <li id={cx('Nam')}>Nam</li>
                                        <li id={cx('Khác')}>Khác</li>
                                    </ul>
                                </div>
                            </div>
                            <div className={cx('birthdate-info')}>
                                <input className={cx('birthdate-input')} type="date" />
                                <div className={cx('label-line')} id="label-line"></div>
                            </div>
                        </div>
                        <div className={cx('basic-info-detail-container')}>
                            <textarea className={cx('detail-input')}></textarea>
                            <div className={cx('label-line')}>Thông tin chi tiết</div>
                        </div>
                    </div>
                    <div className={cx('contact-info-container')}>
                        <div className={cx('contact-info-title-container')}>
                            <h4 className={cx('contact-info-title')}>THÔNG TIN LIÊN HỆ</h4>
                        </div>
                        <div className={cx('coloum2')}>
                            <div className={cx('phone-info')}>
                                <input className={cx('phone-input')} type="text" />
                                <div className={cx('label-line')}>Số điện thoại</div>
                            </div>
                            <div className={cx('email-info')}>
                                <input className={cx('email-input')} type="text" />
                                <div className={cx('label-line')}>Email</div>
                            </div>
                        </div>
                        <div className={cx('address-info')}>
                            <input className={cx('address-input')} type="text" />
                            <div className={cx('label-line')}>Địa chỉ</div>
                        </div>
                    </div>
                    <div className={cx('info-save-container')}>
                        <button className={cx('info-save-btn')}>Lưu thông tin</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
