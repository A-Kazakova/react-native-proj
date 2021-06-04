import {
  ListItem,
  GetListItemRequest,
} from 'models/List';

import { ListActionsNames as types } from '../actionsList/list';

export interface ListState {
  isLoading: boolean;
  list: ListItem[];
  curretnItem: ListItem | null;
  isCurrentItemLoading: boolean;
}

export type FetchListRequestActionType = DefaultAction<typeof types.FETCH_LIST_REQUEST>;
export type FetchListSuccessActionType = DefaultAction<typeof types.FETCH_LIST_SUCCESS, ListItem[]>;
export type FetchListRejectedActionType = DefaultAction<typeof types.FETCH_LIST_REJECTED>;
export type ClearListActionType = DefaultAction<typeof types.CLEAR_LIST>;

export type FetchListItemRequestActionType = DefaultAction<typeof types.FETCH_LIST_ITEM_REQUEST, GetListItemRequest>;
export type FetchListItemSuccessActionType = DefaultAction<typeof types.FETCH_LIST_ITEM_SUCCESS, ListItem>;
export type FetchListItemRejectedActionType = DefaultAction<typeof types.FETCH_LIST_ITEM_REJECTED>;
export type ClearCurrentListItemActionType = DefaultAction<typeof types.CLEAR_CURRENT_LIST_ITEM>;


export type ListActionTypes = FetchListRequestActionType
| FetchListSuccessActionType
| FetchListRejectedActionType
| ClearListActionType
| FetchListItemRequestActionType
| FetchListItemSuccessActionType
| FetchListItemRejectedActionType
| ClearCurrentListItemActionType;
