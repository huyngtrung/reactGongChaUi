import classNames from 'classnames/bind';
import styles from './GoUpBtn.module.scss';
import { GoUpIcon } from '../Icons';
import { useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function GoUpBtn() {
    const goUpBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (goUpBtnRef.current) {
                if (window.scrollY > 400) {
                    goUpBtnRef.current.style.display = 'block';
                } else {
                    goUpBtnRef.current.style.display = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleGoUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={cx('goUpBtn-container')} ref={goUpBtnRef} onClick={handleGoUp}>
            <GoUpIcon className={cx('goUpBtn')} />
        </div>
    );
}

export default GoUpBtn;
