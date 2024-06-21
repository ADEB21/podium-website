import { getRectangle, isVisible } from "../vendor/gongju-es";

export const initOutParallax = (
  el: HTMLPictureElement,
  direction: "top" | "bottom" = "top"
) => { 
  const pictureRect = getRectangle(el);
  let progress = Math.max(
    0,
    Math.min(
      1,
      (window.innerHeight - pictureRect.top) /
        (window.innerHeight + pictureRect.height)
    )
  );
  const delta = 200;
  
  el.parentElement.style.setProperty(
    "--smooth-progress",
    progress.toString()
  );
  el.parentElement.style.transform = `translateY(calc(var(--smooth-progress) * ${
    direction === "top" ? -delta : delta
  }px))`;
};

export const initParallax = (
  el: HTMLPictureElement,
  direction: "top" | "bottom" = "top"
) => {
  const img = el.querySelector("img");
  const scaleAmount = 1.2;

  if (!img) return;

  const pictureHeight = el.offsetHeight;
  const imgHeight = img.offsetHeight * scaleAmount;
  const delta = imgHeight - pictureHeight;

  const isParallax = el.getAttribute("data-parallax") !== "false";

  if (isParallax && isVisible(img)) {
    const pictureRect = getRectangle(img);
    let progress = Math.max(
      0,
      Math.min(
        1,
        (window.innerHeight - pictureRect.top) /
          (window.innerHeight + pictureRect.height)
      )
    );
    img.style.setProperty("--smooth-progress", progress.toString());
    img.style.transform = `translateY(calc(var(--smooth-progress) * ${
      direction === "top" ? -delta : delta
    }px)) scale(${scaleAmount})`;
  }
};

export default initParallax;
