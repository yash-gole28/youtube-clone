import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const [SignPop, setSignPop] = useState(false)

    function signinPop() {
        setSignPop(!SignPop)
        console.log(SignPop)
    }
    const SignClass = SignPop ? 'Active-signin' : 'Inactive-signin'
    return (
        <>
            <nav className='navbar'>
                <div className='nav-left'>
                    <i className="fa-solid fa-bars fa-xl"></i>
                    <img onClick={() => navigate('/')} src="youtubeimg.png" alt="" />
                </div>

                <div className="nav-center">
                    <input type="text" />
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    <i className="fa-solid fa-microphone fa-xl"></i>
                </div>

                <div className="nav-right">
                    <i className="fa-solid fa-video fa-xl"></i>
                    <i className="fa-regular fa-bell fa-xl"></i>
                    <i onClick={signinPop} className="fa-regular fa-circle-user fa-xl"></i>
                </div>
                
            </nav>
            <div className={SignClass}>
                <div className='sign-in' onClick={()=>navigate('/signin')} style={{color:'white',backgroundColor:'transparent',display:'flex',fontSize:'20px'}}>
                <i class="fa-regular fa-user"></i>
                     <div>Signin</div></div>
                </div>
        </>
    )
}

export default Navbar







