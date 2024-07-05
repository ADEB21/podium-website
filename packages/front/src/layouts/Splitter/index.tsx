import React from "react";
import splt from "spltjs";
import gsap from "gsap";
import eventBus from "@/assets/scripts/utils/eventBus";

const index = () => {
  React.useEffect(() => {

    splt({
      reveal: true,
    });

    eventBus.on("startSpltjs", () => {
      gsap.fromTo(
        ".reveal",
        {
          y: "100%",
        },
        {
          y: "0%",
          stagger: {
            amount: 0.5
          },
        }
      );
    });
  }, []);

  return;
};

export default index;
