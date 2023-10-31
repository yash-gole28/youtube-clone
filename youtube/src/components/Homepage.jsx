import Category from "./Category"
import Navbar from "./Navbar"
import VerticalNav from "./VerticalNav"
import VideosMap from "./VideosMap"

const Homepage = ()=>{

    return(
        <div className="page" style={{display:'flex'}}>
            <Navbar/>
            <VerticalNav/>
            <Category/>
            <VideosMap/>
            
        </div>
    )
}

export default Homepage