import React from 'react'
import VideosMap from './VideosMap'
import Category from './Category'
import VerticalNav from './VerticalNav'

const Newpage = () => {
  return (
    <div>
      <Category/>
      <VerticalNav/>
      <VideosMap/>
    </div>
  )
}

export default Newpage
