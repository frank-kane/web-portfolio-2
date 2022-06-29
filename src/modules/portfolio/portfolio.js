import ScrollAnimation from 'react-animate-on-scroll';
import './portfolio.scss';
const Portfolio = () =>{
    return(
        <div className="portfolioWrapper">

            
<ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>
    <br/>
    <ScrollAnimation animateIn="fadeInLeftBig" className='gridItemLeft' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>
    <ScrollAnimation animateIn="fadeInRightBig" className='gridItemRight' animateOnce={true}>
    <div>Hello</div>
    </ScrollAnimation>

             {/* <ScrollAnimation animateIn="fadeInLeftBig">
            <div className='gridItemLeft'>Hello</div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRightBig">
            <div className='gridItemRight'>Hello</div>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInLeftBig" delay={1}>
            <div className='gridItemLeft'>Hello</div>
            
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInRightBig">

            <div className='gridItemRight'>Hello</div>
        
            </ScrollAnimation> */}
            
     
        </div>

    )
}

export default Portfolio;