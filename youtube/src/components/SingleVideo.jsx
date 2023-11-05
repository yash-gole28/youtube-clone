import React, { useState } from 'react'
import Navbar from './Navbar'

const SingleVideo = () => {
  const [videos, setVideos] = useState([
    {
      image: 'https://i.ytimg.com/vi/oZIlIludZto/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfXaWhZs1SEN0i88WIO-DoSafzGw',
      title: 'Why British Left India? | Reality of Quit India Movement | Mahatma Gandhi | ',
      youtuber: 'Dhruv Rathee',
      views: '561k views',
      time: '3 hours'
    },
    {
      image: 'https://i.ytimg.com/vi/nnLmpEQf64A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf5DB0Vqne3cI7eiSYR_W5Z3Yj6A',
      title: 'Two Pointers | DSA Full Course | Lecture - 35 | EduVitae Services',
      youtuber: 'EduVitae Videos',
      views: '20views',
      time: '1 day ago'
    },
    {
      image: 'https://i.ytimg.com/vi/OokQ92J-2xI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANTCu0wXXBeGdV0bwu673L5fuS9g',
      title: ' ENTERING THE NEW WORLD - NO PROMOTION',
      youtuber: 'CarryisLive',
      views: '1m views',
      time: 'seven days ago'
    },
    {
      image: 'https://i.ytimg.com/vi/jHwJpPKJ6KU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBroRtOkBVXb25VBfaS8ePUgTWzg',
      title: 'Honest Opinion On Rap Singing - Sonu Nigam Opens Up ',
      youtuber: 'TRS Clips हिंदी ',
      views: '360k views',
      time: '3 days ago'
    },
    {
      image: 'https://i.ytimg.com/vi/cwcaTNHgGuM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPAgmgxv7gFIOmT9N5-8JnlUzuNw',
      title: 'Unit 2.2 | What are Tensors? | Part 01 | Tensors for Data ',
      youtuber: 'Lightning AI ',
      views: '106',
      time: '10 days ago'
    },
    {
      image: 'https://i.ytimg.com/vi/WkMr5zNqgwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9vncjedQKKRu9LNS6OBxBYc2lJg',
      title: 'My Life In India🇮🇳 ',
      youtuber: 'IShowSpeed',
      views: '2.8m views',
      time: '8 days ago'
    },
  ])
  return (
    <div style={{ backgroundColor: 'black', height: '1000px', color: 'white' }}>
      <Navbar />
      <div className='single-page-container'>
        <div className="left-single-pg-part">
          <img src="carryVideo.png" alt="" />
          <h3>ENTERING THE NEW WORLD - NO PROMOTION</h3>

          <div style={{ display: 'flex' }}>
            <div>
              <div><h4>CarryisLive</h4></div>
              <div style={{ color: 'grey', fontSize: '14px' }}>12M subscribers</div>
            </div>
            <div >
              <button className='fit' style={{ padding: '7px 15px', borderRadius: '15px', backgroundColor: 'transparent', color: 'white', border: '1px solid grey' }}>Join</button>
              <button className='fit' style={{ padding: '7px 15px', borderRadius: '15px', marginLeft: '10px' }}>Subscribe</button>
            </div>
            <div>
              <img src="like.png" alt="" />
            </div>
          </div>
          <div style={{marginTop:'10px',marginRight:'8px'}}>
            <img style={{paddingRight:'5px'}} src="imgs.png" alt="" />
          </div>
        </div>


        <div className="right-single-pg-part">
          {videos.map((data) => (
            <div style={{ display: 'flex' }}>
              <div>
                <img style={{ width: "200px", borderRadius: '8px', margin: '5px' }} src={data.image} alt="" />
              </div>
              <div>
                <div>{data.title}</div>
                <div style={{ display: 'flex', width: '100%', color: 'grey' }}> <div>{data.youtuber}</div> <i style={{ marginTop: '5px' }} class="fa-regular fa-circle-check"></i></div>

                <div style={{ color: 'grey' }}>{data.views}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SingleVideo
