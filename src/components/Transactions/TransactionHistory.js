import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Balance',
    dataIndex: 'balance',
    key: 'balance',
  },
];

const TransactionHistory = () => {
  // This would typically come from your Redux store
  const data = [
    {
      key: 1,
      date: '2024-08-28',
      description: 'Grocery Store',
      amount: -50.00,
      balance: 5382.10,
    },
    // Add more dummy data as needed
  ];

  return (
    <div>
      <h2>Transaction History</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TransactionHistory;