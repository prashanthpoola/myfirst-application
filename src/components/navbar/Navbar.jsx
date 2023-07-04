import { useState,useEffect } from "react";

const Navbar = () => {
    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);
    const getMousePosition = e =>{
        console.log ('Mouse Moving');
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() =>{
        console.log('Use Effect Run!')
        window.addEventListener('mousemove', getMousePosition)
    },[])
    return ( 
        <div>
            <h1> useEffect() Hook</h1>
            <h1> Hooks - X : {x} Y : {y}</h1>
        </div>
     );
}
 
export default Navbar;