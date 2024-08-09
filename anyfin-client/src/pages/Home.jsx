import React from 'react'
import HomeBanner from '../components/HomeBanner'
import HomeServices from '../components/HomeServices'
import HomeAbout from '../components/HomeAbout'
import HomeFeatures from '../components/HomeFeatures'
import HomePartners from '../components/HomePartners'
import HomeContact from '../components/HomeContact'

function Home() {
  return (
    <div>
      <HomeBanner/>
      <HomeServices/>
      <HomeAbout/>
      <HomeFeatures/>
      <HomePartners/>
      <HomeContact/>
    </div>
  )
}

export default Home