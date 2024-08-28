import React from 'react';
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

const TransferMoney = () => {
  const onFinish = (values) => {
    console.log('Transfer initiated:', values);
    // Here you would typically dispatch an action to process the transfer
  };

  return (
    <div>
      <h2>Transfer Money</h2>
      <Form name="transfer" onFinish={onFinish}>
        <Form.Item name="fromAccount" label="From Account" rules={[{ required: true }]}>
          <Select placeholder="Select source account">
            <Option value="account1">Checking Account (****1234)</Option>
            <Option value="account2">Savings Account (****5678)</Option>
          </Select>
        </Form.Item>

        <Form.Item name="toAccount" label="To Account" rules={[{ required: true }]}>
          <Input placeholder="Enter recipient account number" />
        </Form.Item>

        <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
          <Input type="number" prefix="$" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Transfer
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransferMoney;