import React from 'react';
import { Form, Input, Button } from 'antd';

const UserSettings = () => {
  const onFinish = (values) => {
    console.log('Settings updated:', values);
    // Here you would typically dispatch an action to update user settings
  };

  return (
    <div>
      <h2>User Settings</h2>
      <Form name="settings" onFinish={onFinish}>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password" label="New Password" rules={[{ required: true, min: 6 }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['password']} rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords do not match'));
            },
          }),
        ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Update Settings
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserSettings;