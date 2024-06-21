import Picture from "@/components/atoms/Picture";
import { useEffect, useRef } from "react";
import Style from "./style.module.scss";

const IndexHero = (props: {
  images?: Picture;
  title?: string;
  summary?: string;
}) => {
  const { images, title } = props;
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
        <h1>{title}</h1>
      </div>
    </section>
  );
};

const index = (props: {
  type: string;
  images?: Picture;
  title?: string;
  summary?: string;
}) => {
  const { type, images, summary, title } = props;
  switch (type) {
    case "index":
      return <IndexHero title={title} summary={summary} images={images} />;
    case "secondary":
      return;
  }
};

export default index;
