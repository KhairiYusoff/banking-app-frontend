import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAccounts, selectAccountsLoading, selectAccountsError } from '../../features/accounts/accountsSelectors';
import { getAccounts } from '../../features/accounts/accountsActions';
import { List, Card, Spin } from 'antd';

const AccountsList = () => {
    const dispatch = useDispatch();
    const accounts = useSelector(selectAccounts);
    const loading = useSelector(selectAccountsLoading);
    const error = useSelector(selectAccountsError);

    useEffect(() => {
        dispatch(getAccounts());
    }, [dispatch]);

    if (loading) return <Spin size="large" />;
    if (error) return <p>Error: {error}</p>;

    return (
        <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={accounts}
            renderItem={account => (
                <List.Item>
                    <Card title={account.type}>
                        <p>Balance: ${account.balance}</p>
                    </Card>
                </List.Item>
            )}
        />
    );
};

export default AccountsList;