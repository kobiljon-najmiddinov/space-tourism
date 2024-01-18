import logo from "../../assets/shared/logo.svg"
import menu from "../../assets/shared/icon-hamburger.svg"
import closeIcon from "../../assets/shared/icon-close.svg"
import homeDesktopImg from "../../assets/home/background-home-desktop.jpg"
import homeTabletImg from "../../assets/home/background-home-tablet.jpg"
import homeMobileImg from "../../assets/home/background-home-mobile.jpg"
import "./home.styles.css"
import { useEffect, useState, useRef } from "react"

export const Home = () =>{
    // getting dynamic width of a window using useState & useEffect hooks;
    const dynamicScreenWidth = () =>{
        const [windowWidth, setWindowWith] = useState([
            window.innerWidth,
        ]);

        useEffect(()=>{
            const windowWidthHandler = () => {
                setWindowWith([window.innerWidth]);
            };
            window.addEventListener("resize", windowWidthHandler);

            return () => {
                window.removeEventListener("resize", windowWidthHandler);
            };

        }, [])
        return windowWidth;
    }

    // Setting Background image according to the size of a width
    // Ex. if width in between 375 & 767 -> mobile bg image will be loaded
    const screenWidth = function (windowWidth){
        const width = dynamicScreenWidth();
        if ( width[0] >= 280 && width[0] <= 767 ) {
            return homeMobileImg;
        } 
        else if (  width[0] >= 768 &&  width[0] <= 1023 ) {
            return homeTabletImg;
        } 
        else {
            return homeDesktopImg;
        }

    }
    
    const clickHandler = useRef(null);

    function openNav(){
       clickHandler.current.style.width = "254px";
    };

    function closeNav(){
        clickHandler.current.style.width = "0px";
    };


    return(
        <> 
        <img id="bg-img" style={{objectFit: "fill"}} src={screenWidth()} alt="background image" />   
            <nav className="flex" >
                    <img id="logo" style={{width: "48px", height: "48px", position: "static"}} src={logo} alt="logo"  />
                    <button onClick={openNav} className="menu-btn">
                        <img  style={{display: "none", width: "24px", height: "21px"}} src={menu} alt="menu icon" />
                    </button>
                    <div   ref={clickHandler} className="mobile-nav">
                        <div className=" flex close-icon">
                            <button onClick={closeNav} className="close-btn">
                                <img src={closeIcon} alt="close icon" />
                            </button>
                        </div>
                
                        <div className="uppercase letter-spacing-2 ff-sans-cond underline-indicators-mobile ">
                            <li className="active"> <a href="#"> <span>00</span> Home</a> </li>
                            <li> <a href="#"> <span>01</span> Destination</a> </li>
                            <li> <a href="#"> <span>02</span> Crew</a> </li>
                            <li> <a href="#"> <span>03</span> Technology</a> </li>
                        </div>
                    </div>
                    
                    <hr></hr>  {/** horizontal rule */}
                    <ul className=" navigation flex uppercase letter-spacing-2 ff-sans-cond  underline-indicators" style={{gap: "3rem", justifyContent: "center"}}> 
                        <li className="active"> <a href="#"> <span>00</span> Home</a> </li>
                        <li> <a href="#"> <span>01</span> Destination</a> </li>
                        <li> <a href="#"> <span>02</span> Crew</a> </li>
                        <li> <a href="#"> <span>03</span> Technology</a> </li>
                    </ul>
            </nav>
            <div className="main-content container grid ">
                <div className="headline flow" style={{gridArea: "headline", marginInline: "3rem"}}>
                <p className="uppercase ff-sans-cond fs-500 " style={{letterSpacing: "4.725px", color: "#D0D6F9" }}> 
                    So, you want to travel to 
                </p>
                
                <h2 className=" uppercase ff-serif fs-900" style={{fontWeight: "400"}}>Space</h2>

                <p className="headline-body ff-sans-normal fs-400 " style={{lineHeight:"32px", color: "#D0D6F9"}}>
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                </p>
                </div>
                
                <div className="explore-btn flex" style={{gridArea: "button", margin: "5rem 5rem"}}>
                    <a href="#" className="large-button ff-serif uppercase fs-600 text-dark bg-white">Explore</a>
                </div>
            </div>
            
        </>
    )
}
