import React, { useMemo, useEffect } from "react";
import { Input, Button } from 'antd';
import { SearchOutlined, ClockCircleFilled, GithubFilled, HomeFilled } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import blogConfig from '../../utils/config';

import styles from './index.module.css';

const linksArray = [
  {
    icon: <HomeFilled />,
    text: '首页',
    href: '/home'
  },
  {
    icon: <ClockCircleFilled />,
    text: '时间轴',
    href: '/timeline'
  },
  {
    icon: <GithubFilled />,
    text: 'GitHub',
    href: blogConfig.githubUrl
  },
];

export default function HeadContent() {
  const location = useLocation();
  const navigate = useNavigate();

  const realIndex = useMemo(() => {
    let result = -1;
    linksArray.forEach((item, index) => {
      if (location.pathname === item.href) {
        result = index;
      }
    });
    return result;
  }, [location]);

  return (
    <div className={styles.headContent}>
      <a className={styles.headContentLink} href="/">
        <img src={blogConfig.avatar} alt="avatar" />
        <span>{blogConfig.blogName}</span>
      </a>
      <div className={styles.headContentExtra}>
        <Input style={{ marginRight: 24 }} addonBefore={<SearchOutlined />} />
        {
          linksArray.map((item, index) => {
            return (
              <a key={index} className={realIndex === index ? styles['headContentExtra-a-active'] : ''} href={item.href}>
                {item.icon}
                {item.text}
              </a>
            )
          })
        }
        <Button onClick={() => navigate('/create')} type="primary">
          写文章
        </Button>
      </div>
    </div>
  )
}
