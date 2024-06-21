import React from "react";
import Lenis from "lenis";
import eventBus from '@/assets/scripts/utils/eventBus.js';
const SmoothScroll = (props) => {
  const { wrapper } = props;
  React.useEffect(() => {
   
    const l = new Lenis({
      duration: 1.2,
      easing: (t)=>Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      wrapper: wrapper ? wrapper.current : window,
    });

    function raf(time) {
      l.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    if(!wrapper){
      

   

    window.lenis = l;
    } 


    if(wrapper && l){
     // console.log("Wrapper init", wrapper);
      l.on('scroll', ()=>{
        // check height 
        let elementHeight = l.rootElement.scrollHeight;
        let totalScroll = l.limit;

        if(totalScroll < elementHeight){
          //l.reset();

          if(document.querySelector('body').getBoundingClientRect().height < elementHeight){
            document.querySelector('body').style.minHeight = elementHeight + 'px';
          }
        }
      })
    }
  }, []);
  return <></>;
};

export default SmoothScroll;
