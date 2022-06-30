
import './introduction.scss'
import profilepic from './profilePic2.avif'
import house from './house.webp'
const Introduction = () => {

    return (
        <div className="introductionWrapper">

            <div className='picHolder'><img className="profilepic" src={house} alt="" /></div>
                
            <div className="greeting">
                <h1>Frank Kane</h1>
                <h4>UI/UX Designer & Software Developer</h4>
                <h6>Hire Me</h6>
            

            </div>
        </div>
    )
    
}

export default Introduction;