export interface Page {
  route: string;
  name: string;
  meta?: {
    title?: string;
  };
  frontMatter?: {
    title?: string;
    description?: string;
    date?: string;
    ogImage?: string;
  };
}
