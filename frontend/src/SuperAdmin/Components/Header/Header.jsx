import React from 'react';
import './Header.css';
import { Badge, Image, Space, Typography } from 'antd';
import { MailOutlined, BellFilled } from '@ant-design/icons';

const Header = () => {
  return (
    <div className='Header'>
      <Image
        width={50}
        src="https://img.freepik.com/premium-vector/bs-logo-design_705304-866.jpg"
      />
      <Typography.Title>Beauty Swift Admin Dashboard</Typography.Title>
      <Space>
        <Badge count={10} dot>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge count={20}>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
      </Space>
    </div>
  );
}

export default Header;
