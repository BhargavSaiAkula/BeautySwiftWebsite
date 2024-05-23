import React from 'react'
import './SideMenu.css'
import { Menu } from 'antd'
import { AppstoreOutlined, ShopOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'  // Correct import

const SideMenu = () => {
  const navigate = useNavigate()  // Correct usage of useNavigate
  return (
    <div className='SideMenu'>
      <Menu 
        onClick={(item) => {
          navigate(item.key)
        }}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: '/',
          },
          {
            label: "Vendors",
            icon: <ShopOutlined />,
            key: '/vendors',
          },
          {
            label: "Appointment",  // Correct spelling
            icon: <ShoppingCartOutlined />,
            key: '/appointment',  // Correct spelling
          },
          {
            label: "Customers",
            icon: <UserOutlined />,
            key: '/customers',
          },
        ]}
      />
    </div>
  )
}

export default SideMenu
