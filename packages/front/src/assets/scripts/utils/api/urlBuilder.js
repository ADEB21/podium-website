// Create a sanity image url builder
// https://cdn.sanity.io/images/<project id>/production/<id>?rect=<rect>?w=<width>&h=<height>
// @param {id} id - the id of the image
// @param {width} width - the width of the image
// @param {height} height - the height of the image
// @param {rect} rect - the rect of the image

const crossProduct = (a, b, c) => {
  return (c * b) / a;
};

import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder({
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
});

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export const urlImageBuilder = (id, width, height, cropData, hotspot, type) => {
  const percentToPx = (percent, dimension) => {
    return parseInt((percent / 100) * dimension);
  };

  const originalDimensions = getImageDimensions(id);

  if (!cropData) {
    return builder.image(id).width(width).height(height).url();
  }

  const cropDataInPx = {
    left: percentToPx(cropData?.left * 100, originalDimensions.width),
    right: percentToPx(cropData?.right * 100, originalDimensions.width),
    top: percentToPx(cropData?.top * 100, originalDimensions.height),
    bottom: percentToPx(cropData?.top * 100, originalDimensions.height),
  };

  return builder
    .image(id)
    .width(width)
    .height(height)
    .rect(
      // X
      cropData?.left ? cropDataInPx.left : 0,
      // Y
      cropData?.top ? cropDataInPx.top : 0,
      // Width
      originalDimensions.width - cropDataInPx.left - cropDataInPx.right,
      // Height
      originalDimensions.height - cropDataInPx.top - cropDataInPx.bottom
    )
    .format(type)
    .url();
};

export const buildSanityImages = (
  sanityImage,
  widthDesktop,
  heightDesktop,
  widthMobile,
  heightMobile
) => {
  return {
    mobile: {
      jpeg: [
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthMobile,
          heightMobile,
          sanityImage?.crop,
          sanityImage?.hotspot
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthMobile * 2,
          heightMobile * 2,
          sanityImage?.crop,
          sanityImage?.hotspot
        ),
      ],
      webp: [
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthMobile,
          heightMobile,
          sanityImage?.crop,
          sanityImage?.hotspot,
          "webp"
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthMobile * 2,
          heightMobile * 2,
          sanityImage?.crop,
          sanityImage?.hotspot,
          "webp"
        ),
      ],
    },
    desktop: {
      jpeg: [
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop,
          heightDesktop,
          sanityImage?.crop,
          sanityImage?.hotspot
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop * 2,
          heightDesktop * 2,
          sanityImage?.crop,
          sanityImage?.hotspot
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop * 4,
          heightDesktop * 4,
          sanityImage?.crop,
          sanityImage?.hotspot
        ),
      ],
      webp: [
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop,
          heightDesktop,
          sanityImage?.crop,
          sanityImage?.hotspot,
          "webp"
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop * 2,
          heightDesktop * 2,
          sanityImage?.crop,
          sanityImage?.hotspot,
          "webp"
        ),
        urlImageBuilder(
          sanityImage?.asset._ref,
          widthDesktop * 4,
          heightDesktop * 4,
          sanityImage?.crop,
          sanityImage?.hotspot,
          "webp"
        ),
      ],
    },
    lazy: {
      desktop: urlImageBuilder(
        sanityImage?.asset._ref,
        1,
        1,
        sanityImage?.crop,
        sanityImage?.hotspot,
        "webp"
      ),
      mobile: urlImageBuilder(
        sanityImage?.asset._ref,
        1,
        1,
        sanityImage?.crop,
        sanityImage?.hotspot,
        "webp"
      ),
    },
  };
};

export const urlFileBuilder = (id) => {
  let params = id.split("-");
  let dataset =
    import.meta.env.PUBLIC_MODE === "DEV"
      ? import.meta.env.PUBLIC_SANITY_DATASET_DEV
      : import.meta.env.PUBLIC_SANITY_DATASET_PROD;
  let projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;

  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${params[1]}.${params[2]}`;
};
