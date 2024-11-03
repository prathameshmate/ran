import React , {useState , useEffect} from 'react';
const CleanUpInUseEffect = () => {
    const [width, updateWidth] = useState(window.screen.width);

    const actualWidth = ()=>{
        updateWidth(window.innerWidth);
    }

    useEffect(() => {
            console.log(window.innerWidth);
            window.addEventListener("resize" , actualWidth)

    }, )
    return (
        <>
            
            <h1>actual size of screen</h1> 
            <p>{width}</p>
        </>
    )
}
export default CleanUpInUseEffect;
