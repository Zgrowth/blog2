import React from "react";
import { Button } from 'antd';
import { ClockCircleOutlined, UserOutlined } from '@ant-design/icons';
import blogConfig from '../../utils/config';

import styles from './index.module.css';

export default function Home() {
  return <div className={styles.homeBox}>
    <div className={styles.homeHero} style={{ background: `url(${blogConfig.blogHeroBgUrl}) center/cover no-repeat` }}>
      <div className={styles.homeHeroContent}>
        <h1>{blogConfig.blogName}</h1>
        <p>{blogConfig.blogDesc}</p>
      </div>
    </div>
    <div className={styles.homeContent}>
      <div className={styles.homeContentItem}>
        <span>这是标题这是标题这是标题这是标题</span>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 12 }}>
          <div className={styles.homeContentItemIcon}>
            <ClockCircleOutlined />
            章三
          </div>
          <div className={styles.homeContentItemIcon}>
            <UserOutlined />
            2024/11/01
          </div>
        </div>
      </div>
      <div className={styles.homeContentItem}>
        <span>这是标题这是标题这是标题这是标题</span>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 12 }}>
          <div className={styles.homeContentItemIcon}>
            <ClockCircleOutlined />
            章三
          </div>
          <div className={styles.homeContentItemIcon}>
            <UserOutlined />
            2024/11/01
          </div>
        </div>
      </div>
    </div>
  </div>;
}