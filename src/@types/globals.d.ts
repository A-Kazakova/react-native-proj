declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare type DefaultAction<T = any, U = undefined> = U extends undefined
  ? {
    readonly type: T,
    readonly payload?: any;
  }
  : {
    readonly type: T,
    readonly payload: U;
  };
declare type PickAction<T, U> = T extends { type: U } ? T : never;
declare type PayloadAction<T, U> = PickAction<T, U> extends { payload: infer X } ? X : never;

// Alfresco API responses
declare interface AlfrescoPagination {
  count: number;
  hasMoreItems: boolean;
  maxItems: number;
  skipCount: number;
  totalItems: number;
}

declare type AlfrescoEntriesResponse<T> = {
  list: {
    entries: { entry: T; }[];
    pagination: AlfrescoPagination;
  }
};
