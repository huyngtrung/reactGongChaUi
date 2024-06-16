import classNames from 'classnames/bind';
import styles from './Connect.module.scss';
import { useEffect, useState } from 'react';
import { log } from 'console';
import { verify } from 'crypto';

const cx = classNames.bind(styles);

function Connect() {
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [phonenumberInput, setPhonenumberInput] = useState('');
    const [feedbackInput, setFeedbackInput] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [submit, setSubmit] = useState({
        name: nameInput,
        email: emailInput,
        phonenumber: phonenumberInput,
        feedback: feedbackInput,
    });

    const handleNameInput = (event: any) => {
        const inputValue = event.target.value;

        setNameInput(nameInput);

        if (!inputValue.startsWith(' ')) {
            setNameInput(inputValue);
        }
    };
    const handleEmailInput = (event: any) => {
        const inputValue = event.target.value;

        setEmailInput(emailInput);

        if (!inputValue.startsWith(' ')) {
            setEmailInput(inputValue);
        }
    };
    const handlePhonenumberInput = (event: any) => {
        const inputValue = event.target.value;

        setPhonenumberInput(phonenumberInput);

        if (!inputValue.startsWith(' ')) {
            setPhonenumberInput(inputValue);
        }
    };
    const handleFeedbackInput = (event: any) => {
        const inputValue = event.target.value;

        setFeedbackInput(feedbackInput);

        if (!inputValue.startsWith(' ')) {
            setFeedbackInput(inputValue);
        }
    };
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = () => {
        {
            isChecked &&
                setSubmit({
                    name: nameInput,
                    email: emailInput,
                    phonenumber: phonenumberInput,
                    feedback: feedbackInput,
                });
        }
    };

    useEffect(() => {
        return;
    }, [submit]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('connect-content')}>
                Gong Cha luôn mong muốn nhận được nhưng phản hồi quý giá của quý khách hàng để có cơ
                hội hoàn thiện sản phẩm, dịch vụ hơn nữa. Những đóng góp của quý khách hàng luôn là
                tài sản vô giá đối với chúng tôi
            </div>
            <form className={cx('contact-form')}>
                <div className={cx('form-info')}>
                    <div className={cx('name-info')}>
                        <input
                            className={cx(`${nameInput !== '' ? 'input-valued' : ''}`)}
                            value={nameInput}
                            type="text"
                            onChange={handleNameInput}
                            required
                        />
                        <div
                            className={cx('label-line', `${nameInput !== '' ? 'line-valued' : ''}`)}
                        >
                            Họ và tên
                        </div>
                    </div>
                    <div className={cx('secret-info')}>
                        <div className={cx('Email-info')}>
                            <input
                                className={cx(`${emailInput !== '' ? 'input-valued' : ''}`)}
                                value={emailInput}
                                type="text"
                                onChange={handleEmailInput}
                                required
                            />
                            <div
                                className={cx(
                                    'label-line',
                                    `${emailInput !== '' ? 'line-valued' : ''}`,
                                )}
                            >
                                Email
                            </div>
                        </div>
                        <div className={cx('phonenumber-info')}>
                            <input
                                className={cx(`${phonenumberInput !== '' ? 'input-valued' : ''}`)}
                                value={phonenumberInput}
                                type="text"
                                onChange={handlePhonenumberInput}
                                required
                            />
                            <div
                                className={cx(
                                    'label-line',
                                    `${phonenumberInput !== '' ? 'line-valued' : ''}`,
                                )}
                            >
                                Số điện thoại
                            </div>
                        </div>
                    </div>
                    <div className={cx('feedback-info')}>
                        <textarea
                            className={cx(`${feedbackInput !== '' ? 'input-valued' : ''}`)}
                            value={feedbackInput}
                            onChange={handleFeedbackInput}
                        />
                        <div
                            className={cx(
                                'label-line',
                                `${feedbackInput !== '' ? 'line-valued' : ''}`,
                            )}
                        >
                            Nội dung phản hồi
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <h3 className={cx('font-size-big', 'padding-top')}>
                        THỎA THUẬN BẢO MẬT THÔNG TIN
                    </h3>
                    <ul className={cx('padding-left')}>
                        <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                            1. Gong Cha sẽ luôn giữ bí mật các thông tin của khách hàng và tuân thủ
                            những quy định pháp luật về bảo mật thông tin có liên quan.
                        </p>
                        <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                            2. Gong Cha có thể tiết lộ thông tin cá nhân cho mục đích giải quyết
                            khiếu nại, than phiền của khách hàng cho:
                        </p>
                        <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                            - Các bộ phận trực thuộc Gong Cha Việt Nam;
                        </p>
                        <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                            - Bên thứ ba được ủy quyền chính thức từ Gong Cha Việt Nam cho việc giải
                            quyết các than phiền, khiếu nại mang tính chất nghiêm trọng.
                        </p>
                    </ul>
                    <h3 className={cx('font-size', 'margin-bottom')}>* LƯU Ý:</h3>
                    <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                        Quý khách vui lòng cung cấp chính xác các thông tin cá nhân để Gong Cha có
                        thể liên hệ giải quyết các thắc mắc, phản hồi và phàn nàn của khách hàng một
                        cách nhanh chóng nhất.
                    </p>
                    <p className={cx('font-size-small', 'font-weight', 'margin-bottom')}>
                        Các ngày Thứ bảy, Chủ nhật, ngày lễ sẽ khiến quá trình giải quyết phản hồi
                        của quý khách chậm hơn thường lệ
                    </p>
                </div>
                <label className={cx('checkbox-container')}>
                    <div className={cx('checkbox')}>
                        <input onChange={handleCheckboxChange} type="checkbox" required />
                    </div>
                    <p className={cx('checkbox-content')}>
                        Tôi xác nhận các thông tin cá nhân cung cấp ở trên là hoàn toàn chính xác và
                        đồng ý để Gong Cha sử dụng các thông tin đó cho mục đích giải quyết phản
                        hồi.
                    </p>
                </label>
                <div className={cx('submit-container')}>
                    <button className={cx('submit')} onClick={handleSubmit}>
                        Phản hồi
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Connect;
