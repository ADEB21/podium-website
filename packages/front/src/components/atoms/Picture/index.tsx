import useIsMobile from "@/assets/scripts/hooks/useIsMobile";
import { buildSanityImages } from "@/assets/scripts/utils/api/urlBuilder";
import { initOutParallax, initParallax } from "@/assets/scripts/utils/parallax";
import { isVisible } from "@/assets/scripts/vendor/gongju-es";
import React from "react";
import Style from "./picture.module.scss";

const Picture = (props: {
  alt: string;
  widthDesktop: number;
  heightDesktop: number;
  widthMobile: number;
  heightMobile: number;
  images?: Picture;
  isLazy: boolean;
  isParallax: boolean;
  isOutParallax?: boolean;
  parallaxDirection?: "top" | "bottom";
  sanityImage?: SanityImage;
}) => {
  const {
    alt,
    heightDesktop,
    heightMobile,
    widthDesktop,
    widthMobile,
    images,
    isLazy,
    isParallax,
    parallaxDirection,
    sanityImage,
    isOutParallax,
  } = props;

  const isMobile = useIsMobile();
  const picture = React.useRef<HTMLPictureElement>(null);
  const imagesBuilded = sanityImage
    ? buildSanityImages(
        sanityImage,
        widthDesktop,
        heightDesktop,
        widthMobile,
        heightMobile
      )
    : images;

  const preInitParallax = () => {
    if (picture.current) {
      initParallax(picture.current, parallaxDirection);
    }
  };

  const preInitOutParallax = () => {
    if (picture.current) {
      initOutParallax(picture.current, parallaxDirection);
    }
  };

  React.useEffect(() => {
    if (!picture.current) return;
    const img = picture.current.querySelector("img");
    const sources = picture.current.querySelectorAll("source");
    const container = document.querySelector(
      "#bi-modals section:last-child .wrapper-content"
    );

    const load = () => {
      if (isVisible(picture.current) && img) {
        img.onload = () => {
          picture.current?.classList.add(Style.loaded);
        };

        // Change source url
        sources?.forEach((element) => {
          const srcSet = element.dataset.srcSet;
          if (srcSet) {
            element.srcset = srcSet;
          }
        });

        if (img) {
          const imgSrc = img.dataset.src;
          if (imgSrc && picture.current) {
            img.src = imgSrc;
          }
        }
      }
    };

    const handleLazy = () => {
      load();
      document.addEventListener("scroll", load);
    };

    const handleNoLazy = () => {
      load();
      picture?.current?.classList.add(Style.notLazy);
      const imgSrc = img?.dataset.src;
      if (imgSrc && picture.current) {
        img.src = imgSrc;
      }
    };

    const handleParallax = () => {
      if (!picture.current) return;
      if (!img) return;

      img.classList.add(Style.parallax);
      img.style.setProperty(
        "--direction",
        parallaxDirection ? parallaxDirection : "top"
      );
      initParallax(picture.current, parallaxDirection);
      document.addEventListener("scroll", preInitParallax);
      if (container) {
        container.addEventListener("scroll", preInitParallax);
      }
    };

    const handleOutParallax = () => {
      if (!picture.current) return;
      if (!img) return;
      if (!parallaxDirection) return;

      img.classList.add(Style.outParallax);
      img.style.setProperty("--outDirection", parallaxDirection);
      initOutParallax(picture.current, parallaxDirection);
      document.addEventListener("scroll", preInitOutParallax);
    };

    if (isLazy) {
      handleLazy();
    } else {
      handleNoLazy();
    }

    if (isParallax) {
      handleParallax();
    }

    if (isOutParallax) {
      handleOutParallax();
    }

    return () => {
      document.removeEventListener("scroll", load);
      document.removeEventListener("scroll", preInitParallax);
      document.removeEventListener("scroll", preInitOutParallax);
    };
  }, [isMobile]);

  return (
    <>
      <picture
        style={
          isLazy
            ? {
                backgroundImage: isMobile
                  ? `url(${imagesBuilded?.lazy.mobile})`
                  : `url(${imagesBuilded?.lazy.desktop})`,
              }
            : {}
        }
        data-parallax={isParallax ? true : false}
        data-out-parallax={isOutParallax ? true : false}
        className={Style.picture}
        ref={picture}
      >
        <source
          type="image/webp"
          media="(max-width: 767px)"
          data-src-set={`${imagesBuilded?.mobile.webp[0]} 1x, ${imagesBuilded?.mobile.webp[1]} 2x`}
        />
        <source
          type="image/jpeg"
          media="(max-width: 767px)"
          data-src-set={`${imagesBuilded?.mobile.jpeg[0]} 1x, ${imagesBuilded?.mobile.jpeg[1]} 2x`}
        />
        <source
          type="image/webp"
          media="(min-width: 768px)"
          data-src-set={`${imagesBuilded?.desktop.webp[0]} 1x, ${imagesBuilded?.desktop.webp[1]} 2x`}
        />
        <source
          type="image/jpeg"
          media="(min-width: 768px)"
          data-src-set={`${imagesBuilded?.desktop.jpeg[0]} 1x, ${imagesBuilded?.desktop.jpeg[1]} 2x`}
        />
        <source
          type="image/webp"
          media="(min-width: 1920px)"
          data-src-set={`${imagesBuilded?.desktop.webp[1]} 1x, ${imagesBuilded?.desktop.webp[1]} 2x`}
        />
        <source
          type="image/jpeg"
          media="(min-width: 1920px)"
          data-src-set={`${imagesBuilded?.desktop.jpeg[1]} 1x, ${imagesBuilded?.desktop.jpeg[1]} 2x`}
        />
        <img
          alt={`${alt}`}
          src={""}
          data-src={
            isMobile
              ? imagesBuilded?.mobile.jpeg[0]
              : imagesBuilded?.desktop.jpeg[0]
          }
          width={isMobile ? widthMobile : widthDesktop}
          height={isMobile ? heightMobile : heightDesktop}
        />
      </picture>
    </>
  );
};

export default Picture;
