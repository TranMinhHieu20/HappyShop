import { memo } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './style.scss'
import cat1 from '../../../assets/user/images/categories/cat1.jpg'
import cat2 from '../../../assets/user/images/categories/cat2.jpg'
import cat3 from '../../../assets/user/images/categories/cat3.jpg'
import cat4 from '../../../assets/user/images/categories/cat4.jpg'

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
  const sliderItem = [
    {
      bgImg: cat1
    },
    {
      bgImg: cat2
    },
    {
      bgImg: cat3
    },
    {
      bgImg: cat4
    }
  ]
  return (
    <>
      {/*CateGories Begin */}
      <div className="container container__categories_slider">
        <Carousel responsive={responsive} className="categories_slider">
          {sliderItem.map((item, index) => (
            <div key={index} className="categories_slider_item" style={{ backgroundImage: `url(${item.bgImg})` }}></div>
          ))}
        </Carousel>
      </div>
      {/* CateGories End */}
    </>
  )
}

export default memo(HomePage)
