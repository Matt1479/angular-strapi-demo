export interface Page {
  title: string;
  content: string;
}

export interface PageAttributesDTO {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export interface CollectionDTO {
  id: number;
  attributes: PageAttributesDTO;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface StrapiDTO {
  data: CollectionDTO[];
  meta: Meta;
}
