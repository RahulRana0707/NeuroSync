interface URLS {
  full: string | null;
  raw: string | null;
  regular: string;
  small: string;
}

export interface UnsplashPhoto {
  id: string;
  blur_hash: string | null;
  urls: URLS;
  slug: string | null;
}
