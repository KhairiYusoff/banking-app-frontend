import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to MayBank</h1>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Accounts" extra={<Link to="/accounts">View All</Link>}>
            Quick view of your accounts
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Recent Transactions" extra={<Link to="/transactions">View All</Link>}>
            Your latest transactions
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Quick Actions">
            <Link to="/transfer">Transfer Money</Link><br />
            <Link to="/bills">Pay Bills</Link>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;