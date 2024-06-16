import classNames from 'classnames/bind';
import styles from './About.module.scss';
import aboutPageImages from '~/assets/images/aboutPage';
import { LikeIcon, LineIcon, LoveChatBoxIcon, MedalIcon } from '~/components/Icons';
import timeLineArr from './aboutTimeLine';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('custom')}>
                    <div className={cx('custom-container')}>
                        <div className={cx('content-container')}>
                            <h2 className={cx('custom-title')}>CÂU CHUYỆN THƯƠNG HIỆU</h2>
                            <p className={cx('custom-desc')}>
                                Tên gọi Gong Cha xuất phát từ ý nghĩa trong tiếng Hoa là Trà cung
                                đình. Thời xưa, các loại trà tốt nhất thường được các vị hoàng thân
                                quý tộc ngự dùng. Ngày nay, Gong Cha mong muốn phục vụ các loại trà
                                tốt nhất cho thực khách, cũng như chính tên gọi của thương hiệu. Kể
                                từ khi được thành lập vào năm 2006 tại Đài Loan, chuỗi cửa hàng Gong
                                Cha đã mở rộng trên khắp 19 quốc gia với 1.500 cửa hàng và con số
                                này vẫn tiếp tục tăng trưởng không ngừng. Qua nhiều năm nỗ lực phát
                                triển, Gong Cha đã trở nên phổ biến với khách hàng từ nhiều quốc gia
                                và trở thành một trong những thương hiệu trà đáng tin cậy hàng đầu
                                trên thế giới.
                            </p>
                        </div>
                        <div className={cx('custom-img-contanier')}>
                            <img
                                className={cx('custom-img', 'padding-left')}
                                src={aboutPageImages.aboutContent1}
                                alt="boutContent1"
                            />
                        </div>
                    </div>
                    <div className={cx('custom-container', 'background-white')}>
                        <div className={cx('custom-img-container')}>
                            <img
                                className={cx('fullWidth-img')}
                                src={aboutPageImages.aboutContent2}
                                alt="boutContent2"
                            />
                        </div>
                        <div className={cx('content-container', 'padding-left')}>
                            <h2 className={cx('custom-title')}>GONG CHA VIỆT NAM</h2>
                            <p className={cx('custom-desc')}>
                                Thương hiệu Gong Cha được công ty TNHH Golden Trust chính thức đưa
                                vào hoạt động tại thị trường Việt Nam từ ngày 11/10/2014. Trải qua
                                hơn năm năm hoạt động, công ty TNHH Golden Trust – đơn vị nhượng
                                quyền độc quyền của Gong Cha tại Việt Nam, đã đưa thương hiệu phát
                                triển nhanh chóng và trở thành một trong những điểm đến thân thuộc
                                của các bạn trẻ yêu thích văn hóa trà sữa và mong muốn trải nghiệm
                                sản phẩm trà uy tín chất lượng với nguồn gốc xuất xứ rõ ràng.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={cx('advertise')}>
                    <div className={cx('advertise-title-container')}>
                        <h2 className={cx('advertise-title')}>GIÁ TRỊ CỐT LÕI</h2>
                    </div>
                    <div className={cx('advertise-items')}>
                        <div className={cx('advertise-item')}>
                            <div className={cx('advertise-icon')}>
                                <MedalIcon></MedalIcon>
                            </div>
                            <div className={cx('advertise-content')}>
                                <h2 className={cx('advertise-item-title')}>
                                    1. CHẤT LƯỢNG HÀNG ĐẦU
                                </h2>
                                <p className={cx('advertise-item-desc')}>
                                    An toàn, vệ sinh và ngon miệng. Việc sử dụng các nguyên liệu an
                                    toàn, tự nhiên và vệ sinh là ưu tiên hàng đầu của Gong Cha.
                                    Hương vị tuyệt hảo của các món thức uống là mục đích quan trọng
                                    tiếp theo mà chúng tôi muốn hướng đến.
                                </p>
                            </div>
                        </div>

                        <div className={cx('advertise-item', 'margin-between')}>
                            <div className={cx('advertise-icon')}>
                                <LoveChatBoxIcon></LoveChatBoxIcon>
                            </div>
                            <div className={cx('advertise-content')}>
                                <h2 className={cx('advertise-item-title')}>
                                    2. DỊCH VỤ THÂN THIỆN & CHUYÊN NGHIỆP
                                </h2>
                                <p className={cx('advertise-item-desc')}>
                                    Gong Cha mong muốn làm hài lòng khách hàng tốt nhất với tác
                                    phong phục vụ chuyên nghiệp và thân thiện, luôn lắng nghe những
                                    đóng góp của khách hàng.
                                </p>
                            </div>
                        </div>
                        <div className={cx('advertise-item')}>
                            <div className={cx('advertise-icon')}>
                                <LikeIcon></LikeIcon>
                            </div>
                            <div className={cx('advertise-content')}>
                                <h2 className={cx('advertise-item-title')}>
                                    3. THƯƠNG HIỆU ĐÁNG TIN CẬY
                                </h2>
                                <p className={cx('advertise-item-desc')}>
                                    Dựa trên hai nền tảng cốt lõi là Chất Lượng và Dịch Vụ, Gong Cha
                                    luôn nỗ lực xây dựng và duy trì hình ảnh thương hiệu đáng tin
                                    cậy trong mắt khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={cx('timeline')}>
                    <div className={cx('timeline-content')}>
                        <h2 className={cx('timeline-title')}>QUÁ TRÌNH PHÁT TRIỂN</h2>
                        <p className={cx('timeline-desc')}>
                            Qua quá trình hoạt động công ty TNHH Golden Trust – đơn vị nhượng quyền
                            độc quyền của Gong Cha tại Việt Nam, đã đưa thương hiệu phát triển nhanh
                            chóng trở thành một trong những điểm đến thân thuộc của các bạn trẻ yêu
                            thích văn hóa trà sữa.
                        </p>
                    </div>
                    <div className={cx('timeline-items')}>
                        {timeLineArr.map((value, index) => {
                            return (
                                <div key={value.id} className={cx('timeline-item')}>
                                    <div className={cx('timeline-left')}>
                                        <span className={cx('timeline-year')}>{value.time}</span>
                                        <div className={cx('timeline-image-container')}>
                                            <img
                                                className={cx('timeline-image')}
                                                src={value.imgsrc}
                                                alt="timeLine1"
                                            />
                                            <LineIcon></LineIcon>
                                        </div>
                                    </div>
                                    <div className={cx('timeline-right')}>
                                        <p className={cx('timeline-item-content')}>
                                            {value.content}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
