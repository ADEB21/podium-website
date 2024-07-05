import Picture from "@/components/atoms/Picture";
import React from "react";
import Style from "./style.module.scss";

const index = (props: {
  title: string;
  summary: string;
  picture: any;
  tag: string;
}) => {
  const { title, summary, picture, tag } = props;
  return (
    <article className={Style.card}>
      <span className="bi-small-body">{tag}</span>
      <Picture
        alt={"converture du projet"}
        widthDesktop={880}
        heightDesktop={618}
        widthMobile={640}
        heightMobile={480}
        sanityImage={picture}
        isLazy={false}
        isParallax={true}
        parallaxDirection="bottom"
      />
      <p>
        <span>{title}</span>
      </p>
    </article>
  );
};

export default index;
