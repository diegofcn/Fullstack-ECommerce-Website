import React from 'react'
import FeaturedProducts from '../../components/FeaturedProdcuts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import './Home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Slider />
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
    </div>
  )
}

export default Home