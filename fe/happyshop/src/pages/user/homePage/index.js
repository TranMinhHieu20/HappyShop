import { memo } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './style.scss'
import cat1 from '../../../assets/user/images/categories/cat1.jpg'
//eslint-disable-next-line
import cat2 from '../../../assets/user/images/categories/cat2.jpg'
import cat3 from '../../../assets/user/images/categories/cat3.jpg'
import cat4 from '../../../assets/user/images/categories/cat4.jpg'
import thitbo from '../../../assets/user/images/feature/thitbo.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

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
      bgImg: cat3
    },
    {
      bgImg: cat4
    }
  ]
  const featProducts = {
    all: {
      title: 'Toàn bộ',
      products: [
        {
          img: thitbo,
          name: 'Thịt bò nạt',
          price: 20000
        },
        {
          img: thitbo,
          name: 'Chuối',
          price: 20000
        }
      ]
    },
    fesh: {
      title: 'Thịt tươi',
      products: [
        {
          img: thitbo,
          name: 'Thịt tươi',
          price: 20000
        }
      ]
    }
  }
  const renderFeaturedProduct = (data) => {
    const tabList = []
    const tabPanels = []

    Object.keys(data).forEach((key, index) => {
      tabList.push(<Tab key={index}>{data[key].title}</Tab>)
      const tabPanel = []
      data[key].products.forEach((item, key) => {
        tabPanel.push(
          <>
            <div key={key}>{item.name}</div>
          </>
        )
      })
      tabPanels.push(tabPanel)
    })

    return (
      <Tabs>
        <TabList>{tabList}</TabList>

        {tabPanels.map((item, key) => (
          <TabPanel key={key}>
            <div className="row">{item}</div>
          </TabPanel>
        ))}
      </Tabs>
    )
  }
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
      {/* Featured Begin */}
      <div className="container">
        <div className="featured">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
          </div>
          {renderFeaturedProduct(featProducts)}
        </div>
      </div>
      {/* Featured End */}
    </>
  )
}

export default memo(HomePage)
