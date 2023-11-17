import React, { useState } from 'react'
import Navbar from './Navbar'
import VerticalNav from './VerticalNav'

const You = () => {

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
        <div>
            <Navbar />
            <VerticalNav />
            <div className="you-body">
                <div className="you-heading">
                    <div style={{ width: '20%' }}>
                        <span className='profile-img'>Y</span>
                    </div>
                    <div>
                        <h1>Yash Gole</h1>
                        <p style={{ color: 'grey', fontSize: '13px', marginBottom: '10px' }}>create a channel</p>
                        <span className='switch-btn'>
                            Switch account
                        </span>
                        <span className='switch-btn'>
                            Google account
                        </span>
                    </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' ,width:'100%'}}>
                    <div style={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                        <i className="fa-regular fa-clock fa-xl fit"></i>
                        <h3 style={{ marginLeft: '15px' }}>History</h3>
                    </div>
                    <div style={{color:'blue',width:'100px'}}>See all</div>
                </div>
                <div className='you-map'>
                    {videos.map((video)=>(
                        <div className='you-container' style={{width:'200px',marginBottom:'20px'}}>
                            <img src={video.image} alt="" />
                            <div>
                                <div className='overflow-hidden'>
                                    {video.title}
                                </div>
                                <div className='font-grey size-13'>
                                    <p>{video.youtuber}</p>
                                </div>
                                <div className='font-grey size-13' >
                                    <span style={{marginRight:'8px'}}>{video.views} </span>
                                    <span> . {video.time} </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='you-bottom'>
                    <h1 className='col-white'> <i class="fa-regular fa-clock fit"></i>  Watch later</h1>
                    <p className='font-grey size-15'>Save videos to watch later. Your list shows up right here.</p>
                </div>
                <div className='you-bottom'>
                    <h1 className='col-white'><i class="fa-solid fa-bars fit"></i>  Playlists</h1>
                    <p className='font-grey size-15'>Playlists you create or save will show up here.</p>
                </div>
                <div className='you-bottom'>
                    <h1 className='col-white'><i class="fa-solid fa-thumbs-up fit"></i> Liked Videos</h1>
                    <p className='font-grey size-15'>Use the thumbs up icon to like videos. Your list shows up right here.</p>
                </div>
                <div className='you-bottom'>
                    <h1 className='col-white'> <i class="fa-solid fa-scissors fit"></i> Your Clips</h1>
                    <p className='font-grey size-15'>Clip and share your favorite moments. Your list shows up right here.</p>
                </div>

            </div>


        </div>
    )
}

export default You
