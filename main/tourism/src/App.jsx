import "./index.css"
import {Home} from "./Components/home/home.component";

import { useMediaQuery } from 'react-responsive'


function App(){
    // const isMobileDevice = useMediaQuery({
    //     query: "(min-device-width: 375px)",
    // });
    
    // const isTabletDevice = useMediaQuery({
    //     query: "(min-device-width: 768px)",
    // });
    
    // const isLaptopDevice = useMediaQuery({
    //     query: "(min-device-width: 1024px)",
    // });
    
    // const isDesktopDevice = useMediaQuery({
    //     query: "(min-device-width: 1200px)",
    // });

    return(
     <>
        {/* {isMobileDevice && <Mobile />}
        {isTabletDevice && <Tablet />}
        {isLaptopDevice && <Laptop />}
        {isDesktopDevice && <Home />} */}

        <Home />
     </>
    )
    
}

export default App;