import React from "react";
import ReactQuill from 'react-quill';
import { Button, Form, Input } from 'antd';
import 'react-quill/dist/quill.snow.css';

import styles from './index.module.css';

export default function Home() {
  return <div className={styles.createBox}>
    <Form
      name="basic"
      layout="vertical"
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      scrollToFirstError
      autoComplete="off"
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: '请输入标题!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="内容"
        name="content"
        rules={[{ required: true, message: '请输入内容!' }]}
      >
        <ReactQuill theme="snow" >
          <div style={{ minHeight: 500 }}>
          </div>
        </ReactQuill>
      </Form.Item>


      <Form.Item >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>

  </div>;
}