export type IDType = { id: string };
export type TitleType = { title: string };
export type DescType = { description: string };
export type NameType = { name: string };
export type UrlType = { url: string };
export type ImageType = { image: TypeResponsiveImage };

export type TypeResponsiveImage = {
  responsiveImage: {
    src: string;
    alt: string;
    width: string;
    height: string;
    sizes: string;
    srcSet: string;
  };
};

export interface IArticle extends TitleType, DescType {}

export interface ILinks extends NameType {
  anchor: string;
}
export interface INavigation {
  links: Array<ILinks>;
}

export interface ISEO {
  globalSeo: {
    fallbackSeo: IArticle & { image: UrlType };
  };
  favicon: UrlType;
}

export interface IHero extends TitleType, UrlType {}

export interface IPrice {
  time: string;
  price?: string;
}
export interface IService extends TitleType, DescType {
  prices: Array<IPrice>;
}
export interface IServices extends TitleType, DescType {
  services: Array<IService>;
}

export interface IGirl extends NameType, ImageType {
  date: string;
}
export interface IGirls extends TitleType, DescType {
  girls: Array<IGirl>;
}

export interface IShop extends TitleType, DescType {
  image: Array<TypeResponsiveImage>;
}

export interface IData {
  _site: ISEO;
  heroSection: IHero;
  servicesSection: IServices;
  girlsSection: IGirls;
  shopSection: IShop;
}
