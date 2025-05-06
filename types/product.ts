export type ProductType = {
  id: number;
  slug: string;
  productName: string;
  taste: string;
  origin: string;
  description: string;
  price: number;
  isFeatured: boolean;
  documentId: string;
  category?: {
    categoryName: string;
  };
  images: {
    id: number;
    url: string;
    name: string;
    mime: string;
    ext: string;
    size: number;
    width: number;
    height: number;
    hash: string;
    caption: string | null;
    alternativeText: string | null;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    formats?: {
      large?: ImageFormat;
      medium?: ImageFormat;
      small?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentId: string;
  }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type ImageFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
};
