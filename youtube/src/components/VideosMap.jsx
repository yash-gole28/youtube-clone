import React, { useState } from 'react'

const VideosMap = () => {

    const [videos, setVideos] = useState([
        {
            image:'https://i.ytimg.com/vi/oZIlIludZto/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfXaWhZs1SEN0i88WIO-DoSafzGw',
            title:'Why British Left India? | Reality of Quit India Movement | Mahatma Gandhi | ',
            youtuber:'Dhruv Rathee',
            views:'561k views',
            time: '3 hours'
        },
        {
            image:'https://i.ytimg.com/vi/nnLmpEQf64A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCf5DB0Vqne3cI7eiSYR_W5Z3Yj6A',
            title:'Two Pointers | DSA Full Course | Lecture - 35 | EduVitae Services',
            youtuber:'EduVitae Videos',
            views:'20views',
            time: '1 day ago'
        },
        {
            image:'https://i.ytimg.com/vi/OokQ92J-2xI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANTCu0wXXBeGdV0bwu673L5fuS9g',
            title:' ENTERING THE NEW WORLD - NO PROMOTION',
            youtuber:'CarryisLive',
            views:'1m views',
            time: 'seven days ago'
        },
        {
            image:'https://i.ytimg.com/vi/jHwJpPKJ6KU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDBroRtOkBVXb25VBfaS8ePUgTWzg',
            title:'Honest Opinion On Rap Singing - Sonu Nigam Opens Up ',
            youtuber:'TRS Clips हिंदी ',
            views:'360k views',
            time: '3 days ago'
        },
        {
            image:'https://i.ytimg.com/vi/cwcaTNHgGuM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPAgmgxv7gFIOmT9N5-8JnlUzuNw',
            title:'Unit 2.2 | What are Tensors? | Part 01 | Tensors for Data ',
            youtuber:'Lightning AI ',
            views:'106',
            time: '10 days ago'
        },
        {
            image:'https://i.ytimg.com/vi/WkMr5zNqgwM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA9vncjedQKKRu9LNS6OBxBYc2lJg',
            title:'My Life In India🇮🇳 ',
            youtuber:'IShowSpeed',
            views:'2.8m views',
            time: '8 days ago'
        },
    ])


        
  return (
    <div className='map-container'>
      {videos.map((user)=>(
        <div className='map-data' style={{color:'white'}}>
            <img src={user.image} alt="" />
            <div className='m-title'>{user.title}</div>
            <div className='m-youtuber'>{user.youtuber}</div>
            <span className='m-views'>{user.views}</span>
            <span className='m-time'> . {user.time}</span>
        </div>
      ))}

      <div style={{height:'500px'}}></div>
    </div>
  )
}

export default VideosMap
