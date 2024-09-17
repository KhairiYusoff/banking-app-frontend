import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { 
  HomeOutlined, 
  BankOutlined, 
  HistoryOutlined, 
  SwapOutlined, 
  FileTextOutlined, 
  SettingOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { selectIsAuthenticated } from '../../features/auth/authSelectors';
import { logoutUser } from '../../features/auth/authActions';

const { Header: AntHeader } = Layout;

const Header = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <AntHeader>
      <div className="logo" style={{ color: 'white', float: 'left' }}>
        <Link to="/" style={{ color: 'white' }}>myBank</Link>
      </div>
      {isAuthenticated && (
        <Menu theme="dark" mode="horizontal" selectable={false}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<BankOutlined />}>
            <Link to="/accounts">Accounts</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HistoryOutlined />}>
            <Link to="/transactions">Transactions</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SwapOutlined />}>
            <Link to="/transfer">Transfer</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            <Link to="/bills">Bills</Link>
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="7" icon={<LogoutOutlined />} onClick={handleLogout}>
            Logout
          </Menu.Item>
        </Menu>
      )}
    </AntHeader>
  );
};

export default Header;