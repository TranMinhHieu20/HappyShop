import { memo, useState, useRef, useEffect } from 'react'
import './style.scss'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGlobe2 } from 'react-icons/bs'
import { AiOutlineLogin, AiOutlineMenu } from 'react-icons/ai'
import { AiTwotoneMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { formatter } from 'utils/formatter'
import { BsCart3 } from 'react-icons/bs'
import { ROUTERS } from 'utils/router'

const Header = () => {
  const [isShowCateGories, setIsShowCateGories] = useState(false)
  const categoriesRef = useRef(null)
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

  // Ẩn khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (categoriesRef.current && !categoriesRef.current.contains(event.target)) {
        setIsShowCateGories(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleShowCateGories = () => {
    setIsShowCateGories(!isShowCateGories)
  }

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
      <div className="container">
        <div className="row hero__categories_container">
          <div className="col-lg-3 hero__categories" ref={categoriesRef}>
            <div className="hero__categories__all" onClick={handleShowCateGories}>
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>
            {isShowCateGories && (
              <>
                <ul className={!isShowCateGories ? '' : 'hidden'}>
                  <li>
                    <Link to="#">Thịt tươi</Link>
                  </li>
                  <li>
                    <Link to="#">Rau củ</Link>
                  </li>
                  <li>
                    <Link to="#">Nước trái cây</Link>
                  </li>
                  <li>
                    <Link to="#">Trái cây</Link>
                  </li>
                  <li>
                    <Link to="#">Hải sản</Link>
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="col-lg-9">Phai</div>
        </div>
      </div>
    </>
  )
}

export default memo(Header)
