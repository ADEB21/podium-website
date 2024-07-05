import Picture from "@/components/atoms/Picture";
import { useEffect, useRef } from "react";
import Style from "./style.module.scss";

const index = (props: {
  images?: Picture;
  title?: any;
  summary?: string;
  children?: any;
}) => {
  const { images, summary, title, children } = props;
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className={Style.heroIndex}>
      <div className={Style.heroIndex__wrapper}>
        <Picture
          alt={"image hero"}
          widthDesktop={1440}
          heightDesktop={1024}
          widthMobile={320}
          heightMobile={530}
          images={images}
          isLazy={false}
          isParallax={true}
        />
        <h1>{title.split("|").map((el: string) => {
          return <span className={`splt ${Style.split}`}>{el}</span>
        })}</h1>
      </div>
    </section>
  );
};

export default index;
