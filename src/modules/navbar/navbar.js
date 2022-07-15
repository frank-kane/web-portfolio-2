
import './navbar.scss';
// import './navbar.less'


const NavBar = (props)=>{

    return(
        <div className="navbarWrapper">
           <a href="https://drive.google.com/file/d/1JwnFypQSaAsocRUCcdf5bGmR_TxWCjNb/view?usp=sharing" target="blank"><div className="border-animation"><h3 className="border-animation__inner">Resume</h3></div></a> 
           <div onClick={props.scrollToPortfolio}  className="border-animation"><h3 className="border-animation__inner">Portfolio</h3></div>
           <div onClick={props.scrollToEmail} className="border-animation"><h3 className="border-animation__inner">Contact Me</h3></div>
            
        </div>
    )

}

export default NavBar