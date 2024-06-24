import { getRectangle } from "../vendor/gongju-es";
import { isElement } from "../vendor/gongju-es";
import { getDocument } from "../vendor/gongju-es";

export function randomNumber() {
  const timestamp = Date.now();
  const seconds = Math.floor(timestamp / 1000);
  const randomValue = Math.floor(Math.random() * (seconds + 1));
  return randomValue;
}

export function linkify(link) {
  return `/${link
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase()}`;
}

export function stringifyFormat(link) {
  return `${link
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .split(" ")
    .join("-")
    .toLowerCase()}`;
}

export function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

export function firstLetterUppercase(chaine) {
  return chaine.charAt(0).toUpperCase() + chaine.slice(1).toLowerCase();
}

export function style(node, styles) {
  return Object.keys(styles).forEach((key) => (node.style[key] = styles[key]));
}

export const scrollTriggerFooter = (props, customFunction) => {
  let { triggerElement, timeline, end, pin, pinEnd } = props;
  // In this function we would like to create the behavior of the ScrollTrigger
  // First we init the behavior
  let pinElement = false;
  let initialHeight = false;
  triggerElement = isElement(triggerElement)
    ? triggerElement
    : getDocument().querySelector(triggerElement);
  initialHeight = getRectangle(triggerElement).height;
  triggerElement.style.height = initialHeight + end + "px";
  triggerElement.style.position = "relative";

  let rectElement = () => getRectangle(triggerElement);
  pinElement = pin ? triggerElement.querySelector(".pin") : false;

  window.lenis.on("scroll", () => {
    if (pinElement && -rectElement().top >= 0) {
      if (!pinEnd) {
        if (
          -rectElement().top <=
          rectElement().height - getRectangle(pinElement).height
        ) {
          // pinElement.style.transform = `translateY(${- rectElement().top}px)`;
          pinElement.style.position = "fixed";
          pinElement.style.transform = ``;
          pinElement.style.top = "0px";
          pinElement.style.left = "0px";
        } else {
          pinElement.style.transform = `translateY(${
            rectElement().height - getRectangle(pinElement).height
          }px)`;
          pinElement.style.position = ``;
        }
      }
      if (pinEnd) {
        pinElement.style.position = "fixed";
        pinElement.style.transform = ``;
        pinElement.style.top = "0px";
        pinElement.style.left = "0px";
      }
    } else {
      if (pinElement) {
        pinElement.style.transform = ``;
        pinElement.style.position = ``;
      }
    }

    if (customFunction) {
      customFunction({
        fullProgress: -rectElement().top / rectElement().height,
        progress:
          -rectElement().top / (rectElement().height - window.innerHeight),
      });
    }
  });
};

export const crossProduct = (a, b, c) => {
  return (c * b) / a;
};
