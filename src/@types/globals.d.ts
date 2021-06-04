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
declare type ActionType<T, U> = T extends { type: U } ? T : never;
declare type PayloadAction<T, U> = ActionType<T, U> extends { payload: infer X } ? X : never;
