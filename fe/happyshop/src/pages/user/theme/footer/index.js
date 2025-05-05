import { memo } from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsGlobe2 } from 'react-icons/bs'

import './style.scss'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-sx-12">
              <div className="footer__about">
                <h1 className="footer__about__logo">HappyShop</h1>
                <ul>
                  <li>Địa chỉ: Số 8, ngõ 2 Phạm Thận Duật</li>
                  <li>Số điện thoại: 0398-935-034</li>
                  <li>Email: tranhieu200304@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-sx-12">
              <div className="footer__widget">
                <h6>Cửa hàng</h6>
                <ul>
                  <li>
                    <Link to="">Liên hệ</Link>
                  </li>
                  <li>
                    <Link to="">Thông tin liên lạc về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to="">Sản phẩm kinh doanh</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link to="">Thông tin tài khoản</Link>
                  </li>
                  <li>
                    <Link to="">Giỏ hàng</Link>
                  </li>
                  <li>
                    <Link to="">Danh sách yêu thích</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-sx-12">
              <div className="footer__widget">
                <h6>Khuyến mại & ưu đãi</h6>
                <p>Đăng ký nhận thông tin tại đây</p>
                <form action="#">
                  <div className="input-group">
                    <input type="text" placeholder="Nhập email"></input>
                    <button type="submit" className="button-submit">
                      Submit
                    </button>
                  </div>
                  <div className="footer__widget__social">
                    <div>
                      <BsFacebook />
                    </div>
                    <div>
                      <BsInstagram />
                    </div>
                    <div>
                      <BsLinkedin />
                    </div>
                    <div>
                      <BsGlobe2 />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default memo(Footer)
