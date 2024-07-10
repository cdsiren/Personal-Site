import { PortableTextBlock } from "sanity";

export interface ScreenSizeContext {
  width: number;
  height: number;
  type?: string;
}

interface SanityCategory {
  _key: string,
  _ref: string,
  _type: string,
  _updatedAt: Date,
  description: string,
  title: string
}

export interface SanityPost {
  author: {
    _ref: string,
    _type: string
  },
  body: PortableTextBlock[],
  categories: SanityCategory[],
  mainImage: {
    _type: string,
    asset: {
      _ref: string,
      _type: string,
      cleanUrl: string,
    },
  },
  publishedAt: Date,
  slug: {
    current: string,
    _type: string
  },
  title: string,
  topic: string,
  _createdAt: string,
  _id: string,
  _rev: string,
  _type: "post",
  _updatedAt: Date
}

export interface CleanSanityPost extends SanityPost {
  categoryName?: string;
  date?: string;
  image?: string;
}
