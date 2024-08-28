import React from 'react';
import { Table, Button } from 'antd';

const columns = [
  {
    title: 'Biller',
    dataIndex: 'biller',
    key: 'biller',
  },
  {
    title: 'Amount Due',
    dataIndex: 'amountDue',
    key: 'amountDue',
  },
  {
    title: 'Due Date',
    dataIndex: 'dueDate',
    key: 'dueDate',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <Button type="primary">Pay</Button>,
  },
];

const BillPayments = () => {
  // This would typically come from your Redux store
  const data = [
    {
      key: 1,
      biller: 'Electric Company',
      amountDue: 75.00,
      dueDate: '2024-09-15',
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2>Bill Payments</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default BillPayments;