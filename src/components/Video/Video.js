import Image from '../Image';
import classNames from 'classnames/bind';
import Button from '../Button';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import styles from './Video.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faComment,
    faHeart,
    faMusic,
    faShare,
} from '@fortawesome/free-solid-svg-icons';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

function Video({ data }) {
    const [isInView, setIsInView] = useState(false);

    const ref = useRef(null);

    // tạo biến để xem xét một object có nằm trong viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0, rootMargin: '-49.9% 0px -49.9% 0px ' },
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className={cx('wrapper')} ref={ref}>
            <Image className={cx('avatar')} src={data.avatar} alt="avatar" />
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <div className={cx('user')}>
                        <div className={cx('user-nickname')}>{data.username}</div>
                        <div className={cx('user-fullname')}>{data.full_name}</div>
                    </div>
                    <div className={cx('desc')}>{data.desc}</div>
                    <h4 className={cx('music')}>
                        <FontAwesomeIcon icon={faMusic} />
                        <div className={cx('music-name')}>{data.music}</div>
                    </h4>
                    <Button outline className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
                <div className={cx('video-content')}>
                    <div className={cx('video')}>
                        <VideoItem video_url={data.video_url} isInView={isInView} />
                    </div>
                    <div className={cx('video-icons')}>
                        <div className={cx('btn-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faHeart} className={cx('icon')} />
                            </span>
                            <span className={cx('text')}>{data.like}</span>
                        </div>
                        <div className={cx('btn-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faComment} className={cx('icon')} />
                            </span>

                            <span className={cx('text')}>{data.comments}</span>
                        </div>

                        <div className={cx('btn-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faBookmark} className={cx('icon')} />
                            </span>

                            <span className={cx('text')}>{data.bookmark}</span>
                        </div>

                        <div className={cx('btn-item')}>
                            <span className={cx('icon-wrapper')}>
                                <FontAwesomeIcon icon={faShare} className={cx('icon')} />
                            </span>
                            <span className={cx('text')}>{data.share}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Video.propTypes = {
    data: PropTypes.object.isRequired,
};
export default Video;
