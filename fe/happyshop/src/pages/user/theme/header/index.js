import { memo, useState } from 'react'
import './style.scss'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineLogin } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { formatter } from 'utils/formatter'
import { BsCart3 } from 'react-icons/bs'
import { ROUTERS } from 'utils/router'

const Header = () => {
  //eslint-disable-next-line
  const [menus, setMenus] = useState([
    { name: 'Trang chủ', path: ROUTERS.USER.HOME },
    { name: 'Cửa hàng', path: ROUTERS.USER.PRODUCTS },
    {
      name: 'Sản phẩm',
      path: '',
      isShowSubmenu: false,
      child: [
        {
          name: 'thịt',
          path: ''
        },
        {
          name: 'Rau củ',
          path: ''
        },
        {
          name: 'Thức ăn nhanh',
          path: ''
        }
      ]
    },
    { name: 'Bài viết', path: '' },
    { name: 'Liên hệ', path: '' }
  ])

  return (
    <>
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
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="header__logo">
              <h1>HappyShop</h1>
            </div>
          </div>
          <div className="col-xl-6">
            <nav className="header__menu">
              <ul>
                {menus?.map((menu, menuKey) => (
                  <li key={menuKey} className={menuKey === 0 ? 'active' : ''}>
                    <Link to={menu?.path}>{menu?.name}</Link>
                    {menu?.child && (
                      <ul className="header__menu__dropdown">
                        {menu?.child.map((childItem, childKey) => (
                          <li key={`${menuKey}-${childKey}`}>
                            <Link to={childItem?.path}>{childItem?.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="col-xl-3">
            <div className="header__cart">
              <div className="header__cart_price">
                <span>{formatter(10232313)}</span>
              </div>
              <ul>
                <li>
                  <Link to="#">
                    <BsCart3 />
                    <span>5</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
