import Category from "./Category"
import VerticalNav from "./VerticalNav"
import VideosMap from "./VideosMap"

const Homepage = ()=>{

    return(
        <div className="page" style={{display:'flex'}}>
            <VerticalNav/>
            <Category/>
            <VideosMap/>
            
        </div>
    )
}

export default Homepage