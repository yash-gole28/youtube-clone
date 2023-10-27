import React from 'react'

const VerticalNav = () => {
  return (
    <nav className='v-nav'>
      <div className="v-nav-container">
        <i class="fa-solid fa-house fa-xl"></i>
        <div>Home</div>
      </div>
      <div className="v-nav-container">
        <i class="fa-brands fa-squarespace fa-xl"></i>
        <div>Shorts</div>
      </div>
      <div className="v-nav-container">
        <i class="fa-regular fa-square-caret-right fa-xl"></i>
        <div>Subscriptions</div>
      </div>
      <div className="v-nav-container">
      <i class="fa-regular fa-square"></i>
      <div>You</div>
      </div>
    </nav>
  )
}

export default VerticalNav
