import React from "react";
import splt from "spltjs";
import gsap from "gsap";
import eventBus from "@/assets/scripts/utils/eventBus";

const index = () => {
  React.useEffect(() => {
    console.log("Splitter activate", splt);
    console.log("GSAP activate", gsap);

    splt({
      reveal: true,
    });

    eventBus.on("startSpltjs", () => {
      gsap.fromTo(
        ".reveal",
        {
          y: "100%",
          ease: "cubicBezier(.71,-0.77,.43,1.67)",
        },
        {
          y: "0%",
          stagger: {
            each: 0.06,
            ease: "cubicBezier(.71,-0.77,.43,1.67)",
          },
        }
      );
    });
  }, []);

  return;
};

export default index;
