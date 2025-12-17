import React from "react";
import eventBus from "@/assets/scripts/utils/eventBus";

const index = () => {
  React.useEffect(() => {
    const init = async () => {
      const [{ default: splt }, { default: gsap }] = await Promise.all([
        import("spltjs"),
        import("gsap"),
      ]);

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
              amount: 0.5,
            },
          }
        );
      });
    };

    void init();
  }, []);

  return null;
};

export default index;
