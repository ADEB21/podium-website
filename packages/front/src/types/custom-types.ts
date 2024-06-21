type PictureFormat = { jpeg: string[]; webp: string[] };

type Picture = {
  id?: string,
  desktop: PictureFormat;
  mobile: PictureFormat;
  lazy: { desktop: string; mobile: string };
};
type SanityCrop = {
  bottom: number;
  left: number;
  right: number;
  top: number;
};
type SanityHotspot = {
  height: number;
  width: number;
  x: number;
  y: number;
};
type SanityImage = {
  asset: { _type: string; _ref: string };
  crop?: SanityCrop;
  hotspot?: SanityHotspot;
  alt: { en: string; fr: string };
  _type: string;
  _key: string;
};
type SanityTextBlock = [
  {
    markDefs: any[];
    children: [
      {
        _type: string;
        marks: any[];
        text: string;
        _key: string;
      }
    ];
    _type: string;
    style: string;
    _key: string;
  }
];

type secondGalleryType = {
  _type: string;
  landscape?: SanityImage;
  portrait?: SanityImage;
  portraitOne?: SanityImage;
  portraitTwo?: SanityImage;
  pictureArray?: SanityImage[];
};

type LangString = {
  en: string;
  fr: string;
};

type Lang = string | number | symbol;

type Column = {
  col_one: string;
  col_two: string;
  name: string;
  _key: string;
};

type Columns = {
  Columns: Column[];
  title: string;
  _type: "data";
  _key: string;
};

type ProjectContent = {
  en: SanityImage[] | Columns[];
  fr: SanityImage[] | Columns[];
};

type Project = {
  _id: string;
  content: ProjectContent;
  cover: SanityImage;
  description: LangString;
  link: string;
  title: LangString;
  type: LangString;
  seo: {
    slug: { en: { current: string }; fr: { current: string } };
    cover: SanityImage;
    keywords: LangString;
    description: LangString;
    title: LangString;
  };
};

type CardSize = {
  widthDesktop: number;
  heightDesktop: number;
  widthMobile: number;
  heightMobile: number;
};
