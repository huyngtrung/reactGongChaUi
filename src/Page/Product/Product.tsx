import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { MilkteaIcon } from '~/components/Icons';
import { useState, useEffect, useRef } from 'react';
import { fruitTea, iceCream } from './Menus';
import { log } from 'console';

const cx = classNames.bind(styles);

function Product() {
    const refs = useRef<{ [key: string]: HTMLElement | null }>({});
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const taskbarRef = refs.current['taskbar'];

            if (!taskbarRef) return;
            if (scrollTop <= taskbarRef.offsetTop) {
                setIsFixed(false);
            } else {
                setIsFixed(scrollTop >= taskbarRef.offsetTop);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = (key: string) => {
        const menuItemRef = refs.current[key];

        if (menuItemRef) {
            const menuTop = refs.current[key]?.offsetTop || 0;
            const taskbarHeight = refs.current['taskbar']?.offsetHeight || 0;
            const scrollToPosition = menuTop - taskbarHeight;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div
                    ref={(ref) => (refs.current['taskbar'] = ref)}
                    className={cx('taskbar', isFixed && 'fixed')}
                >
                    <ul className={cx('taskbar-items')}>
                        <li
                            key={'1'}
                            onClick={() => handleClick('1')}
                            className={cx('taskbar-item')}
                        >
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Kem</p>
                        </li>
                        <li
                            key={'2'}
                            onClick={() => handleClick('2')}
                            className={cx('taskbar-item')}
                        >
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Trà trái cây</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Okinawa</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Latte Series</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Milk Tea</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Topping</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Smoothie Series</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Brewed Tea Series</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>Creative Mix</p>
                        </li>
                        <li className={cx('taskbar-item')}>
                            <MilkteaIcon></MilkteaIcon>
                            <p className={cx('taskbar-content')}>
                                Gong Cha House Special Milk Foam
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={cx('menu')}>
                    <ul className={cx('menu-items')}>
                        <li ref={(ref) => (refs.current['1'] = ref)} className={cx('menu-item')}>
                            <div className={cx('item-title-container')}>
                                <h2 className={cx('item-title')}>KEM</h2>
                            </div>
                            <div className={cx('item-product')}>
                                {iceCream.map((value) => {
                                    let priceString = value.price.toString(); // Convert the number to a string
                                    let newPrice = priceString.replace(/[^0-9/.]/g, ''); // Remove non-numeric characters except dots
                                    let removeDot = newPrice.replace(/\./g, ''); // Remove dots
                                    let formattedPrice = removeDot.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        '.',
                                    );

                                    return (
                                        <div key={value.id} className={cx('product-container')}>
                                            <img src={value.imgSrc} alt={value.name} />
                                            <p className={cx('product-title')}>{value.name}</p>
                                            <span className={cx('product-price-container')}>
                                                <p className={cx('product-price-desc')}>Giá:</p>
                                                <p className={cx('product-price')}>
                                                    {formattedPrice}
                                                </p>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                        <li ref={(ref) => (refs.current['2'] = ref)} className={cx('menu-item')}>
                            <div className={cx('item-title-container')}>
                                <h2 className={cx('item-title')}>TRÀ TRÁI CÂY</h2>
                            </div>
                            <div className={cx('item-product')}>
                                {fruitTea.map((value) => {
                                    let priceString = value.price.toString(); // Convert the number to a string
                                    let newPrice = priceString.replace(/[^0-9/.]/g, ''); // Remove non-numeric characters except dots
                                    let removeDot = newPrice.replace(/\./g, ''); // Remove dots
                                    let formattedPrice = removeDot.replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        '.',
                                    );

                                    return (
                                        <div key={value.id} className={cx('product-container')}>
                                            <img src={value.imgSrc} alt={value.name} />
                                            <p className={cx('product-title')}>{value.name}</p>
                                            <span className={cx('product-price-container')}>
                                                <p className={cx('product-price-desc')}>Giá:</p>
                                                <p className={cx('product-price')}>
                                                    {formattedPrice}
                                                </p>
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Product;
