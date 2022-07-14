
import './introduction.scss'
import profilepic from './profilePic2.avif'
import house from './house.webp'
import { Parallax } from "react-scroll-parallax";
import me from './me.jpg';
import me2 from './me2.jpg'
import me3 from './me3.jpg'
const Introduction = (props) => {

    return (
        <div className="introductionWrapper">

            <div className='picHolder'><img className="profilepic" src={me3} alt="" /></div>
                
            <div className="greeting">
                <h1>Frank Kane</h1>
                <h4>UI/UX Designer & Software Developer</h4>
                <h6 onClick={props.scrollToEmail}>Hire Me</h6>
            

            </div>
        </div>
    )
    
}

export default Introduction;