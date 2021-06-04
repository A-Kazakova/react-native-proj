import { RootState as IRootState } from 'store/rootReducer';

declare global {
  export type RootState = IRootState;
}
