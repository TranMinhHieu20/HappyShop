import { memo } from 'react'
import './style.scss'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { formatter } from 'utils/formatter'

const Header = () => {
  return (
    <div className="header_top">
      <div className="container">
        <div className="row">
          <div className="col-6 header__top_left">
            <ul>
              <li>
                <AiTwotoneMail />
                hello@gmail.com
              </li>
              <li>Miễn phí ship đơn từ {formatter(200000)}</li>
            </ul>
          </div>
          <div className="col-6 header__top_right">
            <ul className="">
              <li>
                <Link to={''}>
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <BsLinkedin />
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <BsGlobe2 />
                </Link>
              </li>
              <li>
                <Link to={''}>
                  <AiOutlineLogin />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Header)
