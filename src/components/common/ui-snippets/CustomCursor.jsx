import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const CustomCursor = () => {

    useEffect(() => {
        // Custom Cursor
let posX = 0,
posY = 0;
let mouseX = 0,
mouseY = 0;

document.addEventListener("mousemove", (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

gsap.to(".custom-cursor", {
duration: 0.018,
repeat: -1,
onRepeat: () => {
  posX += (mouseX - posX) / 8;
  posY += (mouseY - posY) / 8;
  gsap.set(".custom-cursor", { css: { left: posX - 1, top: posY - 2 } });
},
});
    
    }, [])
    

  return (
    <div className="custom-cursor"></div>
  )
}

export default CustomCursor