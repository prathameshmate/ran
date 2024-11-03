import React, { useEffect ,useState } from 'react';

const CustomHook = () => {

    const [width, updateWidth] = useState(window.screen.width);

    const actualWidth = () => {
        updateWidth(window.innerWidth);
    }
    useEffect(() => {
        console.log(window.innerWidth);
        window.addEventListener("resize", actualWidth)

        // return(window.removeEventListener("resize" , actualWidth));
    })

}

export default CustomHook;