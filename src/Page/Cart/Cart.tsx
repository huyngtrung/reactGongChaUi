import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import { payMethods } from '~/assets/images/payMethods';

import { Vouchers } from '../Product/Vouchers';

import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function Cart() {
    type Product = {
        title: string;
        imgSrc: string;
        price: number;
        quantity: number;
    };

    const [userProducts, setUserProducts] = useState<Product[]>([]);
    const [shipPrice, setShipPrice] = useState(30000);
    const [inputVoucher, setInputVoucher] = useState('');
    const [sell, setSell] = useState(0);

    useEffect(() => {
        const storedUserProducts = localStorage.getItem('userProducts');
        setUserProducts(storedUserProducts ? JSON.parse(storedUserProducts) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem('userProducts', JSON.stringify(userProducts));
    }, [userProducts]);

    const handleQuantityChange = (index: any, change: any) => {
        const newProducts = [...userProducts];
        newProducts[index].quantity += change;

        if (newProducts[index].quantity < 1) newProducts[index].quantity = 1;
        setUserProducts(newProducts);
    };

    const handleVoucherInput = (event: any) => {
        setInputVoucher(event.target.value);
    };

    const handleApplyVoucher = () => {
        const voucher = Vouchers.find((voucher) => voucher.name.trim() === inputVoucher.trim());

        if (voucher) {
            setSell(voucher.price);
        } else {
            alert('voucher không hợp lệ, vui lòng nhập lại');
        }
    };

    const handleRemoveProduct = (index: any) => {
        const newProducts = [...userProducts];
        newProducts.splice(index, 1);
        setUserProducts(newProducts);
    };

    const formatPrice = (price: any) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    const calculateTotalPrice = () => {
        return userProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    const handleBuy = () => {
        if (userProducts.length <= 0) {
            alert('vui lòng thêm sản phẩm vào giỏ hàng trước khi mua');
        } else {
            alert('bạn đã mua hàng thành công.');
            localStorage.removeItem('userProducts');
            window.location.reload();
        }
    };

    const formattedProductsTotalPrice = formatPrice(calculateTotalPrice());
    const formattedShipPrice = formatPrice(shipPrice);
    const formattedSellPrice = formatPrice(sell);
    const TotalPrice = calculateTotalPrice() + shipPrice - sell;
    const formattedTotalPrice = formatPrice(TotalPrice);

    return (
        <div className={cx('cart')}>
            <div className={cx('cart-wrapper')}>
                <div className={cx('cart-heading')}>
                    <div className={cx('cart-heading-name')}>Sản phẩm</div>
                    <div className={cx('cart-heading-price')}>Đơn giá</div>
                    <div className={cx('cart-heading-quantity')}>Số lượng</div>
                    <div className={cx('cart-heading-total')}>Thành tiền</div>
                    <div className={cx('cart-heading-action')}>Thao tác</div>
                </div>
                <div className={cx('cart-product')}>
                    <ul className={cx('cart-items')}>
                        {userProducts.length === 0 ? (
                            <li className={cx('no-cart-item')}>
                                vui lòng thêm sản phẩm vào giỏ hàng
                            </li>
                        ) : (
                            userProducts.map((product, index) => {
                                const formattedPrice = formatPrice(product.price);
                                const productsTotalPrice = product.price * product.quantity;
                                const formattedTotal = formatPrice(productsTotalPrice);

                                return (
                                    <li key={product.title} className={cx('cart-item')}>
                                        <div className={cx('item-name')}>
                                            <div className={cx('product-img-container')}>
                                                <img
                                                    className={cx('product-img')}
                                                    src={product.imgSrc}
                                                    alt=""
                                                />
                                            </div>
                                            <p className={cx('product-name')}>{product.title}</p>
                                        </div>
                                        <div className={cx('item-price')}>
                                            {formattedPrice}
                                            <span>đ</span>
                                        </div>
                                        <div className={cx('item-quantity')}>
                                            <div className={cx('qty-input')}>
                                                <button
                                                    className={cx('qty-count', 'qty-count--minus')}
                                                    onClick={() => handleQuantityChange(index, -1)}
                                                    type="button"
                                                >
                                                    -
                                                </button>
                                                <input
                                                    className={cx('product-qty')}
                                                    type="number"
                                                    name="product-qty"
                                                    min="0"
                                                    max="10"
                                                    value={product.quantity}
                                                    readOnly
                                                />
                                                <button
                                                    className={cx('qty-count', 'qty-count--add')}
                                                    onClick={() => handleQuantityChange(index, 1)}
                                                    type="button"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                        <div className={cx('item-total')}>
                                            {formattedTotal}
                                            <span>đ</span>
                                        </div>
                                        <div className={cx('item-action')}>
                                            <div
                                                className={cx('action-remove')}
                                                onClick={() => handleRemoveProduct(index)}
                                            >
                                                <svg
                                                    className={cx('svg-icon')}
                                                    width="30"
                                                    height="30"
                                                    viewBox="0 0 30 30"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M5.38854 0L0 5.38854L2.75159 8.14013L9.55414 15.0573L2.75159 21.8599L0 24.4968L5.38854 30L8.14013 27.2484L15.0573 20.3312L21.8599 27.2484L24.4968 30L30 24.4968L27.2484 21.8599L20.3312 15.0573L27.2484 8.14013L30 5.38854L24.4968 0L21.8599 2.75159L15.0573 9.55414L8.14013 2.75159L5.38854 0Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })
                        )}
                    </ul>
                </div>
            </div>
            <div className={cx('payment-container')}>
                <div className={cx('voucher-wrapper')}>
                    <div className={cx('voucher-container')}>
                        <input
                            className={cx('voucher-input')}
                            type="text"
                            placeholder="Nhập voucher"
                            onChange={handleVoucherInput}
                        />
                        <button className={cx('voucher-apply')} onClick={handleApplyVoucher}>
                            Apply
                        </button>
                    </div>
                </div>
                <div className={cx('pay-wrapper')}>
                    <div className={cx('pay-details')}>
                        <div className={cx('pay-products-container')}>
                            <h4 className={cx('pay-products-desc')}>Tổng tiền hàng:</h4>
                            <div className={cx('products-price-container')}>
                                <p className={cx('pay-products')}>{formattedProductsTotalPrice}</p>
                                <span>đ</span>
                            </div>
                        </div>
                        <div className={cx('pay-ship-container')}>
                            <h4 className={cx('pay-ship-desc')}>Phí vận chuyển:</h4>
                            <div className={cx('ship-container')}>
                                <p className={cx('pay-ship')}>{formattedShipPrice}</p>
                                <span>đ</span>
                            </div>
                        </div>
                        <div className={cx('pay-voucher-container')}>
                            <h4 className={cx('pay-voucher-desc')}>Voucher giảm giá:</h4>
                            <div className={cx('voucher-price-container')}>
                                <p className={cx('pay-voucher')}>{formattedSellPrice}</p>
                                <span>đ</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('pay-total-container')}>
                        <h4 className={cx('pay-total-desc')}>Tổng thanh toán:</h4>
                        <div className={cx('total-container')}>
                            <p className={cx('pay-total')}>{formattedTotalPrice}</p>
                            <span>đ</span>
                        </div>
                    </div>
                    <div className={cx('pay-methods')}>
                        <img src={payMethods.payMethod1} alt="payMethod1" />
                        <img src={payMethods.payMethod2} alt="payMethod2" />
                        <img src={payMethods.payMethod3} alt="payMethod3" />
                        <img src={payMethods.payMethod4} alt="payMethod4" />
                    </div>
                    <div className={cx('pay-submit-container')}>
                        <button className={cx('pay-submit')} onClick={handleBuy}>
                            thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
