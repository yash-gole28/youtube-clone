import React from 'react'
import './youtube.css'

const Signin = () => {
  return (
    < >
        <div className='sign-in-page'>

      <div className='sign-in-container'>
        <div style={{width:'100px',marginTop:'30px'}}><img style={{width:'100px'}} src="googleimg.png" alt="" /></div>
        <div><h2 style={{textAlign:'center',fontWeight:'400'}}>Sign in</h2></div>
        <div><p style={{textAlign:'center',marginTop:'10px'}}>to continue to YouTube</p></div>
        <input className='placeholder' style={{width:'330px',height:'50px',marginTop:'30px'}} type="text" />
      </div>
        </div>
    </>
  )
}

export default Signin
