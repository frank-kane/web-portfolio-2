
import './navbar.scss';
// import './navbar.less'


const NavBar = (props)=>{

    return(
        <div className="navbarWrapper">
           <div className="border-animation"><h3 className="border-animation__inner">About Me</h3></div> 
           <div onClick={props.scrollToPortfolio}  className="border-animation"><h3 className="border-animation__inner">Portfolio</h3></div>
           <div onClick={props.scrollToEmail} className="border-animation"><h3 className="border-animation__inner">Contact Me</h3></div>
            
        </div>
    )

}

export default NavBar