import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import Tippy from '@tippyjs/react';

import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const show = false;
    return (
        <div>
            <Tippy
                appendTo={document.body}
                visible={show}
                render={(attrs: any) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input placeholder="Nhập sản phẩm..." />
                    <button className={cx('search-btn')}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
