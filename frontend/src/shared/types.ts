export interface IImage {
  id: string;
  url: string;
  categoryId: number | null;
  liked: boolean;
}

export interface IFilterOption {
  key: string | number;
  name: string;
}
