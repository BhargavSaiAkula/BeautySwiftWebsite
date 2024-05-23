import React from 'react'
import './Footer.css'
import { Typography } from 'antd'

const Footer = () => {
  return (
    <div className='Footer'>
      <Typography.Link href='tel:+0000000'>+000000000</Typography.Link>
      <Typography.Link href='http://www.google.com' target={"_blank"}>Privacy Policy</Typography.Link>
      <Typography.Link href='http://www.google.com' target={"_blank"}>Term of Use</Typography.Link>
    </div>
  )
}

export default Footer