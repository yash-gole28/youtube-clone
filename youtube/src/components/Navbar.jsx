import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-left'>
                <i className="fa-solid fa-bars fa-xl"></i>
                <img src="youtubeimg.png" alt="" />
            </div>

            <div className="nav-center">
                <input type="text" />
                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                <i className="fa-solid fa-microphone fa-xl"></i>
            </div>

            <div className="nav-right">
                <i className="fa-solid fa-video fa-xl"></i>
                <i className="fa-regular fa-bell fa-xl"></i>
                <i className="fa-regular fa-circle-user fa-xl"></i>
            </div>
        </nav>
    )
}

export default Navbar







