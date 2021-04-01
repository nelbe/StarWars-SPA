import gsap from "gsap";
import Logo from '../assets/img/logo.svg';
import React, { useEffect, useRef } from "react";

function Index() {
    const intro = useRef();
    const title = useRef();

    useEffect(() => {
      let tl = new gsap.timeline();
  
      tl.to(intro.current, {
        opacity: 1,
        delay: 1,
        duration: 1
      })
        .set(title.current, { opacity: 1, scale: 2.75, delay: 0.3 })
        // .to(title.current, { scale: 0.05, ease: "Power2.easeOut", duration: 3 })
        .to(title.current, { scale: 0.05, ease: "Power2.easeOut", duration: 3, onComplete: goToNextPage })
        .to(title.current, { opacity: 0, duration: 1.5 }, "-=1.5")
        // .to(content.current, { top: "-170%", duration: 50 })
    }, []);
    
    const goToNextPage = () => {
        window.location = '/characters';
    };

    return (
      <div className="bg-black w-full h-screen relatve">
        <div className="left-2/4 opacity-0 absolute transform scale-50 top-2/4 z-200 items-center flex justify-center w-72" ref={title}>
          <Logo />
        </div>
      </div>
    );
}
  
export default Index;